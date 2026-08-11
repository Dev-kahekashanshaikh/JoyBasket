import { useMemo, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import ProductNavigation from "../../components/CategoryNavigation/ProductNavigation";
import CategoryFilters from "../../components/CategoryFilters/CategoryFilters";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import ProductCategoryHeader from "../../components/ProductCategoryHeader/ProductCategoryHeader";

import useProducts from "../../hooks/useProducts";
import useProductFilters from "../../hooks/useProductFilters";
import { useCart } from "../../context/CartContext";
import "./ProductCategory.css";


const ProductCategory = () => {

    const { category } = useParams();
    const [searchParams] = useSearchParams();

const searchQuery = searchParams.get("search");

    const {
        products,
        loading,
        error,
    } = useProducts();



    const { addToCart } = useCart();



    // =========================================================
    // SELECTED PRODUCT
    // =========================================================

    const [selectedProduct, setSelectedProduct] = useState(null);

    const [quantity, setQuantity] = useState(1);

    const [filtersOpen, setFiltersOpen] = useState(false);

    const [cartMessage, setCartMessage] = useState("");
    // =========================================================
    // CATEGORY PRODUCTS
    // =========================================================

    // const categoryProducts = useMemo(() => {

    //     return products.filter(
    //         (product) =>
    //             product.category?.toLowerCase() ===
    //             category?.toLowerCase()
    //     );

    // }, [products, category]);

//     const categoryProducts = useMemo(() => {

//     if (searchQuery) {

//         const query = searchQuery.toLowerCase();

//         return products.filter((product) =>
//             product.title?.toLowerCase().includes(query) ||
//             product.brand?.toLowerCase().includes(query) ||
//             product.category?.toLowerCase().includes(query)
//         );
//     }

//     return products.filter(
//         (product) =>
//             product.category?.toLowerCase() ===
//             category?.toLowerCase()
//     );

// }, [products, category, searchQuery]);

const categoryProducts = useMemo(() => {

    // ==============================
    // SEARCH PRODUCTS
    // ==============================

    if (searchQuery?.trim()) {

        const query = searchQuery.trim().toLowerCase();

        return products.filter((product) => {

            return (
                product.title?.toLowerCase().includes(query) ||
                product.brand?.toLowerCase().includes(query) ||
                product.category?.toLowerCase().includes(query) ||
                product.description?.toLowerCase().includes(query)
            );

        });

    }


    // ==============================
    // ALL PRODUCTS
    // /products
    // ==============================

    if (!category) {
        return products;
    }


    // ==============================
    // CATEGORY PRODUCTS
    // /products/:category
    // ==============================

    return products.filter(
        (product) =>
            product.category?.toLowerCase() ===
            category?.toLowerCase()
    );

}, [products, category, searchQuery]);


    // =========================================================
    // RELATED PRODUCTS
    // =========================================================

    const relatedProducts = useMemo(() => {

        if (!selectedProduct) return [];

        return categoryProducts
            .filter(
                (product) =>
                    product.id !== selectedProduct.id
            )
            .slice(0, 4);

    }, [categoryProducts, selectedProduct]);


    // =========================================================
    // FILTERS
    // =========================================================

    const {
        titles,
        brands,

        selectedTitle,
        selectedBrand,
        selectedPrice,
        selectedRating,
        selectedDiscount,

        setSelectedTitle,
        setSelectedBrand,
        setSelectedPrice,
        setSelectedRating,
        setSelectedDiscount,

        filteredProducts,

        clearFilters,

    } = useProductFilters(categoryProducts);


    // =========================================================
    // PRODUCT SELECTION
    // =========================================================

    const handleProductSelect = (product) => {

        setSelectedProduct(product);

        setQuantity(1);

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };


    // =========================================================
    // BACK TO PRODUCTS
    // =========================================================

    const handleBackToProducts = () => {

        setSelectedProduct(null);

        setQuantity(1);

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };


    // =========================================================
    // LOADING
    // =========================================================

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


    // =========================================================
    // ERROR
    // =========================================================

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


    // =========================================================
    // PAGE
    // =========================================================

    return (
        <main className="product-category-page">

            <div className="container">


                {/* =================================================
                    NORMAL CATEGORY VIEW
                ================================================= */}

                {!selectedProduct && (
                    <>

                        <ProductNavigation
                            products={products}
                        />


                        {/* CATEGORY HEADER */}

                        <div className="product-category-header">

                            <ProductCategoryHeader
                                category={category}
                                productCount={categoryProducts.length}
                            />

                        </div>


                        {/* FILTER TOOLBAR */}

                        <div className="filter-toolbar">

                            <button
                                type="button"
                                className="filter-toggle-btn"
                                onClick={() =>
                                    setFiltersOpen(
                                        (previous) =>
                                            !previous
                                    )
                                }
                            >

                                <span className="filter-icon">
                                    ☰
                                </span>

                                {filtersOpen
                                    ? "Hide Filters"
                                    : "Show Filters"
                                }

                            </button>


                            <div className="category-results-info">

                                Showing{" "}

                                <strong>
                                    {filteredProducts.length}
                                </strong>{" "}

                                of{" "}

                                <strong>
                                    {categoryProducts.length}
                                </strong>{" "}

                                products

                            </div>

                        </div>


                        {/* FILTERS + PRODUCTS */}

                        <div
                            className={`category-content-layout ${filtersOpen
                                ? "filters-visible"
                                : "filters-hidden"
                                }`}
                        >

                            {filtersOpen && (

                                <aside className="category-filters">

                                    <CategoryFilters

                                        titles={titles}
                                        brands={brands}

                                        selectedTitle={
                                            selectedTitle
                                        }

                                        selectedBrand={
                                            selectedBrand
                                        }

                                        selectedPrice={
                                            selectedPrice
                                        }

                                        selectedRating={
                                            selectedRating
                                        }

                                        selectedDiscount={
                                            selectedDiscount
                                        }

                                        setSelectedTitle={
                                            setSelectedTitle
                                        }

                                        setSelectedBrand={
                                            setSelectedBrand
                                        }

                                        setSelectedPrice={
                                            setSelectedPrice
                                        }

                                        setSelectedRating={
                                            setSelectedRating
                                        }

                                        setSelectedDiscount={
                                            setSelectedDiscount
                                        }

                                        clearFilters={
                                            clearFilters
                                        }

                                    />

                                </aside>

                            )}


                            <section className="category-products-area">

                                <ProductGrid
                                    products={filteredProducts}
                                    onProductClick={
                                        handleProductSelect
                                    }
                                />

                            </section>

                        </div>

                    </>
                )}


                {/* =================================================
                    SELECTED PRODUCT VIEW
                ================================================= */}

                {selectedProduct && (
                    <>

                        {/* BACK BUTTON */}

                        <button
                            type="button"
                            className="back-to-products"
                            onClick={handleBackToProducts}
                        >
                            ← Back to Products
                        </button>
                        {cartMessage && (
                            <div className="cart-notification">
                                ✓ {cartMessage}
                            </div>
                        )}

                        {/* SELECTED PRODUCT */}

                        <section className="selected-product-details">


                            {/* IMAGE */}

                            <div className="selected-product-image">

                                <img
                                    src={
                                        selectedProduct.images?.[0] ||
                                        selectedProduct.thumbnail
                                    }
                                    alt={selectedProduct.title}
                                />

                            </div>


                            {/* INFORMATION */}

                            <div className="selected-product-info">

                                <span className="selected-product-category">

                                    {selectedProduct.category}

                                </span>


                                <h2>
                                    {selectedProduct.title}
                                </h2>


                                <p className="selected-product-brand">

                                    Brand:{" "}

                                    <strong>
                                        {selectedProduct.brand}
                                    </strong>

                                </p>


                                {/* RATING */}

                                <div className="selected-product-rating">

                                    <span>
                                        ★
                                    </span>

                                    {selectedProduct.rating} / 5

                                </div>


                                {/* PRICE */}

                                <div className="selected-product-price">

                                    ₹
                                    {Math.round(
                                        selectedProduct.price * 83
                                    ).toLocaleString("en-IN")}

                                    <span>

                                        -
                                        {Math.round(
                                            selectedProduct.discountPercentage
                                        )}
                                        %

                                    </span>

                                </div>


                                {/* DESCRIPTION */}

                                <p className="selected-product-description">

                                    {selectedProduct.description}

                                </p>


                                {/* STOCK */}

                                <p className="selected-product-stock">

                                    ✓{" "}
                                    {selectedProduct.stock}
                                    {" "}items available

                                </p>


                                {/* QUANTITY */}

                                <div className="selected-product-quantity">

                                    <strong>
                                        Quantity
                                    </strong>


                                    <div className="quantity-controls">

                                        <button
                                            type="button"
                                            onClick={() =>
                                                setQuantity(
                                                    (previous) =>
                                                        Math.max(
                                                            1,
                                                            previous - 1
                                                        )
                                                )
                                            }
                                        >
                                            −
                                        </button>


                                        <span>
                                            {quantity}
                                        </span>


                                        <button
                                            type="button"
                                            onClick={() =>
                                                setQuantity(
                                                    (previous) =>
                                                        Math.min(
                                                            selectedProduct.stock,
                                                            previous + 1
                                                        )
                                                )
                                            }
                                        >
                                            +
                                        </button>

                                    </div>

                                </div>


                                {/* ADD TO CART */}

                                {/* <button
                                    type="button"
                                    className="selected-product-cart"
                                >
                                    🛒 Add to Cart
                                </button> */}

                                <button
                                    type="button"
                                    className="selected-product-cart"
                                    onClick={() => {

                                        addToCart(selectedProduct, quantity);

                                        setCartMessage("Item added to cart");

                                        setTimeout(() => {
                                            setCartMessage("");
                                        }, 3000);

                                    }}
                                >
                                    🛒 Add to Cart
                                </button>

                            </div>

                        </section>


                        {/* =================================================
                            RELATED PRODUCTS
                        ================================================= */}

                        {relatedProducts.length > 0 && (

                            <section className="related-products">

                                <div className="related-products-header">

                                    <span>
                                        YOU MAY ALSO LIKE
                                    </span>

                                    <h2>
                                        Related Products
                                    </h2>

                                </div>


                                <ProductGrid
                                    products={relatedProducts}
                                    onProductClick={
                                        handleProductSelect
                                    }
                                />

                            </section>

                        )}

                    </>
                )}

            </div>

        </main>
    );
};


export default ProductCategory;