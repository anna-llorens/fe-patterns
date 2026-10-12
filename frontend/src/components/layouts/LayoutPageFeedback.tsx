type LayoutPageFeedbackProps = {
  variant?: "loading" | "error" | "empty";
  title?: string;
  message: string;
  action?: React.ReactNode;
};

export function LayoutPageFeedback({
  variant = "empty",
  title,
  message,
  action,
}: LayoutPageFeedbackProps) {
  const role = variant === "error" ? "alert" : "status";

  return (
    <div
      className={`layout-page-feedback layout-page-feedback--${variant}`}
      role={role}
    >
      {title && (
        <h2 className="layout-page-feedback__title">
          {title}
        </h2>
      )}

      <p className="layout-page-feedback__message">
        {message}
      </p>

      {action && (
        <div className="layout-page-feedback__action">
          {action}
        </div>
      )}
    </div>
  );
}