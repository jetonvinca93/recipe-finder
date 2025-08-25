import api from "./apiClient";

export async function searchByIngredients(ingredients, number = 12) {
  if (!ingredients?.trim()) return [];
  const { data } = await api.get("/recipes/findByIngredients", {
    params: { ingredients, number },
  });
  return data; // array
}
