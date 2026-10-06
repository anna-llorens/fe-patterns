import "@/instrument-icon.css";

type InstrumentIconProps = {
  symbol: string;
  size?: "list" | "detail";
  /** Search dropdown uses a darker tile */
  tone?: "default" | "search" | "detail";
};

export const InstrumentIcon = ({
  symbol,
  size = "list",
  tone = "default",
}: InstrumentIconProps) => {
  const letters = size === "detail" ? 2 : 1;

  return (
    <span
      className={`instrument-icon instrument-icon--${size} instrument-icon--tone-${tone}`}
      aria-hidden
    >
      {symbol.slice(0, letters)}
    </span>
  );
};
