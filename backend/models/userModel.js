import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

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

export const userModel = mongoose.model("user", userSchema);
