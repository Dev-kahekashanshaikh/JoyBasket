import "./CategoryFilters.css";

const CategoryFilters = ({
    titles = [],
    brands = [],

    selectedTitle = [],
    selectedBrand = [],
    selectedPrice = [],
    selectedRating = [],
    selectedDiscount = [],

    setSelectedTitle,
    setSelectedBrand,
    setSelectedPrice,
    setSelectedRating,
    setSelectedDiscount,

    clearFilters,
}) => {

    // =====================================================
    // CHECKBOX TOGGLE HELPER
    // =====================================================

    const toggleValue = (
        value,
        selectedValues,
        setSelectedValues
    ) => {

        if (selectedValues.includes(value)) {

            // Remove value
            setSelectedValues(
                selectedValues.filter(
                    (item) => item !== value
                )
            );

        } else {

            // Add value
            setSelectedValues([
                ...selectedValues,
                value,
            ]);
        }
    };


    return (

        <div className="category-filters">

            {/* =================================================
                FILTER HEADER
            ================================================= */}

            <div className="filters-header">

              

                <button
                    type="button"
                    className="clear-filters"
                    onClick={clearFilters}
                >
                    Clear All Filters
                </button>

            </div>


            {/* =================================================
                PRODUCT
            ================================================= */}

            <div className="filter-group">

                <div className="filter-group-title">
                    <span>Product</span>

                    <span className="filter-count">
                        {selectedTitle.length > 0
                            ? selectedTitle.length
                            : ""}
                    </span>
                </div>


                <div className="filter-options">

                    {titles.length > 0 ? (

                        titles.map((title) => (

                            <label
                                className="filter-checkbox"
                                key={title}
                            >

                                <input
                                    type="checkbox"
                                    checked={selectedTitle.includes(
                                        title
                                    )}
                                    onChange={() =>
                                        toggleValue(
                                            title,
                                            selectedTitle,
                                            setSelectedTitle
                                        )
                                    }
                                />

                             

                                <span className="filter-label">
                                    {title}
                                </span>

                            </label>

                        ))

                    ) : (

                        <span className="filter-empty">
                            No products available
                        </span>

                    )}

                </div>

            </div>


            {/* =================================================
                BRAND
            ================================================= */}

            <div className="filter-group">

                <div className="filter-group-title">

                    <span>
                        Brand
                    </span>

                    <span className="filter-count">
                        {selectedBrand.length > 0
                            ? selectedBrand.length
                            : ""}
                    </span>

                </div>


                <div className="filter-options">

                    {brands.length > 0 ? (

                        brands.map((brand) => (

                            <label
                                className="filter-checkbox"
                                key={brand}
                            >

                                <input
                                    type="checkbox"
                                    checked={selectedBrand.includes(
                                        brand
                                    )}
                                    onChange={() =>
                                        toggleValue(
                                            brand,
                                            selectedBrand,
                                            setSelectedBrand
                                        )
                                    }
                                />

                           

                                <span className="filter-label">
                                    {brand}
                                </span>

                            </label>

                        ))

                    ) : (

                        <span className="filter-empty">
                            No brands available
                        </span>

                    )}

                </div>

            </div>


            {/* =================================================
                PRICE
            ================================================= */}

            <div className="filter-group">

                <div className="filter-group-title">
                    <span>
                        Price
                    </span>

                    <span className="filter-count">
                        {selectedPrice.length > 0
                            ? selectedPrice.length
                            : ""}
                    </span>
                </div>


                <div className="filter-options">

                    <label className="filter-checkbox">

                        <input
                            type="checkbox"
                            checked={selectedPrice.includes(
                                "under-50"
                            )}
                            onChange={() =>
                                toggleValue(
                                    "under-50",
                                    selectedPrice,
                                    setSelectedPrice
                                )
                            }
                        />

                   

                        <span className="filter-label">
                            Under $50
                        </span>

                    </label>


                    <label className="filter-checkbox">

                        <input
                            type="checkbox"
                            checked={selectedPrice.includes(
                                "50-100"
                            )}
                            onChange={() =>
                                toggleValue(
                                    "50-100",
                                    selectedPrice,
                                    setSelectedPrice
                                )
                            }
                        />

                      

                        <span className="filter-label">
                            $50 - $100
                        </span>

                    </label>


                    <label className="filter-checkbox">

                        <input
                            type="checkbox"
                            checked={selectedPrice.includes(
                                "100-500"
                            )}
                            onChange={() =>
                                toggleValue(
                                    "100-500",
                                    selectedPrice,
                                    setSelectedPrice
                                )
                            }
                        />

                     

                        <span className="filter-label">
                            $100 - $500
                        </span>

                    </label>


                    <label className="filter-checkbox">

                        <input
                            type="checkbox"
                            checked={selectedPrice.includes(
                                "above-500"
                            )}
                            onChange={() =>
                                toggleValue(
                                    "above-500",
                                    selectedPrice,
                                    setSelectedPrice
                                )
                            }
                        />

                     

                        <span className="filter-label">
                            Above $500
                        </span>

                    </label>

                </div>

            </div>


            {/* =================================================
                RATING
            ================================================= */}

            <div className="filter-group">

                <div className="filter-group-title">

                    <span>
                        Rating
                    </span>

                    <span className="filter-count">
                        {selectedRating.length > 0
                            ? selectedRating.length
                            : ""}
                    </span>

                </div>


                <div className="filter-options">

                    <label className="filter-checkbox">

                        <input
                            type="checkbox"
                            checked={selectedRating.includes("4")}
                            onChange={() =>
                                toggleValue(
                                    "4",
                                    selectedRating,
                                    setSelectedRating
                                )
                            }
                        />

                     

                        <span className="filter-label">
                            <span className="rating-stars">
                                ★★★★★
                            </span>

                            <span>
                                4 & above
                            </span>
                        </span>

                    </label>


                    <label className="filter-checkbox">

                        <input
                            type="checkbox"
                            checked={selectedRating.includes("3")}
                            onChange={() =>
                                toggleValue(
                                    "3",
                                    selectedRating,
                                    setSelectedRating
                                )
                            }
                        />

                    

                        <span className="filter-label">
                            <span className="rating-stars">
                                ★★★★
                            </span>

                            <span>
                                3 & above
                            </span>
                        </span>

                    </label>


                    <label className="filter-checkbox">

                        <input
                            type="checkbox"
                            checked={selectedRating.includes("2")}
                            onChange={() =>
                                toggleValue(
                                    "2",
                                    selectedRating,
                                    setSelectedRating
                                )
                            }
                        />

                     

                        <span className="filter-label">
                            <span className="rating-stars">
                                ★★★
                            </span>

                            <span>
                                2 & above
                            </span>
                        </span>

                    </label>

                </div>

            </div>


            {/* =================================================
                DISCOUNT
            ================================================= */}

            <div className="filter-group">

                <div className="filter-group-title">

                    <span>
                        Discount
                    </span>

                    <span className="filter-count">
                        {selectedDiscount.length > 0
                            ? selectedDiscount.length
                            : ""}
                    </span>

                </div>


                <div className="filter-options">

                    <label className="filter-checkbox">

                        <input
                            type="checkbox"
                            checked={selectedDiscount.includes(
                                "10"
                            )}
                            onChange={() =>
                                toggleValue(
                                    "10",
                                    selectedDiscount,
                                    setSelectedDiscount
                                )
                            }
                        />

                    

                        <span className="filter-label">
                            10% & above
                        </span>

                    </label>


                    <label className="filter-checkbox">

                        <input
                            type="checkbox"
                            checked={selectedDiscount.includes(
                                "20"
                            )}
                            onChange={() =>
                                toggleValue(
                                    "20",
                                    selectedDiscount,
                                    setSelectedDiscount
                                )
                            }
                        />

                     

                        <span className="filter-label">
                            20% & above
                        </span>

                    </label>


                    <label className="filter-checkbox">

                        <input
                            type="checkbox"
                            checked={selectedDiscount.includes(
                                "30"
                            )}
                            onChange={() =>
                                toggleValue(
                                    "30",
                                    selectedDiscount,
                                    setSelectedDiscount
                                )
                            }
                        />

                       

                        <span className="filter-label">
                            30% & above
                        </span>

                    </label>

                </div>

            </div>


            {/* =================================================
                BOTTOM CLEAR BUTTON
            ================================================= */}

            <button
                type="button"
                className="clear-filters"
                onClick={clearFilters}
            >
                Clear All Filters
            </button>

        </div>
    );
};


export default CategoryFilters;