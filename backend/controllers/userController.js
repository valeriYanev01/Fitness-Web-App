import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import { userModel } from "../models/userModel.js";

dotenv.config();

const SECRET = process.env.JWT_SECRET;

const createToken = (_id) => {
  return jwt.sign({ _id }, SECRET, { expiresIn: "1d" });
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

export const userChangeUsername = async (req, res) => {
  const { username } = req.body;
  const { _id } = req.query;

  try {
    const user = await userModel.changeUsername(_id, username);
    res.status(200).json({ user });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

export const userChangeEmail = async (req, res) => {
  const { oldEmail, newEmail, confirmNewEmail } = req.body;
  const { _id } = req.query;

  try {
    const user = await userModel.changeEmail(_id, oldEmail, newEmail, confirmNewEmail);
    res.status(200).json({ user });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err.message });
  }
};

export const userChangePassword = async (req, res) => {
  const { oldPassword, newPassword, confirmNewPassword } = req.body;
  const { _id } = req.query;

  try {
    const user = await userModel.changePassword(_id, oldPassword, newPassword, confirmNewPassword);
    res.status(200).json({ user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const currentUser = async (req, res) => {
  const { email } = req.query;
  try {
    const user = await userModel.findOne({ email: email });
    res.status(200).json({ user });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};
