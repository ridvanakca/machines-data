import { VercelRequest, VercelResponse } from "@vercel/node";
import { data } from "../src/machines";

export default (req: VercelRequest, res: VercelResponse) => {
  const filteredData = data.filter((group) => group.name.toLowerCase().includes(req.query.query as any));
  res.setHeader("Access-Control-Allow-Credentials", `true`);
  res.setHeader("Access-Control-Allow-Origin", "*");
  return res.json({ machines: filteredData });
};
