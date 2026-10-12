import type { ReactNode } from "react";
import "@/css/layout-page.css";

type LayoutPageProps = {
  title?: string;
  children: ReactNode;
  variant?: "default" | "narrow";
};

export const LayoutPage = ({
  title,
  children,
  variant = "default",
}: LayoutPageProps) => (
  <div className={`layout-page layout-page--${variant}`}>
    {title ? <h1 className="layout-page-title">{title}</h1> : null}
    {children}
  </div>
);
