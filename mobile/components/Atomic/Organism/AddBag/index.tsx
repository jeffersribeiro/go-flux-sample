import { NumericFormat } from "react-number-format";
import styled from "styled-components/native";
import { Button, Text, View } from "../../Atom";
import { Counter } from "../../Molecule/Counter";

interface AddBagProps {
  quantity: number;
  unitPrice: number;
  onChange: (quantity: number) => void;
  onAdd: () => void;
}

const Wrapper = styled.View`
  ${{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    height: 120,
    elevation: 14,
  }}
  background-color: #FFF;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
`;

export const AddBag = (props: AddBagProps) => {
  return (
    <Wrapper>
      <View>
        <Counter onChange={props.onChange} quantity={props.quantity} />
      </View>
      <View width="65%">
        <Button onPress={props.onAdd} backgorund="#ea1d2c">
          <View
            width="100%"
            direction="row"
            style={{ justifyContent: "space-between" }}
          >
            <Text color="#FFF">Adicionar</Text>
            <NumericFormat
              displayType={"text"}
              thousandSeparator="."
              decimalScale={2}
              fixedDecimalScale
              decimalSeparator=","
              thousandsGroupStyle="thousand"
              prefix={"R$"}
              value={props.unitPrice * props.quantity}
              renderText={(value) => (
                <Text color="#FFF" fontSize="17px">
                  {value}
                </Text>
              )}
            />
          </View>
        </Button>
      </View>
    </Wrapper>
  );
};
