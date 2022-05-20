import { VercelRequest, VercelResponse } from "@vercel/node";
import { data } from "../src/machines";

export default (req: VercelRequest, res: VercelResponse) => {
  return res.json({ data: data });
};
