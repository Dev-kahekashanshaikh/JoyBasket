import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import CategoryCard from "../CategoryCard/CategoryCard";

const Categories = ({
    products = [],
    itemNoSlicestart,
    itemNoSliceEnd,
}) => {
// to navigate the url by clicking on products page
    const navigate = useNavigate();


    //To group the all available category only from api no category will repeat

    const categories = useMemo(() => {

        const categoryMap = new Map();

        products.forEach((product) => {

            if (!product.category) return;

            if (!categoryMap.has(product.category)) {
                categoryMap.set(product.category, {
                    id: product.category,
                    title: product.category,
                    image: product.thumbnail,
                });
            }

        });

        return Array.from(categoryMap.values());

    }, [products]);


    return (
        <section className="categories">

            <div className="container">

                <div className="section-heading">

                    <span className="section-eyebrow">
                        Shop by Category
                    </span>

                    <h2>
                        Explore JoyBasket
                    </h2>

                    <p>
                        Discover everything you need across
                        our wide range of categories.
                    </p>

                </div>
{/* mapping the array of category only with image and title */}
                <div className="categories-grid">

                    {categories
                        .slice(itemNoSlicestart, itemNoSliceEnd)
                        .map((category) => (

                            <CategoryCard
                                key={category.id}
                                category={category}
                                onClick={() => navigate("/products")}
                            />

                        ))}

                </div>

            </div>

        </section>
    );
};

export default Categories;