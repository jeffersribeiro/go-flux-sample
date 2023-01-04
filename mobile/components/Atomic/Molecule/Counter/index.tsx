import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Text, View } from "../../Atom";
import styled from "styled-components/native";

interface CounterProps {
  quantity: number;
  onChange: (quantity: number) => void;
}

const Wrapper = styled.View`
  border-radius: 5px;
  border-width: 0.5px;
  margin-top: 8px;
  padding: 5px;
  align-items: center;
  border-color: #707070;
  flex-direction: row;
`;

export const Counter = ({ onChange, quantity }: CounterProps) => {
  return (
    <Wrapper>
      <TouchableOpacity onPress={() => onChange(quantity && quantity - 1)}>
        <AntDesign color="#ea1d2c" size={26} name="minus" />
      </TouchableOpacity>
      <View direction="row">
        <Text fontSize="20px" color="#000">
          {quantity}
        </Text>
      </View>
      <TouchableOpacity onPress={() => onChange(quantity + 1)}>
        <AntDesign color="#ea1d2c" size={26} name="plus" />
      </TouchableOpacity>
    </Wrapper>
  );
};
