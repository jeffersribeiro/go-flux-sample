import { Image } from "react-native";
import styled from "styled-components/native";
import Order from "../../../../interfaces/Order";
import { Text, View } from "../../Atom";

interface HistoricItemProps {
  order: Order;
}

const Wrapper = styled.View`
  padding: 8px;
  margin: 8px;
  border-radius: 8px;
  border-width: 2px;
  border-color: #f2f2f2;
`;

export const HistoricItem = ({ order }: HistoricItemProps) => {
  return (
    <Wrapper>
      <Text>Pedido concluído №{order.id}</Text>
      <View>
        {order.purchases.map((purchase) => (
          <View
            style={{
              borderTopColor: "#a6a6a6",
              borderTopWidth: 1,
            }}
            key={purchase.id}
          >
            <View direction="row">
              <Image
                source={{
                  height: 50,
                  width: 50,
                  uri: purchase.product.user.avatar,
                }}
              />
              <View width="70%">
                <Text>{purchase.product.user.username}</Text>
              </View>
            </View>
            <View direction="row">
              <Text>{purchase.quantity}x</Text>
              <Text color="#a6a6a6">{purchase.product.name}</Text>
            </View>
          </View>
        ))}
      </View>
    </Wrapper>
  );
};
