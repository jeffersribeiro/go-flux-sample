import { Image, TouchableOpacity } from "react-native";

import { Text, View } from "../../Atom";
import Card from "../../Molecule/Card";

import Product from "../../../../interfaces/Product";
import { useNavigation } from "@react-navigation/native";

interface ProductProps extends Product {}

const ProductCard = (props: ProductProps) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ProductModal", props)}
    >
      <Card>
        <View width="70%">
          <Text fontSize="18px">{props.name}</Text>
          <Text color="gray" fontSize="15px">
            {props.description}
          </Text>
          <Text color="#50a773" fontSize="17px">
            A partir de R$ {props.price.toFixed(2).replace(".", ",")}
          </Text>
        </View>
        <View width="auto">
          <Image
            source={{
              width: 80,
              height: 80,
              uri: props.image,
            }}
          />
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default ProductCard;
