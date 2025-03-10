import { Schema, model } from "mongoose";

let collection = "products";
let schema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    stock: { type: Number, required: true },
    available: { type: Boolean, default: true },
  },
  { timestamps: true }
);

let Product = model(collection, schema);
export default Product;
