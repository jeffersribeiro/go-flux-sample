import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { NumericFormat } from "react-number-format";
import styled from "styled-components/native";
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

export const CartBar = (props: any) => {
  const { total } = useBagContext();

  if (!total) return <></>;

  return (
    <>
      <TouchableOpacity onPress={() => props.navigation.navigate("BagScreen")}>
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
