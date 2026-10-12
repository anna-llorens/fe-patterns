import { useMemo, useState } from "react";
import { Button } from "@/components/Button";
import type { PricePoint } from "@/instruments/model/Instrument";

export const CHART_RANGES = ["1D", "1W", "1M", "3M", "1Y", "5Y", "ALL"] as const;
export type ChartRange = (typeof CHART_RANGES)[number];

const RANGE_DAYS: Record<ChartRange, number> = {
  "1D": 1,
  "1W": 7,
  "1M": 30,
  "3M": 90,
  "1Y": 365,
  "5Y": 365 * 5,
  ALL: Number.POSITIVE_INFINITY,
};

function sortedHistory(history: PricePoint[]): PricePoint[] {
  return [...history].sort((a, b) => a.date.localeCompare(b.date));
}

function historySpanDays(history: PricePoint[]): number {
  if (history.length === 0) return 0;
  const sorted = sortedHistory(history);
  const first = new Date(sorted[0].date);
  const last = new Date(sorted[sorted.length - 1].date);
  const ms = last.getTime() - first.getTime();
  return Math.floor(ms / 86_400_000) + 1;
}

export function availableChartRanges(history: PricePoint[]): ChartRange[] {
  if (history.length === 0) return [];

  const spanDays = historySpanDays(history);
  const ranges = CHART_RANGES.filter(
    (chartRange) => chartRange === "ALL" || RANGE_DAYS[chartRange] <= spanDays,
  );

  return ranges.length > 0 ? ranges : ["ALL"];
}

function defaultChartRange(ranges: ChartRange[]): ChartRange {
  for (let index = CHART_RANGES.length - 2; index >= 0; index--) {
    const chartRange = CHART_RANGES[index];
    if (ranges.includes(chartRange)) return chartRange;
  }
  return ranges.includes("ALL") ? "ALL" : ranges[0];
}

function historyForRange(
  history: PricePoint[],
  range: ChartRange,
): PricePoint[] {
  if (history.length === 0) return [];

  const sorted = sortedHistory(history);
  const days = RANGE_DAYS[range];
  if (!Number.isFinite(days)) return sorted;

  const latest = new Date(sorted[sorted.length - 1].date);
  const cutoff = new Date(latest);
  cutoff.setDate(cutoff.getDate() - days);

  const filtered = sorted.filter(
    (pricePoint) => new Date(pricePoint.date) >= cutoff,
  );
  return filtered.length > 0 ? filtered : sorted;
}

type PriceChartProps = {
  priceHistory: PricePoint[];
  positive: boolean;
};

export const PriceChart = ({ priceHistory, positive }: PriceChartProps) => {
  const ranges = useMemo(
    () => availableChartRanges(priceHistory),
    [priceHistory],
  );

  const [range, setRange] = useState<ChartRange | null>(null);

  const activeRange = useMemo(() => {
    if (range && ranges.includes(range)) return range;
    return defaultChartRange(ranges);
  }, [range, ranges]);

  const prices = useMemo(() => {
    return historyForRange(priceHistory, activeRange).map(
      (pricePoint) => pricePoint.close,
    );
  }, [priceHistory, activeRange]);

  const width = 800;
  const height = 220;
  const pad = { top: 12, right: 48, bottom: 28, left: 8 };
  const innerW = width - pad.left - pad.right;
  const innerH = height - pad.top - pad.bottom;

  if (prices.length === 0) {
    return (
      <div className="price-chart-block">
        <p className="layout-page-muted">No price history available.</p>
      </div>
    );
  }

  const min = Math.min(...prices);
  const max = Math.max(...prices);
  const span = max - min || 1;

  const coords = prices.map((price, index) => {
    const x = pad.left + (index / Math.max(prices.length - 1, 1)) * innerW;
    const y = pad.top + innerH - ((price - min) / span) * innerH;
    return { x, y };
  });

  const line = coords.map((coordinate) => `${coordinate.x},${coordinate.y}`).join(" ");
  const area = `${coords.map((coordinate) => `${coordinate.x},${coordinate.y}`).join(" ")} ${pad.left + innerW},${pad.top + innerH} ${pad.left},${pad.top + innerH}`;

  const yTicks = [min, min + span / 2, max];
  const stroke = positive ? "#22c55e" : "#ef4444";
  const fill = positive ? "rgba(34, 197, 94, 0.15)" : "rgba(239, 68, 68, 0.15)";

  return (
    <div className="price-chart-block">
      <div className="instrument-ranges">
        {ranges.map((chartRange) => (
          <Button
            key={chartRange}
            variant="pill"
            active={activeRange === chartRange}
            onClick={() => setRange(chartRange)}
          >
            {chartRange}
          </Button>
        ))}
      </div>
      <svg
        className="price-chart"
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
        role="img"
        aria-label={`Price chart, ${activeRange} range`}
      >
        {yTicks.map((tick, i) => {
          const y = pad.top + innerH - ((tick - min) / span) * innerH;
          return (
            <g key={i}>
              <line
                x1={pad.left}
                y1={y}
                x2={pad.left + innerW}
                y2={y}
                className="price-chart-grid"
              />
              <text x={width - pad.right + 8} y={y + 4} className="price-chart-label">
                {tick.toFixed(0)}
              </text>
            </g>
          );
        })}
        <polygon points={area} fill={fill} />
        <polyline points={line} fill="none" stroke={stroke} strokeWidth="2" />
      </svg>
    </div>
  );
};
