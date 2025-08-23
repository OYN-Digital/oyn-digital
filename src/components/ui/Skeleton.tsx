"use client";
import React from "react";
import { cn } from "@/lib/utils"; // kalau lo punya helper classnames

export function Skeleton({ className }: { className?: string }) {
  return (
    <div className={cn("animate-pulse rounded-md bg-gray-200", className)} />
  );
}
