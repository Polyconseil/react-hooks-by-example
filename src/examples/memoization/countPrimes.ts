const isPrime = (num: number) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

export default function countPrimes(arr: number[]): number {
  return arr.filter(isPrime).length;
}
