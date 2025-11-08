"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = [
  { key: 'classify', label: 'Image Classification' },
  { key: 'nlp', label: 'Text Sentiment' },
  { key: 'vision', label: 'Object Hints' }
] as const;

type TabKey = typeof tabs[number]['key'];

export default function ModelDemo() {
  const [active, setActive] = useState<TabKey>('classify');

  return (
    <div className="card p-6 md:p-8">
      <div className="flex flex-wrap items-center gap-2 mb-6">
        {tabs.map(t => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={`px-3 py-1.5 rounded-md text-sm border transition-all ${
              active === t.key
                ? 'bg-white/10 border-white/20 text-white'
                : 'bg-white/5 border-white/10 text-white/70 hover:text-white'
            }`}
            aria-pressed={active === t.key}
            aria-label={`Open ${t.label} demo`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="relative min-h-40">
        <AnimatePresence mode="wait">
          {active === 'classify' && (
            <motion.div
              key="classify"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-3"
            >
              <p className="text-white/75">Drop an image to see example labels a model could predict.</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {['Laptop', 'Person', 'Book', 'Bottle'].map((l) => (
                  <div key={l} className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white/80">
                    {l}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {active === 'nlp' && (
            <motion.div
              key="nlp"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-3"
            >
              <label htmlFor="sent" className="text-sm text-white/80">Enter a sentence</label>
              <input id="sent" placeholder="I loved the workshop!" className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-sm" />
              <div className="flex gap-2">
                {[
                  { label: 'Positive', score: 0.86, color: 'text-emerald-400 bg-emerald-500/15 border-emerald-500/30' },
                  { label: 'Neutral', score: 0.10, color: 'text-slate-300 bg-slate-500/15 border-slate-500/30' },
                  { label: 'Negative', score: 0.04, color: 'text-rose-300 bg-rose-500/15 border-rose-500/30' }
                ].map((t) => (
                  <div key={t.label} className={`px-3 py-2 rounded-lg text-sm border ${t.color}`}>
                    {t.label}: {(t.score * 100).toFixed(0)}%
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {active === 'vision' && (
            <motion.div
              key="vision"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-3"
            >
              <p className="text-white/75">Objects a detection model could highlight:</p>
              <div className="flex gap-2 flex-wrap">
                {['🏷️ Label', '📦 Box', '🎯 Confidence'].map((l) => (
                  <span key={l} className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-sm">{l}</span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
