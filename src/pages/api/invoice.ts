import type { NextApiRequest, NextApiResponse } from "next";

const data = [
  { id: "1", from: "John Doe", date: "22.02.2022", amount: "35" },
  { id: "2", from: "Jane Doe", date: "03.01.2022", amount: "100" },
  { id: "3", from: "James Doe", date: "01.01.2022", amount: "30" },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(data);
}
