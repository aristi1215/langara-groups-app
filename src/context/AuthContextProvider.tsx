import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { supabase } from "@/client/supabase";
import { Session, User } from "@supabase/supabase-js";

interface AuthContextType {
  SignIn: {
    signInWithPassword: (email: string, password: string) => Promise<any>;
    signInWithFacebook: () => Promise<void>;
  };
  signUp: (email: string, password: string) => Promise<void>;
  session: Session | null;
  user: User | null;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("The auth context must be within a provider");
  }
  return context;
};

class SignIn {
  static async signInWithPassword(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("An error has ocurred singin in", error);
      return;
    }

    return data;
  }

  static async signInWithFacebook(): Promise<void> {
    return;
  }
}

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
  }, [])

  const signUp = async (email: string, password: string): Promise<void> => {
    await supabase.auth.signUp({
      email,
      password,
    });
  };

  return (
    <AuthContext.Provider value={{ SignIn, signUp, session, user }}>
      {children}
    </AuthContext.Provider>
  );
};
