import { createContext, useContext } from "react";

import useProducts from "../hooks/useProducts";

const ProductContext = createContext(null);

export const ProductProvider = ({ children }) => {
    const {
        products,
        loading,
        error,
    } = useProducts();

    return (
        <ProductContext.Provider
            value={{
                products,
                loading,
                error,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};

export const useProductContext = () => {
    const context = useContext(ProductContext);

    if (!context) {
        throw new Error(
            "useProductContext must be used inside ProductProvider"
        );
    }

    return context;
};

export default ProductContext;