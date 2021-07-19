import asyncHandler from "express-async-handler";
import { unlinkFile } from "../../utils/unlnkFile.js";
import { join } from "path";
import slug from "slug";
import Product from "../../models/productModel.js";

export const createProduct = asyncHandler(async (req, res) => {
  const path = req.file.path;
  try {
    const { ...data } = req.body;
    data.images = req.file.filename;
    data.price = Number(data.price);
    data.cost = Number(data.cost);
    data.stock = Number(data.stock);
    data.slug = slug(data.title);

    const product = await Product.create({
      title: data.title,
      model: data.model,
      slug: data.slug,
      price: data.price,
      cost: data.cost,
      unit: data.unit,
      images: data.images,
      description: data.description,
    });
    if (product) {
      res.json({
        message: "Product craete successfully",
        data: product,
      });
    } else {
      unlinkFile(path);
      res.status(400);
      throw new Error("Invalid product data");
    }
  } catch (error) {
    unlinkFile(path);
    throw new Error(error.message);
  }
});

export const getProduct = asyncHandler(async (req, res) => {
  try {
    const currentPage = Number(req.query.page) || 1;
    const perPage = Number(req.query.page) || 5;
    let totalItems;

    const count = await Product.countDocuments();
    totalItems = count
    const product = await Product.find()
      .skip((currentPage - 1) * perPage)
      .limit(perPage);

    res.json({
      message: "Get product successfully",
      data: product,
      total_data: totalItems,
      per_page: perPage,
      current_page: currentPage,
    });
    
  } catch (error) {
    throw new Error(error.message);
  }
});
