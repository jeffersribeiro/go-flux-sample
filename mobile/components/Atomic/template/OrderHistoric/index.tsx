import { FlatList } from "react-native";

import { Text } from "../../Atom";
import Order from "../../../../interfaces/Order";
import { HistoricItem } from "../../Organism/HistoricCard";

interface OrderHistoricProps {
  DATA: Order[];
}
export const OrderHistoric = (props: OrderHistoricProps) => {
  return (
    <>
      <Text weight="600" color="#3b3b3b" fontSize="24px">
        Histórico
      </Text>
      <FlatList
        data={props.DATA}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <HistoricItem order={item} />}
      />
    </>
  );
};
