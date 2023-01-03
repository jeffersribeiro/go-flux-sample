import { Text, View } from "../components/Atomic/Atom";
import { Order } from "../components/Atomic/template/Order";
import { useBagContext } from "../contexts/BagContext";

const BagScreen = () => {
  const { bag, total } = useBagContext();
  return (
    <>
      <Order DATA={bag} />
      <View>
        <View
          style={{ justifyContent: "space-between" }}
          width="100%"
          direction="row"
        >
          <Text color="#a6a5a5">Subtotal</Text>
          <Text color="#a6a5a5">R$ {total.toFixed(2).replace(".", ",")}</Text>
        </View>
        <View
          style={{ justifyContent: "space-between" }}
          width="100%"
          direction="row"
        >
          <Text color="#a6a5a5">Taxa de entrega</Text>
          <Text color="#a6a5a5">Grátis</Text>
        </View>
        <View
          style={{ justifyContent: "space-between" }}
          width="100%"
          direction="row"
        >
          <Text color="#3e3e3e">Total</Text>
          <Text color="#3e3e3e">R$ {total.toFixed(2).replace(".", ",")}</Text>
        </View>
      </View>
    </>
  );
};

export default BagScreen;
