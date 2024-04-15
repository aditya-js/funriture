import { BASE_URL } from "../utils/constants";

export async function getCategories() {
  const response = await fetch(`${BASE_URL}/api/product/getcategories`, {
    headers: { "content-type": "application/json" },
  });
  console.log(response);
  const data = await response.json();
  console.log(data);
  return data;
}

export async function getproduct() {
  const response = await fetch(`${BASE_URL}/api/product/getProducts`, {
    headers: { "content-type": "application/json" },
  });
  console.log(response);
  const data = await response.json();
  console.log(data);
  return data;
}
