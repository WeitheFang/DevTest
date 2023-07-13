export function findOutlier(integers: number[]): number {
  const evenNumbers: number[] = [];
  const oddNumbers: number[] = [];

  for (const num of integers) {
    if (num % 2 === 0) {
      evenNumbers.push(num);
    } else {
      oddNumbers.push(num);
    }
  }

  if (evenNumbers.length === 1) {
    return evenNumbers[0];
  } else {
    return oddNumbers[0];
  }
}
