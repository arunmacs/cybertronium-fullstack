"use client";
import React, { useState } from 'react';
import { API_BASE_URL } from '@/config/api';

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string | any;
  fallbackSrc?: string;
  className?: string;
  alt?: string;
}

/**
 * SmartImage handles URL resolution for images hosted on the CMS backend vs CDN.
 * It also provides graceful fallbacks and loading states.
 */
const SmartImage: React.FC<SmartImageProps> = ({
  src,
  fallbackSrc = "https://placehold.co/800x400/eee/999?text=Image+Unavailable",
  className = "",
  alt = "Image",
  ...props
}) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Helper to resolve the image URL
  const getResolvedSrc = () => {
    if (!src) return fallbackSrc;
    if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:')) {
      return src; // Absolute URL (e.g. Cloudinary, S3)
    }
    // Relative URL (e.g. MariaDB BLOB /api/media/123 or Local /uploads/file.png)
    return `${API_BASE_URL}${src}`;
  };

  const finalSrc = error ? fallbackSrc : getResolvedSrc();

  return (
    <div className={`relative overflow-hidden bg-gray-100 ${className}`}>
      {/* Skeleton / Loading State */}
      {!loaded && !error && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}

      <img
        src={finalSrc}
        alt={alt}
        className={`w-full h-[150px] object-cover transition-opacity duration-300 ${loaded || error ? 'opacity-100' : 'opacity-0'} ${className}`}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => {
          setError(true);
          setLoaded(true);
        }}
        {...props}
      />
    </div>
  );
};

export default SmartImage;
