"use client";
import React, { useEffect, useMemo, useState } from 'react';
import { DRIVE_API_KEY, DRIVE_FOLDER_ID } from '../data/drive';
import { motion } from 'framer-motion';

type DriveFile = {
  id: string;
  name: string;
  mimeType: string;
  webViewLink?: string;
  thumbnailLink?: string;
  createdTime?: string;
};

type Props = {
  folderId?: string;
  apiKey?: string;
};

const FIELDS = 'files(id,name,mimeType,webViewLink,thumbnailLink,createdTime),nextPageToken';

async function fetchDrivePage(params: Record<string, string>) {
  const url = new URL('https://www.googleapis.com/drive/v3/files');
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  const res = await fetch(url.toString());
  if (!res.ok) throw new Error(`Drive API error: ${res.status}`);
  return (await res.json()) as { files: DriveFile[]; nextPageToken?: string };
}

async function listImagesRecursive(rootId: string, apiKey: string) {
  const images: DriveFile[] = [];
  const folders: string[] = [rootId];

  while (folders.length) {
    const current = folders.pop()!;

    // List images in current folder
    let pageToken: string | undefined;
    do {
      const { files, nextPageToken } = await fetchDrivePage({
        key: apiKey,
        q: `'${current}' in parents and mimeType contains 'image/' and trashed=false`,
        pageSize: '1000',
        fields: FIELDS,
        orderBy: 'createdTime desc',
        pageToken: pageToken ?? ''
      });
      images.push(...files);
      pageToken = nextPageToken;
    } while (pageToken);

    // Find subfolders and enqueue
    pageToken = undefined;
    do {
      const { files, nextPageToken } = await fetchDrivePage({
        key: apiKey,
        q: `'${current}' in parents and mimeType = 'application/vnd.google-apps.folder' and trashed=false`,
        pageSize: '1000',
        fields: FIELDS,
        orderBy: 'name',
        pageToken: pageToken ?? ''
      });
      folders.push(...files.map((f) => f.id));
      pageToken = nextPageToken;
    } while (pageToken);
  }

  // De-duplicate and sort by time desc
  const seen = new Set<string>();
  const unique = images.filter((f) => (seen.has(f.id) ? false : (seen.add(f.id), true)));
  return unique.sort((a, b) => (b.createdTime || '').localeCompare(a.createdTime || ''));
}

export default function DriveGallery(props: Props) {
  const folderId = props.folderId ?? DRIVE_FOLDER_ID;
  const apiKey = (props.apiKey ?? DRIVE_API_KEY)?.trim();
  const [files, setFiles] = useState<DriveFile[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const useEmbedIframe = !apiKey;

  useEffect(() => {
    if (useEmbedIframe) return; // no API key, using iframe fallback
    let mounted = true;
    (async () => {
      try {
        const result = await listImagesRecursive(folderId, apiKey);
        if (mounted) setFiles(result);
      } catch (e: any) {
        if (mounted) setError(e?.message ?? 'Failed to load gallery');
      }
    })();
    return () => {
      mounted = false;
    };
  }, [folderId, apiKey, useEmbedIframe]);

  if (useEmbedIframe) {
    // Zero-config fallback: embedded Google Drive folder view
    const src = `https://drive.google.com/embeddedfolderview?id=${folderId}#grid`;
    return (
      <div className="w-full rounded-xl overflow-hidden border border-white/10 bg-black/20">
        <iframe
          src={src}
          className="w-full"
          style={{ height: 640, border: '0' }}
          loading="lazy"
          title="Club Gallery"
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm">
        Could not load Google Drive gallery: {error}
      </div>
    );
  }

  if (!files) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="aspect-video rounded-lg bg-white/5 border border-white/10 animate-pulse" />
        ))}
      </div>
    );
  }

  const items = useMemo(
    () =>
      files.map((f) => ({
        id: f.id,
        name: f.name,
        // Direct image link
        src: `https://drive.google.com/uc?id=${f.id}`,
        href: f.webViewLink ?? `https://drive.google.com/file/d/${f.id}/view`,
      })),
    [files]
  );

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((img, i) => (
        <motion.a
          key={img.id}
          href={img.href}
          target="_blank"
          rel="noreferrer noopener"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.04 }}
          whileHover={{ scale: 1.03, y: -3 }}
          className="group aspect-video rounded-lg overflow-hidden border border-white/10 bg-white/5 relative"
        >
          <img
            src={img.src}
            alt={img.name}
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute bottom-2 left-2 right-2 text-xs text-white/90 truncate drop-shadow">
            {img.name}
          </div>
        </motion.a>
      ))}
    </div>
  );
}
