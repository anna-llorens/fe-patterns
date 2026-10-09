function symbolSeed(symbol: string): number {
    return [...symbol].reduce((acc, char) => acc + char.charCodeAt(0), 0);
  }

export function getPriceHistory(
    symbol: string,
    range: string,
    endPrice: number,
  ): number[] {
    const counts: Record<string, number> = {
      "1D": 24,
      "1W": 7,
      "1M": 30,
      "3M": 12,
      "1Y": 12,
      "5Y": 20,
      ALL: 24,
    };
    const count = counts[range] ?? 30;
    const seed = symbolSeed(symbol + range);
    const start = endPrice * (0.92 + (seed % 8) / 100);
    const points: number[] = [];
    for (let i = 0; i < count; i++) {
      const t = i / Math.max(count - 1, 1);
      const wave =
        Math.sin(t * Math.PI * 2 + seed) * endPrice * 0.03 +
        Math.cos(t * Math.PI * 4) * endPrice * 0.015;
      points.push(start + (endPrice - start) * t + wave);
    }
    points[points.length - 1] = endPrice;
    return points;
  }