// src/lib/utils.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from  "tailwind-merge";
; // if you're using tailwind-variants
// or: import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}
