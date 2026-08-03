/** Smoothly scroll to an element by id. */
export function scrollToId(id: string, offset = 0): void {
  const element = document.getElementById(id);
  if (!element) return;

  const top = element.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}

/** Scroll window to top. */
export function scrollToTop(): void {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
