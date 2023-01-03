import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import User from "../interfaces/User";
import * as api from "../services/api/user";

interface AuthContext {
  user: User | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
}

export const authContext = createContext({} as AuthContext);

interface AuthContextProviverProps {
  children: JSX.Element | JSX.Element[];
}

export const AuthContextProvider = (props: AuthContextProviverProps) => {
  const [user, setUser] = useState<User | undefined>(undefined);

  const { Provider } = authContext;

  useEffect(() => {
    api
      .get()
      .then(setUser)
      .catch(() => {
        setUser(undefined);
      });
  }, []);

  return <Provider value={{ user, setUser }}>{props.children}</Provider>;
};

export const useAuthContext = () => {
  const context = useContext(authContext);
  return context;
};
