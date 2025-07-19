import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // 재생성 시킬 페이지 경로
    await res.revalidate("/");

    return res.json({ revalidate: true });
  } catch (error) {
    console.error(error);

    res.status(500).send("Revalidation Failed");
  }
}
