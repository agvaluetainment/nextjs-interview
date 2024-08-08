import type { NextApiRequest, NextApiResponse } from "next";

export type SecondsNowRequest = {}

export type SecondsNowResponse = {
  seconds: number;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<SecondsNowResponse>) {
  const millis = Date.now();

  const seconds = Math.floor(millis / 1000);

  res.status(200).json({ seconds });
}
