import { Outlet } from "react-router-dom";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import "@/app-shell.css";

export const AppLayout = () => (
  <div className="app-shell">
    <Sidebar />
    <div className="app-content">
      <Header />
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  </div>
);
