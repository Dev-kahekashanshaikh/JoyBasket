import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import ProductCard from "../../components/ProductCard/ProductCard";
import useProducts from "../../hooks/useProducts";

import "./ProductCategory.css";

const ProductCategory = () => {

    // =========================================
    // Get category from URL
    // =========================================

    const { category } = useParams();


    // =========================================
    // Get products from API
    // =========================================

    const {
        products,
        loading,
        error,
    } = useProducts();


    // =========================================
    // Filter states
    // =========================================

    const [selectedTitle, setSelectedTitle] = useState("");
    const [selectedBrand, setSelectedBrand] = useState("");
    const [selectedPrice, setSelectedPrice] = useState("");
    const [selectedRating, setSelectedRating] = useState("");
    const [selectedDiscount, setSelectedDiscount] = useState("");


    // =========================================
    // Products belonging to this category
    // =========================================

    const categoryProducts = useMemo(() => {

        return products.filter(
            (product) =>
                product.category?.toLowerCase() ===
                category?.toLowerCase()
        );

    }, [products, category]);


    // =========================================
    // Available product titles
    // =========================================

    const titles = useMemo(() => {

        return [
            ...new Set(
                categoryProducts
                    .map((product) => product.title)
                    .filter(Boolean)
            ),
        ].sort();

    }, [categoryProducts]);


    // =========================================
    // Available brands
    // =========================================

    const brands = useMemo(() => {

        return [
            ...new Set(
                categoryProducts
                    .map((product) => product.brand)
                    .filter(Boolean)
            ),
        ].sort();

    }, [categoryProducts]);


    // =========================================
    // Apply filters
    // =========================================

    const filteredProducts = useMemo(() => {

        return categoryProducts.filter((product) => {

            // Product title
            if (
                selectedTitle &&
                product.title !== selectedTitle
            ) {
                return false;
            }


            // Brand
            if (
                selectedBrand &&
                product.brand !== selectedBrand
            ) {
                return false;
            }


            // Price
            if (selectedPrice) {

                const price = product.price;

                if (
                    selectedPrice === "under-50" &&
                    price >= 50
                ) {
                    return false;
                }

                if (
                    selectedPrice === "50-100" &&
                    (price < 50 || price > 100)
                ) {
                    return false;
                }

                if (
                    selectedPrice === "100-500" &&
                    (price < 100 || price > 500)
                ) {
                    return false;
                }

                if (
                    selectedPrice === "above-500" &&
                    price <= 500
                ) {
                    return false;
                }
            }


            // Rating
            if (
                selectedRating &&
                product.rating < Number(selectedRating)
            ) {
                return false;
            }


            // Discount
            if (
                selectedDiscount &&
                product.discountPercentage <
                Number(selectedDiscount)
            ) {
                return false;
            }


            return true;

        });

    }, [
        categoryProducts,
        selectedTitle,
        selectedBrand,
        selectedPrice,
        selectedRating,
        selectedDiscount,
    ]);


    // =========================================
    // Clear filters
    // =========================================

    const clearFilters = () => {

        setSelectedTitle("");
        setSelectedBrand("");
        setSelectedPrice("");
        setSelectedRating("");
        setSelectedDiscount("");

    };


    // =========================================
    // Loading
    // =========================================

    if (loading) {

        return (
            <main className="product-category-page">

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
            <main className="product-category-page">

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
        <main className="product-category-page">

            <div className="container">

                {/* =================================
                    Header
                ================================= */}

                <div className="product-category-header">

                    <span className="products-eyebrow">
                        JoyBasket Store
                    </span>

                    <h1>
                        {category}
                    </h1>

                    <p>
                        Discover the best products
                        available in this category.
                    </p>

                </div>


                {/* =================================
                    Filters
                ================================= */}

                <div className="category-filters">

                    {/* Product */}

                    <div className="filter-group">

                        <label>
                            Product
                        </label>

                        <select
                            value={selectedTitle}
                            onChange={(event) =>
                                setSelectedTitle(
                                    event.target.value
                                )
                            }
                        >

                            <option value="">
                                All Products
                            </option>

                            {titles.map((title) => (

                                <option
                                    key={title}
                                    value={title}
                                >
                                    {title}
                                </option>

                            ))}

                        </select>

                    </div>


                    {/* Brand */}

                    <div className="filter-group">

                        <label>
                            Brand
                        </label>

                        <select
                            value={selectedBrand}
                            onChange={(event) =>
                                setSelectedBrand(
                                    event.target.value
                                )
                            }
                        >

                            <option value="">
                                All Brands
                            </option>

                            {brands.map((brand) => (

                                <option
                                    key={brand}
                                    value={brand}
                                >
                                    {brand}
                                </option>

                            ))}

                        </select>

                    </div>


                    {/* Price */}

                    <div className="filter-group">

                        <label>
                            Price
                        </label>

                        <select
                            value={selectedPrice}
                            onChange={(event) =>
                                setSelectedPrice(
                                    event.target.value
                                )
                            }
                        >

                            <option value="">
                                All Prices
                            </option>

                            <option value="under-50">
                                Under $50
                            </option>

                            <option value="50-100">
                                $50 - $100
                            </option>

                            <option value="100-500">
                                $100 - $500
                            </option>

                            <option value="above-500">
                                Above $500
                            </option>

                        </select>

                    </div>


                    {/* Rating */}

                    <div className="filter-group">

                        <label>
                            Rating
                        </label>

                        <select
                            value={selectedRating}
                            onChange={(event) =>
                                setSelectedRating(
                                    event.target.value
                                )
                            }
                        >

                            <option value="">
                                All Ratings
                            </option>

                            <option value="4">
                                4★ & above
                            </option>

                            <option value="3">
                                3★ & above
                            </option>

                            <option value="2">
                                2★ & above
                            </option>

                        </select>

                    </div>


                    {/* Discount */}

                    <div className="filter-group">

                        <label>
                            Discount
                        </label>

                        <select
                            value={selectedDiscount}
                            onChange={(event) =>
                                setSelectedDiscount(
                                    event.target.value
                                )
                            }
                        >

                            <option value="">
                                All Discounts
                            </option>

                            <option value="10">
                                10% & above
                            </option>

                            <option value="20">
                                20% & above
                            </option>

                            <option value="30">
                                30% & above
                            </option>

                        </select>

                    </div>


                    {/* Clear */}

                    <button
                        type="button"
                        className="clear-filters"
                        onClick={clearFilters}
                    >
                        Clear Filters
                    </button>

                </div>


                {/* =================================
                    Results
                ================================= */}

                <div className="category-results-info">

                    <p>
                        Showing{" "}
                        <strong>
                            {filteredProducts.length}
                        </strong>{" "}
                        of{" "}
                        <strong>
                            {categoryProducts.length}
                        </strong>{" "}
                        products
                    </p>

                </div>


                {/* =================================
                    Product Grid
                ================================= */}

                {filteredProducts.length > 0 ? (

<div className="category-products-grid">
                        {filteredProducts.map(
                            (product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            )
                        )}

                    </div>

                ) : (

                    <div className="no-products">

                        <p>
                            No products found for
                            this category.
                        </p>

                    </div>

                )}

            </div>

        </main>
    );
};

export default ProductCategory;