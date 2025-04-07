import { Router } from "express";
import { searchProducts } from "@/controllers/product";

const productRoutes = Router();

// Define the route for searching products
productRoutes.get("/items", searchProducts);

export default productRoutes;
