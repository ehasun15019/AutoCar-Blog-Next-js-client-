"use client";

import { AuthContext, useAuthContext } from "@/Context/AuthContext";
import { useRouter, usePathname } from "next/navigation";
import { use, useEffect } from "react";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading && !user) {
      // redirect to login with original path
      router.replace(`/login?redirect=${pathname}`);
    }
  }, [user, loading, router, pathname]);

  if (loading || !user) {
    return <span className="loading loading-spinner text-success"></span>;
  }

  return children;
};

export default PrivateRoute;
