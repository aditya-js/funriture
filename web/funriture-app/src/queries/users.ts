import { BASE_URL } from "../utils/constants";

export async function login(email: string, password: string) {
  const response = await fetch(`${BASE_URL}/api/user/login`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: email, password: password }),
  });

  const data = await response.json();

  return data;
}

export async function getUser(id: string) {
  const token = localStorage.getItem("accessToken");
  const response = await fetch(`${BASE_URL}/api/user/getUser/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  return data;
}
