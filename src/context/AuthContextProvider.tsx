import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { supabase } from "@/client/supabase";
import { AuthError, Session } from "@supabase/supabase-js";
import { ValidationError } from "@/errors/errors";

interface AuthContextType {
  signInWithPassword: (email: string, password: string) => Promise<any>;
  signInWithFacebook: () => Promise<void>;
  signUpWithPassword: (
    email: string,
    password: string,
    fullName: string
  ) => Promise<void>;
  session: Session | null;
  user: any;
  loading: boolean;
  authError: string;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("The auth context must be within a provider");
  }
  return context;
};

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [authError, setAuthError] = useState<string>("");

  //Use effect to validate the user session and store user information
  useEffect(() => {
    const setData = async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();
      if (error) {
        console.error("Error getting the user session", error);
        throw error;
      }

      setSession(session);
      if (session) {
        fetchProfile(session?.user.id);
      }

      setLoading(false);
    };

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        if (session) {
          fetchProfile(session?.user.id);
        }
        setLoading(false);
      }
    );

    setData();

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  //Call to the user profile information
  const fetchProfile = async (userId: any) => {
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .single();

    if (error) {
      console.error("Error fetching the user profile", error.message);
    }
    setUser(data);
  };

  //Sign up functions

  const signUpWithPassword = async (
    email: string,
    password: string,
    fullName: string
  ): Promise<void> => {
    setAuthError('')
    if(!fullName || !email || !password){
      setAuthError('All the fields must be filled')
      return
    }
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });

    if (error) {
      console.error(error.message);
      (error instanceof AuthError) ? setAuthError(error.message) : setAuthError("An unexpected error has ocurred");
      throw new ValidationError(error.message);
    }
  };

  //Sign in functions

  const signInWithPassword = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setAuthError('')
    if(!email || !password){
      setAuthError('All the fields must be filled')
      return
    }

    if (error) {
      console.error(error.message);
      (error instanceof AuthError) ? setAuthError(error.message) : setAuthError("An unexpected error has ocurred");
      throw new ValidationError(error.message);
    }
  };

  const signInWithFacebook = async (): Promise<void> => {
    return;
  };

  return (
    <AuthContext.Provider
      value={{
        signInWithPassword,
        signInWithFacebook,
        signUpWithPassword,
        session,
        user,
        loading,
        authError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
