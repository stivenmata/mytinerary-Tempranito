import { Schema, model } from "mongoose";

let collection = "categories";
let schema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: Boolean, required: true },
  },
  { timestamps: true }
);

let Category = model(collection, schema);
export default Category;
