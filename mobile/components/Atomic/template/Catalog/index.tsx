import { FlatList } from "react-native";
import Product from "../../../../interfaces/Product";
import { Text, View } from "../../Atom";
import ProductCard from "../../Organism/Product";

interface CatalogProps {
  DATA: Product[];
}
export const Catalog = (props: CatalogProps) => {
  return (
    <>
      <Text color="#3b3b3b" fontSize="16px">
        Produtos
      </Text>
      <FlatList
        data={props.DATA}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductCard {...item} />}
      />
    </>
  );
};
