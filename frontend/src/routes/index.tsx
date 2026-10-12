import type { ReactNode } from "react";
import { Route, Routes } from "react-router-dom";
import { AppLayout } from "@/components/layouts/AppLayout";
import { DashboardPage } from "@/dashboard/pages/DashboardPage";
import { InstrumentPage } from "@/instruments/pages/InstrumentPage";
import { WatchlistPage } from "@/watchlist/pages/WatchlistPage";
import { appPaths } from "./paths";

type AppRoute = {
  path: string;
  element: ReactNode;
};

const appRoutes: AppRoute[] = [
  { path: appPaths.dashboard, element: <DashboardPage /> },
  { path: appPaths.watchlist, element: <WatchlistPage /> },
  { path: appPaths.instrumentDetail, element: <InstrumentPage /> },
];

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        {appRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
}
