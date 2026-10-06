import { AppNavLink } from "./NavLink";
import { useWatchlist } from "@/watchlist/WatchlistContext";
export const Sidebar = () => {
  const { symbols } = useWatchlist();
  return (
  <aside className="app-sidebar">
    <div className="app-brand">
      <span className="app-brand-mark" aria-hidden>
        ⚡
      </span>
      <span className="app-brand-name">StockTrack</span>
    </div>
    <nav className="app-nav" aria-label="Main">
      <AppNavLink to="/" end>
        Dashboard
      </AppNavLink>
      <AppNavLink to="/watchlist" badge={symbols.length}>
        Watchlist
      </AppNavLink>
    </nav>
  </aside>
  );
};
