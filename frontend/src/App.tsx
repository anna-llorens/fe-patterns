import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AppRoutes } from "./routes";
import { WatchlistProvider } from "./watchlist/WatchlistContext";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <WatchlistProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </WatchlistProvider>
    </QueryClientProvider>
  );
}

export default App;
