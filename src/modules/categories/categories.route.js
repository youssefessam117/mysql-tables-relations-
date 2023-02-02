import express from "express";
import {
  addLogic,
  deleteCategory,
  getAllCategory,
  updateCategory,
} from "./categories.controler.js";

export const category = express.Router();

category.post("/category/add", addLogic);
category.put("/category/update", updateCategory);
category.delete("/category/delete", deleteCategory);
category.get("/category/getall", getAllCategory);
