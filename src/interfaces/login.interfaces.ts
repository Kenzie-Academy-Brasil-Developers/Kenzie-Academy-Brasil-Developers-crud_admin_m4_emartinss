import { z } from "zod";
import { login } from "../schemas/login.schemas";

export type login = z.infer<typeof login>;

export interface Token {
  token: string;
}
