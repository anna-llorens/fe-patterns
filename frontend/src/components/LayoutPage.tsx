import type { ReactNode } from "react";
import "@/layout-page.css";

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
    <h1 className="layout-page-title">{title}</h1>
    {children}
  </div>
);

type LayoutPageSectionProps = {
  title: string;
  children: ReactNode;
};

export const LayoutPageSection = ({
  title,
  children,
}: LayoutPageSectionProps) => (
  <section className="layout-page-section">
    {title && <h2 className="layout-page-section-title">{title}</h2>}
    {children}
  </section>
);
