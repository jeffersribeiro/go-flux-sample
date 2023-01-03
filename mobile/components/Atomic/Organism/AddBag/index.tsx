import { Button, Text, View } from "../../Atom";
import { Counter } from "../../Molecule/Counter";

interface AddBagProps {
  quantity: number;
  unitPrice: number;
  onChange: (quantity: number) => void;
  onAdd: () => void;
}

export const AddBag = (props: AddBagProps) => {
  return (
    <View
      direction="row"
      style={{
        backgroundColor: "#FFF",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        height: 120,
        elevation: 14,
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
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
            <Text color="#FFF">
              R${" "}
              {(props.unitPrice * props.quantity).toFixed(2).replace(".", ",")}
            </Text>
          </View>
        </Button>
      </View>
    </View>
  );
};
