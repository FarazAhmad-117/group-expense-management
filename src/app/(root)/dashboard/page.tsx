"use client";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function Dashboard() {
  return (
    <ProtectedRoute>
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-bold">Welcome to Dashboard</h2>
      </div>
    </ProtectedRoute>
  );
}
