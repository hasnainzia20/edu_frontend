// src/layouts/MainLayout.jsx
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Outlet /> {/* This renders the child route */}
      </main>
    </div>
  );
}
