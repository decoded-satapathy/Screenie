import arcjet from "@arcjet/next"
import { getEnv } from "./utils";

const aj = arcjet({
  key: getEnv('ARCJET_API_KEY'),
  rules: [],
})

export default aj;
export { fixedWindow, request, createMiddleware, shield, detectBot } from "@arcjet/next";
