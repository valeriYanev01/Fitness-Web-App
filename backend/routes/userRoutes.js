import express from "express";

import {
  clearBasket,
  currentUser,
  decrementBasket,
  incrementBasket,
  removeFromBasket,
  userChangeEmail,
  userChangePassword,
  userChangeUsername,
  userLogin,
  userSignup,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/signup", userSignup);

router.post("/login", userLogin);

router.patch("/addToBasket", incrementBasket);

router.patch("/clearBasket", clearBasket);

router.patch("/deleteFromBasket", decrementBasket);

router.patch("/removeFromBasket", removeFromBasket);

router.patch("/changeUsername", userChangeUsername);

router.patch("/changeEmail", userChangeEmail);

router.patch("/changePassword", userChangePassword);

router.get("/", currentUser);

export { router as userRouter };
