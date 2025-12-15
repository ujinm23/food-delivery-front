/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { createContext, use, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const UserContext = createContext(null);

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used within a <UserProvider>");
  }
  return context;
};

export default function UserProvider({ children }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    setToken(token);
    setLoading(false);
  }, [router]);

  if (loading) return <div>...loading</div>;

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}
