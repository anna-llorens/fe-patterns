import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { AppLayout } from "./layouts/AppLayout";
import { DashboardPage } from "./pages/DashboardPage";
import { InstrumentPage } from "./pages/InstrumentPage";
import { WatchlistPage } from "./pages/WatchlistPage";
import { InstrumentsProvider } from "./instruments/InstrumentsContext";
import { WatchlistProvider } from "./watchlist/WatchlistContext";

function App() {
  return (
    <InstrumentsProvider>
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
    </InstrumentsProvider>
  );
}

export default App;
