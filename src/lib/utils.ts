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

export interface SortableItem {
  data: {
    dateStart: Date;
    dateEnd?: Date | string;
    // other properties can exist but are not needed for sorting
  };
  // other properties like id, slug, body, render can exist
}

export function sortByDateAndStatus(a: SortableItem, b: SortableItem): number {
  const dateAStart = new Date(a.data.dateStart);
  const dateBStart = new Date(b.data.dateStart);

  // Primary sort: dateStart descending
  if (dateBStart.valueOf() !== dateAStart.valueOf()) {
    return dateBStart.valueOf() - dateAStart.valueOf();
  }

  // Secondary sort: current items (dateEnd is not a *valid* Date object) first
  const aIsCurrent = !(a.data.dateEnd instanceof Date && !isNaN(a.data.dateEnd.valueOf()));
  const bIsCurrent = !(b.data.dateEnd instanceof Date && !isNaN(b.data.dateEnd.valueOf()));

  if (aIsCurrent && !bIsCurrent) { // a is current, b is not
    return -1;
  }
  if (!aIsCurrent && bIsCurrent) { // b is current, a is not
    return 1;
  }

  // Tertiary sort (if both have actual, valid end dates): dateEnd descending
  if (!aIsCurrent && !bIsCurrent) { // Both have actual, valid end dates
    // We've established dateEnd is a valid Date if !isCurrent is true
    const dateAEnd = a.data.dateEnd as Date;
    const dateBEnd = b.data.dateEnd as Date;
    return dateBEnd.valueOf() - dateAEnd.valueOf(); // Descending end dates
  }

  // If both are current (e.g., dateEnd is "current" or undefined for both),
  // or if one is current and the other has an invalid date string for dateEnd,
  // their relative order based on startDate is maintained (or could add another tie-breaker).
  return 0;
}
