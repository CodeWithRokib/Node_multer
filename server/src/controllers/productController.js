import Product from "../models/productModel.js";

export const getProduct = async (req, res) => {
  try {
    const product = await Product.find({});
    res.status(201).send({
      success: true,
      message: "Product Get Successfully",
      product,
    });
  } catch (error) {
    res.status(404).send({
      success: false,
      message: "Product Not Found",
      error,
    });
  }
};

export const createProduct = async (req, res) => {
  try {

    const imagePath = req.file.path; // File path saved on the server

    const product = new Product({
      ...req.body,
      image: imagePath,
    });
    await product.save();

    res.status(200).send({
      success: true,
      message: "Product Create Successfully",
      file:req.file, 
      product,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Internal Server Error",
      error,
    });
  }
};

export const updateProduct = async (req, res) => {

  try {
    const productId = req.params.id;
    const { name, description, price } = req.body;
    const imagePath = req.file ? req.file.path : undefined;

    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      {
        name,
        description,
        price,
        ...(imagePath && { image: imagePath }),
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Product Updated Successfully",
      updatedProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error,
    });
  }
};
