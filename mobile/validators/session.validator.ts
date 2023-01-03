import * as y from "yup";

export const loginValidator = y.object({
  email: y.string().required().email(),
  password: y.string().required().min(6),
});
