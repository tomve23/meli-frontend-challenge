import api from "@/services/api";
import { API_MELI_FRONTEND } from "@/constants/api";
import { Request, Response } from "express";
import { Author, Product } from "@/models";
import { SearchResponse } from "./productController.types";

const author: Author = {
  name: "Tomás",
  lastname: "Vera",
};

export const searchProducts = async (req: Request, res: Response) => {
  try {
    const { data } = await api.get(`${API_MELI_FRONTEND}/sites/MLA/search`, {
      params: req.query,
    });

    const categories: string[] = data.breadcrumbs;

    const items: Product[] = data.results.map((item: any) => ({
      id: item.id,
      title: item.title,
      price: {
        currency: item.price.currency_id,
        amount: item.price.amount,
        decimals: data.currency.decimal_places,
      },
      picture: item.pictures.stack.retina,
      condition: item.condition_text,
      free_shipping: item.tags.includes("free_shipping"),
    }));

    const productsData: SearchResponse = {
      author,
      categories,
      items,
    };

    res.json(productsData);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Ocurrió un error al obtener los datos" });
  }
};

export const getProductDetails = async (itemId: string) => {
  try {
    const response = await api.get(`/items/${itemId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product details:", error);
    throw error;
  }
};

export const getProductDescription = async (itemId: string) => {
  try {
    const response = await api.get(`/items/${itemId}/description`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product description:", error);
    throw error;
  }
};
