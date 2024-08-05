import type { NextApiRequest, NextApiResponse } from "next";

// Example Req
// {
//  "seconds": 100000
// }

type Res = {
  date: Date | null;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Res>) {
  const { body } = req;

  // should take in seconds from epoch and return a Date object
  res.status(200).json({ date: null });
}
