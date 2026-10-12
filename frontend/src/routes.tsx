import { Route, Routes } from "react-router-dom";
import { AppLayout } from "@/components/layouts/AppLayout";
import { DashboardPage } from "./pages/DashboardPage";
import { InstrumentPage } from "@/instruments/pages/InstrumentPage";
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
