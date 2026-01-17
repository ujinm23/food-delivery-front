"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const UserContext = createContext(null);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within UserProvider");
  }
  return context;
};

export default function UserProvider({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setUser(null);
    router.push("/login");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");

    const isAuthPage = pathname === "/login" || pathname === "/signup";

    // 🔐 NOT logged in
    if (!token) {
      if (!isAuthPage) {
        router.push("/login");
      }
      setLoading(false);
      return;
    }

    // ✅ Logged in
    setUser({ email });

    // 🚫 Prevent logged-in users from seeing login/signup
    if (isAuthPage) {
      router.push("/");
    }

    setLoading(false);
  }, [pathname, router]);

  if (loading) return <div>Loading...</div>;

  return (
    <UserContext.Provider value={{ user, logout }}>
      {children}
    </UserContext.Provider>
  );
}
