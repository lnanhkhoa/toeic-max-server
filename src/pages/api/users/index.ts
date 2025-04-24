import type { NextApiRequest, NextApiResponse } from "next"
const users = []

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, message } = req.body
  if (req.method === "GET") {
    // Get all users
    return res.status(200).json(users)
  }

  // if (req.method === "POST") {
  //   const { name, email } = req.body
  //   if (!name || !email) return res.status(400).json({ message: "Missing name or email" })

  //   const newUser = { id: idCounter++, name, email }
  //   users.push(newUser)
  //   return res.status(201).json(newUser)
  // }

  res.setHeader("Allow", ["GET", "POST"])
  res.status(405).end(`Method ${req.method} Not Allowed`)
}
