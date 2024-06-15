import prismadb from "@/lib/prismadb";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  try {
    const movies = await prismadb.movie.findMany();

    return res.status(200).json(movies);
  } catch (err) {
    console.error(err);
    return res.status(400).end();
  }
};

export default handler;
