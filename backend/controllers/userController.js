import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import { userModel } from "../models/userModel.js";

dotenv.config();

const SECRET = process.env.JWT_SECRET;

const createToken = (_id) => {
  return jwt.sign({ _id }, SECRET, { expiresIn: "1d" });
};

export const userSignup = async (req, res) => {
  const { email, password, confirmPassword } = req.body;

  try {
    const user = await userModel.signup(email, password, confirmPassword);
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

export const incrementBasket = async (req, res) => {
  const { _id } = req.query;
  const { newBasket } = req.body;
  try {
    const updatedInfo = await userModel.findOneAndUpdate(
      { _id: _id },
      { $push: { basket: { $each: newBasket } } },
      { new: true }
    );
    return res.status(200).json({ updatedInfo });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

export const clearBasket = async (req, res) => {
  const { _id } = req.body.params;

  try {
    const updatedInfo = await userModel.findOneAndUpdate({ _id: _id }, { $set: { basket: [] } }, { new: true });
    return res.status(200).json({ updatedInfo });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

export const removeFromBasket = async (req, res) => {
  const { _id } = req.query;
  const { removedItem } = req.body;
  try {
    const user = await userModel.findOne({ _id: _id });

    user.basket = user.basket.filter((item) => item.name !== removedItem.name);

    await user.save();

    return res.status(200).json({ user });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

export const decrementBasket = async (req, res) => {
  const { _id } = req.query;
  const { removedItem } = req.body;

  const itemToRemove = removedItem.productId;
  try {
    const user = await userModel.findById(_id);

    const indexToRemove = user.basket.findIndex((item) => item.name == itemToRemove);

    if (indexToRemove !== -1) {
      user.basket.splice(indexToRemove, 1);

      const updatedInfo = await user.save();

      return res.status(200).json({ updatedInfo });
    } else {
      return res.status(404).json({ error: "Item not found in basket" });
    }
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
