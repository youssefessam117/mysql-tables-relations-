import express from "express";
import {
  addproduct,
  deleteProducts,
  getUSerProducts,
  searchProducts,
  updateProducts,
} from "./products.controler.js";

const products = express.Router();

products.get("/products/add", addproduct);
products.delete("/products/delete", deleteProducts);
products.put("/products/update", updateProducts);
products.get("/products/userproducts", getUSerProducts);
products.post("/products/searchProducts", searchProducts);

export default products;
