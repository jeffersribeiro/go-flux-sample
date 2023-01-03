import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Text, View } from "../../Atom";

interface CounterProps {
  quantity: number;
  onChange: (quantity: number) => void;
}

export const Counter = ({ onChange, quantity }: CounterProps) => {
  return (
    <View
      style={{
        borderRadius: 5,
        borderWidth: 0.5,
        paddingVertical: 8,
        marginTop: 8,
        padding: 8,
        alignItems: "center",
        borderColor: "#707070",
      }}
      direction="row"
    >
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
    </View>
  );
};
