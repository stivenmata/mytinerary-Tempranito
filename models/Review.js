import { Schema, model } from "mongoose";

let collection = "reviews";
let schema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "users", required: true },
    productId: { type: Schema.Types.ObjectId, ref: "products", required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true },
    reviewDate: { type: Date, default: Date.now },
    likes: { type: Number, default: 0 },
    verifiedPurchase: { type: Boolean, default: false }
  },
  { timestamps: true }
);

let Review = model(collection, schema);
export default Review;
