import "dotenv/config.js"
import "../../config/database.js"
import Review from "../Review.js";

let reviews = [
  {
    userId: "605c72b7e847e7428c74ef59",
    productId: "605c72b7e847e7428c74ef10",
    rating: 5,
    comment: "Excellent product!",
    reviewDate: new Date(),
    likes: 10,
    verifiedPurchase: true
  }
];

Review.insertMany(reviews);
