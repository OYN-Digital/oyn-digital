"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function FadeIn({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Biar jalan setelah hydration
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={cn(
        "transition-opacity duration-700 ease-out",
        mounted ? "opacity-100" : "opacity-0",
        className
      )}
    >
      {children}
    </div>
  );
}
