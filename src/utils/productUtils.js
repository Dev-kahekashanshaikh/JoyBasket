export const getProductsByCategory = (products, category) => {
    return products.filter(
        (product) => product.category === category
    );
};

export const getRandomProduct = (products) => {
    if (!products.length) {
        return null;
    }

    const randomIndex = Math.floor(
        Math.random() * products.length
    );

    return products[randomIndex];
};