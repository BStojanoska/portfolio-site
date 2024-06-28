import { clsx, type ClassValue } from "clsx";
import { format, formatDistance } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(date);
}

export function readingTime(html: string) {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = (wordCount / 200 + 1).toFixed();
  return `${readingTimeMinutes} min read`;
}

export function dateRange(startDate: Date, endDate?: Date | string): string {
  if (!endDate) endDate = new Date();
  const start = format(new Date(startDate), "MMM yyyy");
  const end =
    endDate === "current" ? "current" : format(new Date(endDate), "MMM yyyy");
  const distance = formatDistance(start, end === "current" ? new Date() : end);

  return `${start} - ${end} (${distance})`;
}
