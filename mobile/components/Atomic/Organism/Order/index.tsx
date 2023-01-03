import { TouchableOpacity, View } from "react-native";
import { Text } from "../../Atom";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Product from "../../../../interfaces/Product";
import { useBagContext } from "../../../../contexts/BagContext";

export const OrderItem = (props: Product) => {
  const { removeFromBag } = useBagContext();
  return (
    <View
      style={{
        width: "100%",
        paddingVertical: 20,
        borderBottomWidth: 0.5,
        borderBottomColor: "#DDDD",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: "100%",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Text fontSize="16px" weight="600" align="center">
          {props.quantity}x
        </Text>
        <Text fontSize="18px" weight="500" align="center">
          {props.name}
        </Text>
        <Text fontSize="18px" weight="500" align="center">
          R$ {props.price.toFixed(2).replace(".", ",")}
        </Text>
        <TouchableOpacity onPress={() => removeFromBag(props)}>
          <MaterialCommunityIcons
            name="trash-can-outline"
            size={24}
            color="#ea1d2c"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
