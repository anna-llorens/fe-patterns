import { NavLink } from "react-router-dom";
import type { ReactNode } from "react";

type AppNavLinkProps = {
  to: string;
  children: ReactNode;
  end?: boolean;
  badge?: number;
  title?: string;
};

export const AppNavLink = ({
  to,
  children,
  end,
  badge,
  title,
}: AppNavLinkProps) => (
  <NavLink
    to={to}
    end={end}
    title={title}
    className={({ isActive }) => `app-nav-link${isActive ? " active" : ""}`}
  >
    {children}
    {badge != null && badge > 0 ? (
      <span className="app-nav-badge">{badge}</span>
    ) : null}
  </NavLink>
);
