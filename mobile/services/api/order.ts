import api from "./api";
import Order from "../../interfaces/Order";
import Product from "../../interfaces/Product";

export const create = async (
  data: Pick<Product, "id" | "quantity">[]
): Promise<Order> => {
  return await api.post("/order", data);
};

export const list = async (): Promise<Order[]> => {
  return await api.get("/order");
};
