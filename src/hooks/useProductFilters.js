import { useMemo, useState } from "react";

const useProductFilters = (categoryProducts = []) => {

    // =========================================================
    // SELECTED FILTERS
    // Arrays are required because checkboxes allow multiple
    // selections at the same time.
    // =========================================================

    const [selectedTitle, setSelectedTitle] = useState([]);

    const [selectedBrand, setSelectedBrand] = useState([]);

    const [selectedPrice, setSelectedPrice] = useState([]);

    const [selectedRating, setSelectedRating] = useState([]);

    const [selectedDiscount, setSelectedDiscount] = useState([]);


    // =========================================================
    // AVAILABLE PRODUCT TITLES
    // =========================================================

    const titles = useMemo(() => {

        return [
            ...new Set(
                categoryProducts
                    .map((product) => product.title)
                    .filter(Boolean)
            ),
        ].sort();

    }, [categoryProducts]);


    // =========================================================
    // AVAILABLE BRANDS
    // =========================================================

    const brands = useMemo(() => {

        return [
            ...new Set(
                categoryProducts
                    .map((product) => product.brand)
                    .filter(Boolean)
            ),
        ].sort();

    }, [categoryProducts]);


    // =========================================================
    // APPLY FILTERS
    // =========================================================

    const filteredProducts = useMemo(() => {

        return categoryProducts.filter((product) => {


            // =================================================
            // PRODUCT TITLE
            // =================================================

            if (
                selectedTitle.length > 0 &&
                !selectedTitle.includes(product.title)
            ) {
                return false;
            }


            // =================================================
            // BRAND
            // =================================================

            if (
                selectedBrand.length > 0 &&
                !selectedBrand.includes(product.brand)
            ) {
                return false;
            }


            // =================================================
            // PRICE
            //
            // Multiple price ranges:
            // If ANY selected range matches, product stays.
            // =================================================

            if (selectedPrice.length > 0) {

                const price = Number(product.price);

                const priceMatches = selectedPrice.some(
                    (range) => {

                        switch (range) {

                            case "under-50":
                                return price < 50;

                            case "50-100":
                                return price >= 50 && price <= 100;

                            case "100-500":
                                return price > 100 && price <= 500;

                            case "above-500":
                                return price > 500;

                            default:
                                return true;
                        }

                    }
                );


                if (!priceMatches) {
                    return false;
                }

            }


            // =================================================
            // RATING
            //
            // Example:
            // Selecting 4★ means products >= 4
            // =================================================

            if (selectedRating.length > 0) {

                const rating = Number(product.rating);

                const ratingMatches = selectedRating.some(
                    (minimumRating) =>
                        rating >= Number(minimumRating)
                );


                if (!ratingMatches) {
                    return false;
                }

            }


            // =================================================
            // DISCOUNT
            //
            // Example:
            // Selecting 20% means products >= 20%
            // =================================================

            if (selectedDiscount.length > 0) {

                const discount = Number(
                    product.discountPercentage
                );

                const discountMatches =
                    selectedDiscount.some(
                        (minimumDiscount) =>
                            discount >= Number(minimumDiscount)
                    );


                if (!discountMatches) {
                    return false;
                }

            }


            // =================================================
            // PRODUCT PASSED ALL FILTERS
            // =================================================

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


    // =========================================================
    // CLEAR ALL FILTERS
    // =========================================================

    const clearFilters = () => {

        setSelectedTitle([]);

        setSelectedBrand([]);

        setSelectedPrice([]);

        setSelectedRating([]);

        setSelectedDiscount([]);

    };


    // =========================================================
    // RETURN
    // =========================================================

    return {

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

    };
};


export default useProductFilters;