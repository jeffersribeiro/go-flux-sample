import { createContext, useContext, useEffect, useState } from "react";

import { SnackBar } from "../components/Atomic/Organism/SnackBar";

interface SnackContext {
  snack: boolean;
  setSnack: (snack: boolean) => void;
  message: string;
  setMessage: (message: string) => void;
  snackBar: (msg: string) => void;
}

export const snackContext = createContext({} as SnackContext);

interface SnackBarProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const SnackBarProvider = (props: SnackBarProviderProps) => {
  const [snack, setSnack] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSnack(false);
      console.info("CLOSING SNACK MODAL");
    }, 3000);

    () => {
      clearTimeout(timeout);
    };
  }, [snack]);

  const snackBar = (msg: string) => {
    setMessage(msg);
    setSnack(true);
  };

  const { Provider } = snackContext;

  return (
    <Provider value={{ snack, setSnack, message, setMessage, snackBar }}>
      <SnackBar message={message} visible={snack} />
      {props.children}
    </Provider>
  );
};

export const useSnackContext = () => {
  const context = useContext(snackContext);
  return context;
};
