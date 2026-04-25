import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import SectionTitle from './SectionTitle';
import { resumeCertifications } from '../data/resumeData';

function isProbablyUrl(value) {
  return typeof value === 'string' && /^https?:\/\//i.test(value.trim());
}

function toGoogleDrivePreviewUrl(url) {
  if (!isProbablyUrl(url)) return null;
  try {
    const u = new URL(url);
    const match = u.pathname.match(/\/file\/d\/([^/]+)\//);
    if (!match) return url;
    const fileId = match[1];
    return `https://drive.google.com/file/d/${fileId}/preview`;
  } catch {
    return url;
  }
}

export default function Certifications() {
  const [previewCert, setPreviewCert] = useState(null);

  const previewUrl = useMemo(() => {
    if (!previewCert?.note || !isProbablyUrl(previewCert.note)) return null;
    return toGoogleDrivePreviewUrl(previewCert.note);
  }, [previewCert]);

  useEffect(() => {
    if (!previewCert) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setPreviewCert(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [previewCert]);

  return (
    <section
      id="certifications"
      className="scroll-mt-20 border-t border-slate-200/60 bg-transparent py-20 dark:border-slate-800/60 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Certifications"
          title="Learning & credentials"
          subtitle="Highlights from structured learning and certification programs."
        />

        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
          {resumeCertifications.map((c, idx) => (
            <motion.article
              key={c.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              role={isProbablyUrl(c.note) ? 'button' : undefined}
              tabIndex={isProbablyUrl(c.note) ? 0 : undefined}
              onClick={() => {
                if (isProbablyUrl(c.note)) setPreviewCert(c);
              }}
              onKeyDown={(e) => {
                if (!isProbablyUrl(c.note)) return;
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setPreviewCert(c);
                }
              }}
              className={[
                'flex items-start justify-between gap-4 rounded-2xl bg-white/30 backdrop-blur-md border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-5 dark:border-slate-800/60 dark:bg-white/5',
                isProbablyUrl(c.note)
                  ? 'cursor-pointer transition hover:border-orange-300/70 hover:bg-white/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/60 dark:hover:border-slate-700/70 dark:hover:bg-white/10'
                  : '',
              ].join(' ')}
            >
              <div>
                <p className="font-display text-base font-semibold text-slate-900 dark:text-white">{c.name}</p>
                {c.note ? (
                  isProbablyUrl(c.note) ? (
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Click to preview</p>
                  ) : (
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{c.note}</p>
                  )
                ) : null}
              </div>
              <span className="rounded-full border border-white/60 bg-white/50 px-2.5 py-1 text-xs font-semibold text-slate-700 backdrop-blur-sm dark:border-slate-800/60 dark:bg-white/5 dark:text-slate-200">
                Verified
              </span>
            </motion.article>
          ))}
        </div>
      </div>

      {previewCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm"
          onMouseDown={() => setPreviewCert(null)}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="w-full max-w-4xl overflow-hidden rounded-2xl border border-slate-200/20 bg-white shadow-xl dark:border-slate-800/60 dark:bg-slate-950"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 border-b border-slate-200/60 px-4 py-3 dark:border-slate-800/60">
              <div className="min-w-0">
                <p className="truncate font-display text-sm font-semibold text-slate-900 dark:text-white">
                  {previewCert.name}
                </p>
              </div>
              <div className="flex items-center gap-2">
                {isProbablyUrl(previewCert.note) && (
                  <a
                    className="rounded-lg border border-slate-200/60 bg-white px-3 py-1.5 text-sm font-semibold text-slate-800 hover:bg-slate-50 dark:border-slate-800/60 dark:bg-white/5 dark:text-slate-100 dark:hover:bg-white/10"
                    href={previewCert.note}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open in new tab
                  </a>
                )}
                <button
                  type="button"
                  className="rounded-lg border border-slate-200/60 bg-white px-3 py-1.5 text-sm font-semibold text-slate-800 hover:bg-slate-50 dark:border-slate-800/60 dark:bg-white/5 dark:text-slate-100 dark:hover:bg-white/10"
                  onClick={() => setPreviewCert(null)}
                >
                  Close
                </button>
              </div>
            </div>

            <div className="h-[70vh] bg-white dark:bg-slate-950">
              {previewUrl ? (
                <iframe className="h-full w-full" src={previewUrl} title={previewCert.name} />
              ) : (
                <div className="flex h-full items-center justify-center px-6 text-center text-slate-600 dark:text-slate-400">
                  Preview isn’t available for this link.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
