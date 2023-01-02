import api from "./api";
import Product from "../../interfaces/Product";

export const create = async (
  data: Pick<
    Product,
    | "name"
    | "price"
    | "description"
    | "image"
    | "quantity"
    | "type"
    | "isPublished"
  >
): Promise<Product> => {
  const form = new FormData();

  form.append("name", data.name);
  form.append("price", data.price.toString());
  form.append("description", data.description);
  form.append("image", data.image);
  form.append("quantity", data.quantity.toString());
  form.append("type", data.type);
  form.append("isPublished", String(data.isPublished));

  return await api.post("/product", form);
};

export const listAll = async (): Promise<Product[]> => {
  return await api.get("/product/all");
};

export const list = async (): Promise<Product[]> => {
  return await api.get("/product");
};

export const update = async (
  data: Pick<
    Product,
    | "name"
    | "price"
    | "description"
    | "image"
    | "quantity"
    | "type"
    | "isPublished"
  >
): Promise<Product> => {
  const form = new FormData();

  form.append("name", data.name);
  form.append("price", data.price.toString());
  form.append("description", data.description);
  form.append("image", data.image);
  form.append("quantity", data.quantity.toString());
  form.append("type", data.type);
  form.append("isPublished", String(data.isPublished));

  return await api.patch("/product", form);
};

export const remove = async (id: number): Promise<void> => {
  return await api.delete(`/product/${id}`);
};
