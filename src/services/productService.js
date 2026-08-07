const BASE_URL = "https://dummyjson.com/products";

export const getProducts = async () => {
    const response = await fetch(`${BASE_URL}?limit=0`);

    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }

    const data = await response.json();

    return data.products;
};