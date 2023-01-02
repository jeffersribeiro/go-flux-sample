import Dates from "./Dates";
import User from "./User";

export enum Type {
  Food = "FOOD",
  Groceries = "GROCERIES",
  Household = "HOUSEHOLD",
  Electronics = "ELECTRONIC",
  Jewelry = "JEWELRY",
  Pet = "PET",
}

export default interface Product extends Dates {
  id: number;
  type: Type;
  user: User;
  name: string;
  price: number;
  image: string;
  quantity: number;
  description: string;
  isPublished: boolean;
}
