import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  taste: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});

export const productsModel = mongoose.model("products", productsSchema);
