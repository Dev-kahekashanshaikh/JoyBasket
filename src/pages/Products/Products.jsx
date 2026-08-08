import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import ProductCategoryCard from "../../components/ProductCategoryCard/ProductCategoryCard";

import useProducts from "../../hooks/useProducts";

import "./Products.css";

const Products = () => {

    const {
        products,
        loading,
        error,
    } = useProducts();


    // =========================================
    // Navigation
    // =========================================

    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        navigate(`/products/category/${category}`);
    };


    // =========================================
    // Get available categories
    // =========================================

    const categories = useMemo(() => {

        return [
            ...new Set(
                products
                    .map((product) => product.category)
                    .filter(Boolean)
            ),
        ].sort();

    }, [products]);


    // =========================================
    // Loading
    // =========================================

    if (loading) {

        return (
            <main className="products-page">

                <div className="container">

                    <p>
                        Loading products...
                    </p>

                </div>

            </main>
        );
    }


    // =========================================
    // Error
    // =========================================

    if (error) {

        return (
            <main className="products-page">

                <div className="container">

                    <p>
                        Unable to load products.
                    </p>

                </div>

            </main>
        );
    }


    // =========================================
    // Page
    // =========================================

    return (
        <main className="products-page">

            <div className="container">

                {/* =================================
                    Header
                ================================= */}

                <div className="products-header">

                    <span className="products-eyebrow">
                        JoyBasket Store
                    </span>

                    <h1>
                        All Products
                    </h1>

                    <p>
                        Discover products across fashion,
                        beauty, electronics, grocery,
                        home and more.
                    </p>

                </div>


                {/* =================================
                    Category Cards
                ================================= */}

                <div className="product-category-list">

                    {categories.map((category) => (

                        <ProductCategoryCard
                            key={category}
                            category={category}
                            products={products}
                            onClick={handleCategoryClick}
                        />

                    ))}

                </div>

            </div>

        </main>
    );
};

export default Products;