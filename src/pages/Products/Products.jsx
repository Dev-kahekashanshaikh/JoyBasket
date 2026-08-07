import ProductCard from "../../components/ProductCard/ProductCard";

import useProducts from "../../hooks/useProducts";

import "./Products.css";

const Products = () => {
    const {
        products,
        loading,
        error,
    } = useProducts();

    if (loading) {
        return (
            <main className="products-page">
                <div className="container">
                    <p>Loading products...</p>
                </div>
            </main>
        );
    }

    if (error) {
        return (
            <main className="products-page">
                <div className="container">
                    <p>Unable to load products.</p>
                </div>
            </main>
        );
    }

    return (
        <main className="products-page">

            <div className="container">

                <div className="products-header">
                    <span className="products-eyebrow">
                        JoyBasket Store
                    </span>

                    <h1>All Products</h1>

                    <p>
                        Discover products across fashion, beauty,
                        electronics, grocery, home and more.
                    </p>
                </div>

                <div className="products-grid">

                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}

                </div>

            </div>

        </main>
    );
};

export default Products;