"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import auth from "../utils/firebaseConfig";

type Props = {
  currentUser: User | null;
  isLoading: boolean;
};

const AuthContext = createContext<Props>({
  currentUser: null,
  isLoading: true,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
