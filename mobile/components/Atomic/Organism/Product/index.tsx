import { Image, TouchableOpacity } from "react-native";

import { Text, View } from "../../Atom";
import Card from "../../Molecule/Card";

import Product from "../../../../interfaces/Product";
import { useNavigation } from "@react-navigation/native";
import { NumericFormat } from "react-number-format";

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
          <NumericFormat
            displayType={"text"}
            thousandSeparator="."
            decimalScale={2}
            fixedDecimalScale
            decimalSeparator=","
            thousandsGroupStyle="thousand"
            prefix={"R$"}
            value={props.price}
            renderText={(value) => (
              <Text color="#50a773" fontSize="17px">
                {value}
              </Text>
            )}
          />
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
