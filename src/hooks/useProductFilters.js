import { useMemo, useState } from "react";

const useProductFilters = (categoryProducts = []) => {

    const [selectedTitle, setSelectedTitle] = useState("");
    const [selectedBrand, setSelectedBrand] = useState("");
    const [selectedPrice, setSelectedPrice] = useState("");
    const [selectedRating, setSelectedRating] = useState("");
    const [selectedDiscount, setSelectedDiscount] = useState("");


    // Available product titles

    const titles = useMemo(() => {

        return [
            ...new Set(
                categoryProducts
                    .map((product) => product.title)
                    .filter(Boolean)
            ),
        ].sort();

    }, [categoryProducts]);


    // Available brands

    const brands = useMemo(() => {

        return [
            ...new Set(
                categoryProducts
                    .map((product) => product.brand)
                    .filter(Boolean)
            ),
        ].sort();

    }, [categoryProducts]);


    // Apply filters

    const filteredProducts = useMemo(() => {

        return categoryProducts.filter((product) => {

            // Product title

            if (
                selectedTitle &&
                product.title !== selectedTitle
            ) {
                return false;
            }


            // Brand

            if (
                selectedBrand &&
                product.brand !== selectedBrand
            ) {
                return false;
            }


            // Price

            if (selectedPrice) {

                const price = product.price;

                if (
                    selectedPrice === "under-50" &&
                    price >= 50
                ) {
                    return false;
                }

                if (
                    selectedPrice === "50-100" &&
                    (price < 50 || price > 100)
                ) {
                    return false;
                }

                if (
                    selectedPrice === "100-500" &&
                    (price < 100 || price > 500)
                ) {
                    return false;
                }

                if (
                    selectedPrice === "above-500" &&
                    price <= 500
                ) {
                    return false;
                }
            }


            // Rating

            if (
                selectedRating &&
                product.rating < Number(selectedRating)
            ) {
                return false;
            }


            // Discount

            if (
                selectedDiscount &&
                product.discountPercentage <
                Number(selectedDiscount)
            ) {
                return false;
            }


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


    // Clear filters

    const clearFilters = () => {

        setSelectedTitle("");
        setSelectedBrand("");
        setSelectedPrice("");
        setSelectedRating("");
        setSelectedDiscount("");

    };


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