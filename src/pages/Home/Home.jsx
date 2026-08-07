import Hero from "../../components/Hero/Hero";
import CategoryBanners from "../../components/CategoryBanners/CategoryBanners";
import Categories from "../../components/Categories/Categories";

import useProducts from "../../hooks/useProducts";

const Home = () => {
    const {
        products,
        loading,
        error,
    } = useProducts();

    if (loading) {
        return (
            <main className="home">
                <div className="container">
                    <p>Loading products...</p>
                </div>
            </main>
        );
    }

    if (error) {
        return (
            <main className="home">
                <div className="container">
                    <p>Unable to load products.</p>
                </div>
            </main>
        );
    }

    return (
        <main className="home">

            <Hero products={products} />

            <CategoryBanners products={products} />

            <Categories products={products} />

        </main>
    );
};

export default Home;