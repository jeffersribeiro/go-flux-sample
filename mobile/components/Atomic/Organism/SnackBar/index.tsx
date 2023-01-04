import React from "react";
import { Modal } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { Text, View } from "../../Atom";
import styled from "styled-components/native";

const BoxShadow = styled.View`
  margin: 20px;
  background-color: white;
  border-radius: 8px;
  padding: 35px;
  align-items: center;
  ${{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  }}
`;

interface SnackBarProps {
  visible: boolean;
  message: string;
}

export const SnackBar = (props: SnackBarProps) => (
  <>
    <Modal visible={props.visible} animationType="slide" transparent={true}>
      <View align="center">
        <BoxShadow>
          <View>
            <AntDesign name="closecircleo" size={24} color="black" />
          </View>
          <Text>{props.message}</Text>
        </BoxShadow>
      </View>
    </Modal>
  </>
);
