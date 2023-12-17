export const range = (length: number, start: number = 0): number[] => {
  const range: number[] = [];

  for (let i = 0; i < length; i++) {
    range.push(start + i);
  }

  return range;
};
