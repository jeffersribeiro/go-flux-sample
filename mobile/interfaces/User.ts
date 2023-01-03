import Dates from "./Dates";
import Product from "./Product";

export enum Type {
  Salesman = "SALESMAN",
  Customer = "CUSTOMER",
}

export default interface User extends Dates {
  id: number;
  type: Type;
  avatar: string;
  email: string;
  lastName: string;
  username: string;
  password: string;
  firstName: string;
  isActive: boolean;
}

export interface Seller extends User {
  products: Product[];
}
