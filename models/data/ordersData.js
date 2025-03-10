import "dotenv/config.js"
import "../../config/database.js"
import Order from "../Order.js";

let orders = [
  {
    userId: "605c72b7e847e7428c74ef59",
    products: [{ productId: "605c72b7e847e7428c74ef10", quantity: 2 }],
    totalPrice: 2400,
    status: "Pending",
    orderDate: new Date(),
    paymentMethod: "Credit Card"
  }
];

Order.insertMany(orders);
