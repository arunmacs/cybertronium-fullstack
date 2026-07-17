"use client";

import React, { useState } from "react";

interface UserAvatarProps {
  src?: string | null;
  name?: string | null;
  email?: string | null;
  className?: string;
  fallbackClassName?: string;
}

export function UserAvatar({ src, name, email, className = "", fallbackClassName = "" }: UserAvatarProps) {
  const [error, setError] = useState(false);
  const initials = name?.charAt(0).toUpperCase() || email?.charAt(0).toUpperCase() || "?";

  if (!src || error) {
    return (
      <div className={`rounded-full flex items-center justify-center text-white font-bold shrink-0 bg-gradient-to-tr from-indigo-500 to-purple-500 ${className} ${fallbackClassName}`}>
        {initials}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt="Avatar"
      className={`rounded-full object-cover shrink-0 ${className}`}
      onError={() => setError(true)}
    />
  );
}
