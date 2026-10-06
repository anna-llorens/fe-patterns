import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { AppLayout } from "./layouts/AppLayout";
import { DashboardPage } from "./pages/DashboardPage";
import { InstrumentPage } from "./pages/InstrumentPage";
import { WatchlistPage } from "./pages/WatchlistPage";
import { WatchlistProvider } from "./watchlist/WatchlistContext";

function App() {
  return (
    <WatchlistProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/watchlist" element={<WatchlistPage />} />
            <Route path="/instruments/:symbol" element={<InstrumentPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </WatchlistProvider>
  );
}

export default App;
