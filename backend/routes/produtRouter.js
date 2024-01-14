import express from "express";
import { allProducts, singleProduct } from "../controllers/productController.js";

const router = express.Router();

router.get("/", allProducts);
router.get("/:id", singleProduct);

export { router as productRouter };
