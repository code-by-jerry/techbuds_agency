export const AOS_DEFAULTS = {
  animation: "fade-up" as const,
  duration: 600,
  once: true,
};

/** Returns a staggered delay (ms) for indexed AOS elements. */
export function aosStagger(
  index: number,
  baseDelay = 0,
  step = 100,
): number {
  return baseDelay + index * step;
}
