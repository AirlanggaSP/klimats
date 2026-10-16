'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import type { FigureItem } from '@/types/content';
import { X } from 'lucide-react';
import { clsx } from 'clsx';

interface FigureCardProps {
  figure: FigureItem;
}

export default function FigureCard({ figure }: FigureCardProps) {
  const imageRef = useRef<HTMLImageElement>(null);
  const [failedImageSrc, setFailedImageSrc] = useState<string | null>(null);
  const imageFailed = failedImageSrc === figure.imageSrc;
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const image = imageRef.current;
    if (image?.complete && image.naturalWidth === 0) {
      setFailedImageSrc(figure.imageSrc);
    }
  }, [figure.imageSrc]);

  return (
    <div className="my-8 group relative">
      <div className="aspect-video w-full rounded-xl overflow-hidden border border-white/10 bg-canvas-base relative group-hover:border-accent-primary/30 transition-colors duration-300">
        {imageFailed ? (
          <svg
            viewBox="0 0 1600 900"
            role="img"
            aria-label={figure.altText}
            className="h-full w-full"
          >
            <rect width="1600" height="900" fill="#0b0f10" />
            <g fill="none" stroke="#10b981" strokeOpacity=".55" strokeWidth="3">
              <circle cx="800" cy="450" r="220" />
              <circle cx="800" cy="450" r="300" stroke="#2dd4bf" strokeDasharray="8 18" />
              <path d="M800 150v600M500 450h600M588 238l424 424m0-424L588 662" />
            </g>
            <circle cx="800" cy="450" r="118" fill="#101a18" stroke="#2dd4bf" strokeWidth="4" />
            <circle cx="800" cy="450" r="78" fill="#10b981" fillOpacity=".16" />
            <g fill="#34d399">
              <circle cx="800" cy="150" r="10" />
              <circle cx="1100" cy="450" r="10" />
              <circle cx="800" cy="750" r="10" />
              <circle cx="500" cy="450" r="10" />
            </g>
            <text x="800" y="465" textAnchor="middle" fill="#e2e8f0" fontSize="30" fontFamily="monospace">
              {figure.figureNumber}
            </text>
          </svg>
        ) : (
          <Image
            ref={imageRef}
            src={figure.imageSrc}
            alt={figure.altText}
            onError={() => setFailedImageSrc(figure.imageSrc)}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 66vw, 900px"
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
          />
        )}

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-canvas-base via-transparent to-transparent opacity-60" />

        {/* Slide Badge */}
        <div className="absolute top-4 right-4 px-2 py-1 bg-surface-panel/80 backdrop-blur-md border border-white/10 rounded-md">
          <span className="text-[10px] font-mono-sci text-text-secondary uppercase tracking-tighter">
            {figure.sourceRef}
          </span>
        </div>
      </div>

      <div className="mt-3 flex items-start gap-3">
        <span className="text-xs font-mono-sci text-accent-primary font-bold whitespace-nowrap">{figure.figureNumber}</span>
        <p className="text-sm text-text-body leading-relaxed">{figure.title}</p>
      </div>
    </div>
  );
}
