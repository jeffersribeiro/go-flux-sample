import { FlatList } from "react-native";
import { Seller } from "../../../../interfaces/User";
import { Text, View } from "../../Atom";
import { Store } from "../../Organism/Seller";

interface StoreProps {
  DATA: Seller[];
}

export const Stores = (props: StoreProps) => (
  <View width="auto">
    <Text color="#3b3b3b" fontSize="20px">
      Lojas
    </Text>
    <FlatList
      horizontal
      data={props.DATA}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <Store {...item} />}
    />
  </View>
);
