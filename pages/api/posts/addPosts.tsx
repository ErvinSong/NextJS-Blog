import prisma from "../../../prisma/client"
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const title: string = req.body.title

    //Check title
    if (title.length > 300) {
      return res.status(403).json({ message: "Please write a shorter post" })
    }

    if (!title.length) {
      return res
        .status(403)
        .json({ message: "Please write something before we can post it." })
    }

    //Create Post
    try {
      const result = await prisma.post.create({
        data: {
          title,
        },
      })
      res.status(200).json(result)
    } catch (err) {
      res.status(403).json({ err: "Error has occured while making a post" })
    }
  }
}