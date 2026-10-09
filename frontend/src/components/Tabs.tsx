import { Button } from "@/components/Button";
import "@/css/tabs.css";

type TabsProps<T extends string> = {
  items: readonly T[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
  "aria-label"?: string;
};

export function Tabs<T extends string>({
  items,
  value,
  onChange,
  className,
  "aria-label": ariaLabel = "Sections",
}: TabsProps<T>) {
  return (
    <div
      className={["tabs", className].filter(Boolean).join(" ")}
      role="tablist"
      aria-label={ariaLabel}
    >
      {items.map((item) => (
        <Button
          key={item}
          variant="tab"
          role="tab"
          aria-selected={value === item}
          active={value === item}
          onClick={() => onChange(item)}
        >
          {item}
        </Button>
      ))}
    </div>
  );
}
