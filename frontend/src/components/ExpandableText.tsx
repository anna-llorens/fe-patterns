import { useState } from "react";
import { Button } from "./Button";

type ExpandableTextProps = {
  text: string;
  maxLength?: number;
  className?: string;
};

export function ExpandableText({
  text,
  maxLength = 120,
  className,
}: ExpandableTextProps) {
  const [expanded, setExpanded] = useState(false);

  const shouldTruncate = text.length > maxLength;

  const displayedText =
    expanded || !shouldTruncate
      ? text
      : `${text.slice(0, maxLength)}…`;

  return (
    <div>
      <p className={className}>{displayedText}</p>

      {shouldTruncate && (
        <Button
          variant="ghost"
          onClick={() => setExpanded(prev => !prev)}
          aria-expanded={expanded}
        >
          {expanded ? "Show less" : "Show more"}
        </Button>
      )}
    </div>
  );
}