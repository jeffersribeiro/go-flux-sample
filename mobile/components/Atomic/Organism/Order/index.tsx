import { TouchableOpacity } from "react-native";
import { Text, View } from "../../Atom";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Product from "../../../../interfaces/Product";
import { useBagContext } from "../../../../contexts/BagContext";
import { NumericFormat } from "react-number-format";
import styled from "styled-components/native";

const Wrapper = styled.View`
  width: 100%;
  padding: 20px 0;
  border-bottom-width: 0.5px;
  border-bottom-color: #dddd;
  align-items: center;
`;

export const OrderItem = (props: Product) => {
  const { removeFromBag } = useBagContext();
  return (
    <Wrapper>
      <View align="center" direction="row">
        <Text fontSize="16px" weight="600" align="center">
          {props.quantity}x
        </Text>
        <Text fontSize="18px" weight="500" align="center">
          {props.name}
        </Text>
        <NumericFormat
          displayType={"text"}
          thousandSeparator="."
          decimalScale={2}
          fixedDecimalScale
          decimalSeparator=","
          thousandsGroupStyle="thousand"
          prefix={"R$"}
          value={props.price}
          renderText={(value) => (
            <Text weight="bold" color="#3e3e3e">
              {value}
            </Text>
          )}
        />
        <TouchableOpacity onPress={() => removeFromBag(props)}>
          <MaterialCommunityIcons
            name="trash-can-outline"
            size={24}
            color="#ea1d2c"
          />
        </TouchableOpacity>
      </View>
    </Wrapper>
  );
};
