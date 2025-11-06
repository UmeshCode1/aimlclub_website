"use client";
import DriveGallery from './DriveGallery';

export default function GalleryGrid() {
  // Uses Google Drive folder to populate the gallery.
  // Configure the folder/API key in src/data/drive.ts
  return <DriveGallery />;
}
