export const wait = (s: number = 2) =>
  new Promise((r) => setTimeout(r, 1000 * s));
