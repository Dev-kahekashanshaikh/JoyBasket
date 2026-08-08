import { useMemo } from "react";
import { useParams } from "react-router-dom";
import ProductNavigation from "../../components/CategoryNavigation/ProductNavigation";
import ProductCategoryHeader from "../../components/ProductCategoryHeader/ProductCategoryHeader";
import CategoryFilters from "../../components/CategoryFilters/CategoryFilters";
import ProductGrid from "../../components/ProductGrid/ProductGrid";

import useProducts from "../../hooks/useProducts";
import useProductFilters from "../../hooks/useProductFilters";

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
    // Product filters
    // =========================================

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

                {/* Header */}

                <div className="product-category-header">
                <ProductNavigation
    products={products}
/>

<ProductCategoryHeader
    category={category}
    productCount={categoryProducts.length}
/>

                </div>


                {/* Filters */}

                <CategoryFilters
                    titles={titles}
                    brands={brands}

                    selectedTitle={selectedTitle}
                    selectedBrand={selectedBrand}
                    selectedPrice={selectedPrice}
                    selectedRating={selectedRating}
                    selectedDiscount={selectedDiscount}

                    setSelectedTitle={setSelectedTitle}
                    setSelectedBrand={setSelectedBrand}
                    setSelectedPrice={setSelectedPrice}
                    setSelectedRating={setSelectedRating}
                    setSelectedDiscount={setSelectedDiscount}

                    clearFilters={clearFilters}
                />


                {/* Results */}

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


                {/* Product Grid */}

                <ProductGrid
                    products={filteredProducts}
                />

            </div>

        </main>
    );
};

export default ProductCategory;