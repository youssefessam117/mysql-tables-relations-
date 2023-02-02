import express from "express";
import auth from "./src/modules/users/users.route.js";
import { category } from "./src/modules/categories/categories.route.js";
import products from "./src/modules/products/products.route.js";

const app = express();

app.use(express.json());

app.use(auth);

app.use(category);

app.use(products);

app.listen(3000, () => {
  console.log("server is running ");
});
