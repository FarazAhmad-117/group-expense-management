"use client";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user === undefined) return; // Wait until user is initialized
    if (!user) router.push("/login");
    else setLoading(false);
  }, [user, router]);

  if (loading) return <div>Loading...</div>; // Prevent flicker

  return children;
}
