import { Route, Routes } from "react-router-dom";
import { AppLayout } from "./layouts/AppLayout";
import { DashboardPage } from "./pages/DashboardPage";
import { InstrumentPage } from "./pages/InstrumentPage";
import { WatchlistPage } from "./pages/WatchlistPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/watchlist" element={<WatchlistPage />} />
        <Route path="/instruments/:symbol" element={<InstrumentPage />} />
      </Route>
    </Routes>
  );
}
