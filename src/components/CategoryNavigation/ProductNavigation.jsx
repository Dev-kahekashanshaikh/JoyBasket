import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "./CategoryNavigation.css"

const ProductNavigation = ({ products = [] }) => {

    const navigate = useNavigate();

    const categories = useMemo(() => {

        return [
            ...new Set(
                products
                    .map((product) => product.category)
                    .filter(Boolean)
            ),
        ];

    }, [products]);

    return (
        <nav className="product-navigation">

            <div className="product-navigation-list">

                {categories.map((category) => (

                    <button
                        key={category}
                        type="button"
                        onClick={() =>
                            navigate(
                                `/products/category/${encodeURIComponent(category)}`
                            )
                        }
                    >
                        {category}
                    </button>

                ))}

            </div>

        </nav>
    );
};

export default ProductNavigation;