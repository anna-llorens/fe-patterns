type PriceChartProps = {
  prices: number[];
  positive: boolean;
};

export const PriceChart = ({ prices, positive }: PriceChartProps) => {
  const width = 800;
  const height = 220;
  const pad = { top: 12, right: 48, bottom: 28, left: 8 };
  const innerW = width - pad.left - pad.right;
  const innerH = height - pad.top - pad.bottom;

  const min = Math.min(...prices);
  const max = Math.max(...prices);
  const span = max - min || 1;

  const coords = prices.map((price, i) => {
    const x = pad.left + (i / Math.max(prices.length - 1, 1)) * innerW;
    const y = pad.top + innerH - ((price - min) / span) * innerH;
    return { x, y };
  });

  const line = coords.map((p) => `${p.x},${p.y}`).join(" ");
  const area = `${coords.map((p) => `${p.x},${p.y}`).join(" ")} ${pad.left + innerW},${pad.top + innerH} ${pad.left},${pad.top + innerH}`;

  const yTicks = [min, min + span / 2, max];
  const stroke = positive ? "#22c55e" : "#ef4444";
  const fill = positive ? "rgba(34, 197, 94, 0.15)" : "rgba(239, 68, 68, 0.15)";

  return (
    <svg
      className="price-chart"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      role="img"
      aria-label="Price chart"
    >
      {yTicks.map((tick) => {
        const y = pad.top + innerH - ((tick - min) / span) * innerH;
        return (
          <g key={tick}>
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
  );
};
