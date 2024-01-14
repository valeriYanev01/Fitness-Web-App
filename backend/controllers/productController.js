import { productsModel } from "../models/productsModel.js";

export const allProducts = async (req, res) => {
  const { type } = req.query;

  try {
    console.log(type);
    const getProducts = await productsModel.find({ type: type });

    res.status(200).json({ getProducts });
  } catch (err) {
    console.log(err);
    res.status(404).json({ error: err.message });
  }
};

export const singleProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await productsModel.findById({ _id: id });
    res.status(200).json({ product });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};
