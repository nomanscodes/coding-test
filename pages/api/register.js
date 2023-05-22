import User from "@/model/user";
import dbConnect from "@/config/dbConnect";

export default async function handler(req, res) {
  if (req.method === "POST") {
    dbConnect();

    const { name, number, password } = req.body;

    const user = await User.create({ name, number, password });

    res.status(201).json({ user });
  }
}
