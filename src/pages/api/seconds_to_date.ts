import type { NextApiRequest, NextApiResponse } from "next";

export type SecondsToDateRequest = {
  seconds: number;
}

type SecondsToDateResponse = {
  date: Date | null;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<SecondsToDateResponse>) {
  const { body } = req;

  // should take in seconds from epoch and return a Date object
  res.status(200).json({ date: null });
}
