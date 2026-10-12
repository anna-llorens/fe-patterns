import { AppNavLink } from "./NavLink";
import { appPaths } from "@/routes/paths";
import { useWatchlist } from "@/watchlist/hooks/useWatchlist";

export const Sidebar = () => {
  const { data: watchlist = [] } = useWatchlist();

  return (
    <aside className="app-sidebar">
      <div className="app-brand">
        <span className="app-brand-mark" aria-hidden>
          ⚡
        </span>
        <span className="app-brand-name">StockTrack</span>
      </div>
      <nav className="app-nav" aria-label="Main">
        <AppNavLink to={appPaths.dashboard} end title="Dashboard">
          <span className="app-nav-label">Dashboard</span>
        </AppNavLink>
        <AppNavLink
          to={appPaths.watchlist}
          badge={watchlist.length}
          title="Watchlist"
        >
          <span className="app-nav-label">Watchlist</span>
        </AppNavLink>
      </nav>
    </aside>
  );
};
