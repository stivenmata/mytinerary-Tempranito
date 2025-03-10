import { Schema, model } from "mongoose";

let collection = "orders";
let schema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "users", required: true },
    products: [
      {
        productId: { type: Schema.Types.ObjectId, ref: "products", required: true },
        quantity: { type: Number, required: true },
      }
    ],
    totalPrice: { type: Number, required: true },
    status: { type: String, enum: ["Pending", "Shipped", "Delivered"], default: "Pending" },
    orderDate: { type: Date, default: Date.now },
    paymentMethod: { type: String, required: true }
  },
  { timestamps: true }
);

let Order = model(collection, schema);
export default Order;
