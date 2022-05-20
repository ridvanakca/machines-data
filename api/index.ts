import { VercelRequest, VercelResponse } from "@vercel/node";
import { data } from "../src/machines";

export default (req: VercelRequest, res: VercelResponse) => {
  res.setHeader("Access-Control-Allow-Credentials", `true`);
  res.setHeader("Access-Control-Allow-Origin", "*");
  return res.json({ machines: data });
};
