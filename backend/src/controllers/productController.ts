import { Request, Response } from "express";
import api from "@/services/api";
import SearchResponse from "@/models/searchResponse";
import ItemDetailResponse from "@/models/itemDetailResponse";
import Author from "@/models/author";
import Price from "@/models/price";

const author = new Author("Tomás", "Vera");

export const searchProducts = async (req: Request, res: Response) => {
  try {
    const response = await api.get("/sites/MLA/search", {
      params: req.query,
    });

    const categories = response.data.filters[0].values[0].path_from_root.map(
      (category: any) => category.name
    );

    const items = response.data.results.map((item: any) => ({
      id: item.id,
      title: item.title,
      price: new Price(item.price, item.currency_id, 0),
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
    }));

    const productsData = new SearchResponse(author, categories, items);

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
