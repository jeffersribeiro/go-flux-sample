import { FontAwesome5 } from "@expo/vector-icons";
import styled from "styled-components/native";
import User from "../../../../interfaces/User";
import { Text, View } from "../../Atom";

const Wrapper = styled.View`
  border: dashed 2px rgba(63, 62, 62, 0.1);
  border-radius: 8px;
  padding: 8px;
  margin: 8px;
`;

export const StoreCard = ({ store }: { store: User }) => {
  return (
    <Wrapper>
      <View style={{ alignItems: "center" }} direction="row">
        <FontAwesome5 name="store" size={18} color="#717171" />
        <Text>{store.username}</Text>
      </View>
      <Text>34-48 min • R$8,99 </Text>
    </Wrapper>
  );
};
