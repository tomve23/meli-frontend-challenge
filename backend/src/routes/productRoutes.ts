import { Router } from "express";
import { searchProducts } from "@/controllers/productController";

const productRoutes = Router();

// Define the route for searching products
productRoutes.get("/items", searchProducts);

export default productRoutes;
