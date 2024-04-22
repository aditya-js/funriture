import { BASE_URL } from "../utils/constants";

export async function getCategories() {
  const response = await fetch(`${BASE_URL}/api/product/getcategories`, {
    headers: { "content-type": "application/json" },
  });

  const data = await response.json();

  return data;
}

export async function getproduct({ categoryId, searchString }) {
  let url = `${BASE_URL}/api/product/getProducts`;

  if (categoryId) {
    url = url + `?categoryId=${categoryId}`;
  }
  if (searchString) {
    url = url + `?searchString=${searchString}`;
  }
  const response = await fetch(url, {
    headers: { "content-type": "application/json" },
  });

  const data = await response.json();

  return data;
}
