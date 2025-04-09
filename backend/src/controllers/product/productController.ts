import api from "@/services/api";
import { API_MELI_FRONTEND, API_MELI } from "@/constants/api";
import { Request, Response } from "express";
import { Author, Product } from "@/models";
import { SearchResponse } from "@/controllers/product";
import { getProductCondition } from "@/utils/helpers";

const author: Author = {
  name: "Tomás",
  lastname: "Vera",
};

const limit = 4;

export const searchProducts = async ({ query }: Request, res: Response) => {
  try {
    const { data } = await api.get(`${API_MELI_FRONTEND}/sites/MLA/search`, {
      params: {
        q: query.q,
        offset: limit * Number(query.page || 0),
      },
    });

    const results = data.results.slice(0, limit);

    const categories: string[] = data.breadcrumb.map((item: any) => item.text);
    const items: Product[] = results.map(
      (item: any): Product => ({
        id: item.id,
        title: item.title,
        price: {
          currency: item.price.currency_id,
          amount: item.price.amount,
          decimals: data.currency.decimal_places,
        },
        address: {
          state: item.seller_info.address.state?.name,
          city: item.seller_info.address.city?.name,
          country: item.seller_info.address.country?.name,
        },
        picture: item.pictures.stack.retina,
        condition: getProductCondition(item),
        free_shipping: item.tags.includes("free_shipping"),
      })
    );

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

export const getProductDetails = async ({ params }: Request, res: Response) => {
  try {
    const { data } = await api.get(
      `${API_MELI}/items/${params.itemId}/description`
    );

    const productDetail = {
      description: data.plain_text,
      sold_quantity: Math.floor(Math.random() * 500),
    };

    res.json(productDetail);
  } catch (error) {
    console.error("Error fetching product details:", error);
    res.status(500).json({ error: "Ocurrió un error al obtener los datos" });
  }
};
