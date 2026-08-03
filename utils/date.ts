/** Format ISO date strings for display. */
export function formatDate(
  value: string | Date,
  options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  },
): string {
  const date = typeof value === "string" ? new Date(value) : value;
  return new Intl.DateTimeFormat("en-IN", options).format(date);
}

/** Compact relative time for blogs and events. */
export function formatRelativeDate(value: string | Date): string {
  const date = typeof value === "string" ? new Date(value) : value;
  const diff = date.getTime() - Date.now();
  const days = Math.round(diff / (1000 * 60 * 60 * 24));
  const formatter = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  if (Math.abs(days) < 30) {
    return formatter.format(days, "day");
  }

  const months = Math.round(days / 30);
  if (Math.abs(months) < 12) {
    return formatter.format(months, "month");
  }

  return formatter.format(Math.round(months / 12), "year");
}
