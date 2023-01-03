import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import Order from "../interfaces/Order";
import * as orderApi from "../services/api/order";

const useHistoricOrder = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const { user } = useAuthContext();

  useEffect(() => {
    orderApi
      .list()
      .then(setOrders)
      .catch((error) => {
        if (axios.isAxiosError(error)) {
          console.error(error.response?.data);
        }
      });
  }, [user]);

  return { orders };
};

export default useHistoricOrder;
