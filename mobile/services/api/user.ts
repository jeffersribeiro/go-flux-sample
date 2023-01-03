import api from "./api";
import User from "../../interfaces/User";

export const create = async (
  data: Pick<
    User,
    "firstName" | "lastName" | "email" | "username" | "type" | "password"
  >
): Promise<User> => api.post("/user", data);

export const get = async (): Promise<User> => api.get("/user");

export const update = async (
  data: Pick<User, "firstName" | "lastName" | "username">
): Promise<User> => api.patch("/user", data);
