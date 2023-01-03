import { Image, ScrollView } from "react-native";

import { useNavigation } from "@react-navigation/native";

import Layout from "../constants/Layout";
import { RootStackScreenProps } from "../types";
import { Text, View } from "../components/Atomic/Atom";
import { AddBag } from "../components/Atomic/Organism/AddBag";
import { Note } from "../components/Atomic/Molecule/Note";
import { useState } from "react";
import { StoreCard } from "../components/Atomic/Molecule/StoreCard";
import { useBagContext } from "../contexts/BagContext";

const ProductModal = ({ route }: RootStackScreenProps<"ProductModal">) => {
  const product = route.params;

  const { addToBag } = useBagContext();

  const navigation = useNavigation();
  navigation.setOptions({ title: product.name.toUpperCase() });

  const [quantity, onChange] = useState(0);

  const onAdd = () => {
    addToBag({ ...product, quantity });
  };

  return (
    <>
      <ScrollView>
        <>
          <Image
            style={{
              alignSelf: "center",
              width: Layout.window.width / 1.5,
              height: Layout.window.height / 1.5,
            }}
            source={{
              uri: product.image,
            }}
          />
          <Text color="#3e3e3e" weight="600" fontSize="22px">
            {product.name}
          </Text>
          <Text color="#717171">{product.description}</Text>
          <Text>R$ {product.price.toFixed(2).replace(".", ",")}</Text>
          <StoreCard store={product.user} />
          <Note />
        </>
      </ScrollView>
      <AddBag
        onAdd={onAdd}
        onChange={onChange}
        quantity={quantity}
        unitPrice={product.price}
      />
    </>
  );
};

export default ProductModal;
