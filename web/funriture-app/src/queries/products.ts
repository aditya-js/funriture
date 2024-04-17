import { BASE_URL } from "../utils/constants";

export async function getCategories() {
  const response = await fetch(`${BASE_URL}/api/product/getcategories`, {
    headers: { "content-type": "application/json" },
  });

  const data = await response.json();

  return data;
}

export async function getproduct() {
  const response = await fetch(`${BASE_URL}/api/product/getProducts`, {
    headers: { "content-type": "application/json" },
  });

  const data = await response.json();

  return data;
}
