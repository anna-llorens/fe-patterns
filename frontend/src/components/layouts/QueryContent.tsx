import type { ReactNode } from "react";
import { LayoutPageFeedback } from "./LayoutPageFeedback";

type QueryContentProps = {
  isPending: boolean;
  error: Error | null;
  /** True when the query has cached or fetched data worth showing (e.g. refetch failed). */
  hasData: boolean;
  loadingMessage?: string;
  errorTitle?: string;
  onRetry?: () => void;
  children: ReactNode;
};

export function QueryContent({
  isPending,
  error,
  hasData,
  loadingMessage = "Loading…",
  errorTitle = "Unable to load data",
  onRetry,
  children,
}: QueryContentProps) {
  if (isPending) {
    return (
      <LayoutPageFeedback
        variant="loading"
        message={loadingMessage}
      />
    );
  }

  if (error && !hasData) {
    return (
      <LayoutPageFeedback
        variant="error"
        title={errorTitle}
        message={error.message}
        action={
          onRetry ? (
            <button type="button" onClick={onRetry}>
              Try again
            </button>
          ) : undefined
        }
      />
    );
  }

  return children;
}