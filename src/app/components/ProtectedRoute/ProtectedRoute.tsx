"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../contexts/AuthContext";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { currentUser, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !currentUser) {
      router.replace("/");
    }
  }, [currentUser, isLoading, router]);

  if (!currentUser) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
