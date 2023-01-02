import Dates from "./Dates";
import Product from "./Product";

export enum Status {
  Pending = "PENDING",
  Reversed = "REVERSED",
  confirmed = "CONFIRMED",
  Cancelled = "CANCELLED",
}

export interface Purchase extends Dates {
  id: number;
  status: Status;
  quantity: number;
  product: Product;
}

export default interface Order extends Dates {
  id: number;
  status: Status;
  purchases: Array<Purchase>;
}
