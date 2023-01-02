import api from "./api";
import Login, { Session } from "../../interfaces/Login";

export const login = async (data: Login): Promise<Session> => {
  return await api.post("/session", data);
};

export const logout = async (): Promise<void> => {
  return await api.get("/session");
};
