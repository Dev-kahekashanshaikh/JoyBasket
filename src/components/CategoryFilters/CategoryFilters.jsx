const CategoryFilters = ({
    titles = [],
    brands = [],
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
    clearFilters,
}) => {

    return (
        <div className="category-filters">

            {/* Product */}

            <div className="filter-group">

                <label>
                    Product
                </label>

                <select
                    value={selectedTitle}
                    onChange={(event) =>
                        setSelectedTitle(event.target.value)
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
                        setSelectedBrand(event.target.value)
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
                        setSelectedPrice(event.target.value)
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
                        setSelectedRating(event.target.value)
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
                        setSelectedDiscount(event.target.value)
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


            {/* Clear Filters */}

            <button
                type="button"
                className="clear-filters"
                onClick={clearFilters}
            >
                Clear Filters
            </button>

        </div>
    );
};

export default CategoryFilters;