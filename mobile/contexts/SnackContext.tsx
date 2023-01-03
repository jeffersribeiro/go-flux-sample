import { AntDesign } from "@expo/vector-icons";

import { Modal, Text, View } from "react-native";
import { createContext, useContext, useEffect, useState } from "react";

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

export const SnackBar = (props: any) => (
  <>
    <Modal visible={props.visible} animationType="slide" transparent={true}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            margin: 20,
            backgroundColor: "white",
            borderRadius: 8,
            padding: 35,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
          }}
        >
          <View>
            <AntDesign name="closecircleo" size={24} color="black" />
          </View>
          <Text>{props.message}</Text>
        </View>
      </View>
    </Modal>
  </>
);

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
