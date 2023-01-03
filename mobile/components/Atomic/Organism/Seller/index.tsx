import { Image, TouchableOpacity } from "react-native";
import { Text, View } from "../../Atom";

import { Seller } from "../../../../interfaces/User";

export const Store = (props: Seller) => {
  return (
    <TouchableOpacity>
      <View style={{ alignItems: "center" }} width="150px">
        <Image
          source={{
            width: 80,
            height: 80,
            uri: props.avatar,
          }}
        />
        <View>
          <Text align="center">{props.username}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
