import "dotenv/config.js"
import "../../config/database.js"
import Product from "../Product.js";

let products = [
  { name: "Laptop", price: 1200, category: "Technology", stock: 10, available: true },
  { name: "Basketball", price: 30, category: "Sports", stock: 50, available: true }
];

Product.insertMany(products);
