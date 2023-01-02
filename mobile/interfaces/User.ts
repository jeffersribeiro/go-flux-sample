import Dates from "./Dates";

export enum Type {
  Salesman = "SALESMAN",
  Customer = "CUSTOMER",
}

export default interface User extends Dates {
  id: number;
  type: Type;
  email: string;
  lastName: string;
  username: string;
  password: string;
  firstName: string;
  isActive: boolean;
}
