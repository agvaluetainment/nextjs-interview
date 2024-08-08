import type { NextApiRequest, NextApiResponse } from "next";

export type SecondsToDateRequest = {
  seconds: number;
}

export type SecondsToDateResponse = {
  date: Date | null;
  error?: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<SecondsToDateResponse>) {
  let { body } = req;

  if (!body || typeof body !== "string") return res.status(400).json({ date: null, error: "missing or malformed body" });

  try {
    body = JSON.parse(body) as SecondsToDateRequest;
  } catch (err) {
    return res.status(400).json({ date: null, error: "not valid json" })
  }

  if (!body?.seconds) return res.status(400).json({ date: null, error: "no seconds provided" });

  if (typeof body.seconds !== "number") return res.status(400).json({ date: null, error: "seconds is not a number" });
  const date = new Date(body.seconds * 1000);

  // should take in seconds from epoch and return a Date object
  return res.status(200).json({ date });
}
