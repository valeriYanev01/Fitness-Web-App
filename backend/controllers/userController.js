import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import { userModel } from "../models/userModel.js";

dotenv.config();

const SECRET = process.env.JWT_SECRET;

const createToken = (id) => {
  return jwt.sign({ id }, SECRET, { expiresIn: "1d" });
};

export const userSignup = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.signup(email, password);
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

export const userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.login(email, password);
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};
