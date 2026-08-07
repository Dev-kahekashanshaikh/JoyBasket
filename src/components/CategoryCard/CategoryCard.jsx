import "./CategoryCard.css";

const CategoryCard = ({ category, onClick }) => {
    return (
        <div
            className="category-card"
            onClick={onClick}
        >
            <div className="category-card-image">
                <img
                    src={category.image}
                    alt={category.title}
                />
            </div>

            <h3>
                {category.title}
            </h3>
        </div>
    );
};

export default CategoryCard;