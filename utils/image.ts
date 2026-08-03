/** Build a responsive sizes attribute for next/image. */
export function imageSizes(maxWidth = 1280): string {
  return `(max-width: 768px) 100vw, (max-width: 1280px) 80vw, ${maxWidth}px`;
}
