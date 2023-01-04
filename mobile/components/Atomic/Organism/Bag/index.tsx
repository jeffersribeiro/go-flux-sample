import { Feather } from "@expo/vector-icons";
import { BottomTabNavigationEventMap } from "@react-navigation/bottom-tabs";
import { NavigationHelpers, ParamListBase } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { NumericFormat } from "react-number-format";

import { useBagContext } from "../../../../contexts/BagContext";
import { Text } from "../../Atom";

const Wrapper = styled.View`
  width: 100%;
  padding: 20px 10px;
  align-self: center;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #ea1d2c;
`;

interface Props {
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}

export const CartBar = ({ navigation }: Props) => {
  const { total } = useBagContext();

  if (!total) return <></>;

  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate("BagScreen")}>
        <Wrapper>
          <Feather name="shopping-bag" size={20} color="#FFF" />

          <Text
            style={{ marginLeft: 30 }}
            align="center"
            color="#FFF"
            fontSize="18px"
            weight="500"
          >
            Ver sacola
          </Text>
          <NumericFormat
            displayType={"text"}
            thousandSeparator="."
            decimalScale={2}
            fixedDecimalScale
            decimalSeparator=","
            thousandsGroupStyle="thousand"
            prefix={"R$"}
            value={total}
            renderText={(value) => (
              <Text align="center" color="#FFF" fontSize="18px" weight="500">
                {value}
              </Text>
            )}
          />
        </Wrapper>
      </TouchableOpacity>
    </>
  );
};
