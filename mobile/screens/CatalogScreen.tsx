import { Text, View } from "../components/Atomic/Atom";
import { Catalog } from "../components/Atomic/template/Catalog";
import { Stores } from "../components/Atomic/template/Stores";
import useCatalog from "../hooks/useCatalog";
import { RootTabScreenProps } from "../types";

const CatalogScreen = ({ navigation }: RootTabScreenProps<"Catalog">) => {
  const { catalog, sellers } = useCatalog();

  return (
    <>
      <Stores DATA={sellers} />
      <Catalog DATA={catalog} />
    </>
  );
};

export default CatalogScreen;
