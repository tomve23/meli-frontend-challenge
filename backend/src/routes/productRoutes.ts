import { Router } from "express";
import { searchProducts, getProductDetails } from "@/controllers/product";

const productRoutes = Router();

// Define the route for searching products
productRoutes.get("/items", searchProducts);
productRoutes.get("/items/:itemId", getProductDetails);

export default productRoutes;
