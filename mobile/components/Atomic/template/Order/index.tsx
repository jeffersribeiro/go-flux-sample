import { FlatList } from "react-native";
import Product from "../../../../interfaces/Product";
import { Text, View } from "../../Atom";
import { OrderItem } from "../../Organism/Order";

interface StoreProps {
  DATA: Product[];
}

export const Order = (props: StoreProps) => (
  <View width="100%">
    <Text color="#3b3b3b" fontSize="20px">
      Items
    </Text>
    <View>
      {props.DATA.map((item) => (
        <OrderItem key={item.id} {...item} />
      ))}
    </View>
  </View>
);
