import Dates from "./Dates";
import User from "./User";

export default interface Login {
  email: string;
  password: string;
}

export interface Session extends Dates {
  id: number;
  user: User;
  ip: string;
  active: boolean;
  token: string;
  expiresAt: Date;
}
