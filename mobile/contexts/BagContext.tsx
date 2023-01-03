import { createContext, useContext, useEffect, useState } from "react";
import Product from "../interfaces/Product";

interface BagContext {
  bag: Product[];
  total: number;
  setBag: (bag: Product[]) => void;
  addToBag: (bag: Product) => void;
  removeFromBag: (bag: Product) => void;
}

export const bagContext = createContext({} as BagContext);

interface BagContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const BagContextProvider = (props: BagContextProviderProps) => {
  const [bag, setBag] = useState<Product[]>([]);
  const [total, setTotal] = useState<number>(0);

  const addToBag = (product: Product) => {
    setBag([...bag, product]);
  };

  const removeFromBag = (product: Product) => {
    const updated = bag.filter((item) => item.id !== product.id);
    setBag(updated);
  };

  useEffect(() => {
    let prev = 0;
    bag.forEach(({ quantity, price }) => (prev += quantity * price));

    setTotal(prev);
  }, [bag.length]);

  const { Provider } = bagContext;

  return (
    <Provider value={{ bag, total, setBag, addToBag, removeFromBag }}>
      {props.children}
    </Provider>
  );
};

export const useBagContext = () => {
  const context = useContext(bagContext);
  return context;
};
