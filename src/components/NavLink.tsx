import { NavLink } from "react-router-dom";
import type { ReactNode } from "react";

type AppNavLinkProps = {
  to: string;
  children: ReactNode;
  end?: boolean;
  badge?: number;
};

export const AppNavLink = ({
  to,
  children,
  end,
  badge,
}: AppNavLinkProps) => (
  <NavLink
    to={to}
    end={end}
    className={({ isActive }) => `app-nav-link${isActive ? " active" : ""}`}
  >
    {children}
    {badge != null && badge > 0 ? (
      <span className="app-nav-badge">{badge}</span>
    ) : null}
  </NavLink>
);
