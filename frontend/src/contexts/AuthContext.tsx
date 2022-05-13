import Router from "next/router";
import { destroyCookie, setCookie } from "nookies";
import { createContext, ReactNode, useState } from "react";
import { api } from "../services/apiClient";

type AuthContextData = {
  user: UserProps;
  isAuthenticated: boolean;
  signIn: (credentials: SignInProps) => Promise<void>;
  signOut: () => void;
  signUp: (credentials: SignUpProps) => Promise<void>;
};

type UserProps = {
  id: string;
  name: string;
  email: string;
};

type SignInProps = {
  email: string;
  password: string;
};

type SignUpProps = {
  name: string;
  email: string;
  password: string;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function signOut() {
  try {
    destroyCookie(undefined, "@nextauth.token");
    Router.push("/");
  } catch (err) {
    console.log("Erro ao deslogar", err);
  }
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps>();
  const isAuthenticated = !!user;

  async function signIn({ email, password }: SignInProps) {
    try {
      const response = await api.post("/session", {
        email,
        password,
      });

      const { id, name, token } = response.data;

      setCookie(undefined, "@nextauth.token", token, {
        maxAge: 60 * 60 * 24 * 30, // expiresIn 1 month
        path: "/", // paths wit access to cookie - all
      });

      setUser({ id, name, email });

      // next reqs receive token
      api.defaults.headers["Authorization"] = `Bearer ${token}`;

      // redirect user to dashboard
      Router.push("/dashboard");
    } catch (err) {
      console.log("Erro ao fazer login", err.response.data);
    }
  }

  async function signUp({ name, email, password }: SignUpProps) {
    try {
      await api.post("/users", {
        name,
        email,
        password,
      });

      Router.push("/");
    } catch (err) {
      console.log("Erro ao cadastrar", err.response.data);
    }
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, signIn, signOut, signUp }}
    >
      {children}
    </AuthContext.Provider>
  );
}
