import { Sidebar } from "@/app/(root)/_components/Sidebar";
import { Header } from "@/app/(root)/_components/Header";
import ProtectedRoute from "@/components/ProtectedRoute";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <ProtectedRoute>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="flex flex-1 flex-col">
          <Header />
          <main className="flex-1 overflow-y-auto p-6">{children}</main>
        </div>
      </div>
    </ProtectedRoute>
  );
}
