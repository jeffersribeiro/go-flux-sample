import { Feather } from "@expo/vector-icons";
import { TouchableOpacity, View, Text } from "react-native";
import { useBagContext } from "../../../../contexts/BagContext";

export const CartBar = (props: any) => {
  const { bag, total } = useBagContext();

  if (!total) return <></>;

  return (
    <>
      <TouchableOpacity onPress={() => props.navigation.navigate("BagScreen")}>
        <View
          style={{
            width: "100%",
            paddingVertical: 20,
            paddingHorizontal: 10,
            alignSelf: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "#ea1d2c",
          }}
        >
          <Feather name="shopping-bag" size={20} color="#FFF" />

          <Text
            style={{
              color: "#FFF",
              fontSize: 16,
              left: 16,
              textAlign: "center",
              fontWeight: "600",
            }}
          >
            Ver sacola
          </Text>
          <Text
            style={{
              color: "#FFF",
              textAlign: "center",
              fontSize: 18,
              fontWeight: "500",
            }}
          >
            R$ {total.toFixed(2).replace(".", ",")}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};
