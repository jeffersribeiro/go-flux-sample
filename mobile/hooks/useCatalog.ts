import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import Order from "../interfaces/Order";

import Product from "../interfaces/Product";
import { Seller } from "../interfaces/User";
import * as api from "../services/api/product";

const useCatalog = () => {
  const [catalog, setCatalog] = useState<Product[]>([]);
  const [sellers, setSellers] = useState<Seller[]>([]);

  useEffect(() => {
    api
      .listAll()
      .then(setCatalog)
      .catch((error) => {
        console.error(error);
      });

    api
      .bySeller()
      .then(setSellers)
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return {
    catalog,
    sellers,
  };
};

export default useCatalog;
