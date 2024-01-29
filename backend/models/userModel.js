import mongoose, { Schema } from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

const productSchema = new Schema({
  name: String,
});

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      default: "User",
    },
    basket: [productSchema],
  },
  { timestamps: true }
);

userSchema.statics.signup = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields required!");
  }

  if (!validator.isEmail(email)) {
    throw Error("Invalid email!");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error("Password not strong enough!");
  }

  const userExists = await this.findOne({ email });

  if (userExists) {
    throw Error("Email already taken!");
  }

  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });

  return user;
};

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields required!");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("User not found!");
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    throw Error("Wrong password!");
  }

  return user;
};

userSchema.statics.changeEmail = async function (id, oldEmail, newEmail, confirmNewEmail) {
  if (!oldEmail || !newEmail || !confirmNewEmail) {
    throw Error("All fields required!");
  }

  const user = await this.findOne({ email: oldEmail });

  const oldEmailMatch = oldEmail == user.email;
  if (!oldEmailMatch) {
    throw Error("Old emails do not match!");
  }

  if (!validator.isEmail(newEmail)) {
    throw Error("Invalid Email!");
  }

  const newEmailMatch = newEmail == confirmNewEmail;
  if (!newEmailMatch) {
    throw Error("New emails do not match!");
  }

  const updatedUser = await this.findByIdAndUpdate({ _id: id }, { email: newEmail });
  return updatedUser;
};

userSchema.statics.changePassword = async function (id, oldPassword, newPassword, confirmNewPassword) {
  if (!oldPassword || !newPassword || !confirmNewPassword) {
    throw Error("All fields required!");
  }

  const user = await this.findOne({ _id: id });

  const oldPasswordMatch = await bcrypt.compare(oldPassword, user.password);
  const newPasswordMatch = newPassword == confirmNewPassword;

  if (!oldPasswordMatch) {
    throw Error("Old Passwords do not match!");
  }

  if (!newPasswordMatch) {
    throw Error("New Passwords do not match!");
  }

  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(newPassword, salt);

  const updatedUser = await this.findByIdAndUpdate({ _id: id }, { password: hash });
  return updatedUser;
};

userSchema.statics.changeUsername = async function (id, username) {
  if (!username) {
    throw Error("Field required!");
  }

  if (username.length < 4) {
    throw Error("Username too short! Minimum 4 characters!");
  }

  const matchingCharacters = /^[a-zA-Z0-9_]+$/;

  if (!matchingCharacters.test()) {
    throw Error("Not allowed characters!");
  }

  if (username.length > 12) {
    throw Error("Username too long! Maximum 12 characters!");
  }

  const updatedUser = await this.findByIdAndUpdate({ _id: id }, { username: username });
  return updatedUser;
};

export const userModel = mongoose.model("user", userSchema);
