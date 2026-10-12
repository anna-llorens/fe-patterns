import type { ReactNode } from "react";

type LayoutPageSectionProps = {
  title?: string;
  children: ReactNode;
};

export const LayoutPageSection = ({
  title,
  children,
}: LayoutPageSectionProps) => (
  <section className="layout-page-section">
    {title ? <h2 className="layout-page-section-title">{title}</h2> : null}
    {children}
  </section>
);
