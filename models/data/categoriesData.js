import "dotenv/config.js";
import "../../config/database.js"; 
import Category from "../Category.js";

const categories = [
  { name: "Technology", description: "Gadgets, software, and more", status: true },
  { name: "Sports", description: "Football, basketball, and others", status: true },
  { name: "Fashion", description: "Trends, brands, and new styles", status: false }
];

const insertData = async () => {
  try {
    await Category.insertMany(categories);
    console.log("✅ Categorías insertadas correctamente");
    process.exit(); // Cierra la conexión después de insertar los datos
  } catch (error) {
    console.error("❌ Error al insertar categorías:", error);
    process.exit(1); // Sale del proceso si hay error
  }
};

insertData();
