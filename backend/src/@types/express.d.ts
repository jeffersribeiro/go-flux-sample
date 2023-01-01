declare namespace Express {
  import { EntityTarget } from "typeorm";

  export interface Request {
    user: {
      id: string;
    };
  }
}
