import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import {
    Navigation,
    Pagination,
    Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import "./Hero.css";

const Hero = ({ products = [] }) => {
    const navigate = useNavigate();


    //PRODUCTS ITEMS LIST START AND END 

    const productStrtPoint= 0;
    const productEndPoint= 5;
    const heroProducts = products.slice(productStrtPoint, productEndPoint);

    const handleBannerClick = (product) => {
        navigate(
            `/products?category=${encodeURIComponent(product.category)}`
        );
    };

    if (!heroProducts.length) {
        return null;
    }

    return (
        <section className="hero">

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                loop={true}
                className="hero-swiper"
            >

                {heroProducts.map((product) => (

                    <SwiperSlide key={product.id}>

                        <article
                            className="hero-slide"
                            style={{
                                backgroundImage: `url("${product.thumbnail}")`,
                            }}
                            onClick={() => handleBannerClick(product)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(event) => {
                                if (
                                    event.key === "Enter" ||
                                    event.key === " "
                                ) {
                                    handleBannerClick(product);
                                }
                            }}
                        >

                            <div className="hero-overlay"></div>

                            <div className="container">

                                <div className="hero-slide-content">

                                    <div className="hero-slide-text">

                                        <span className="hero-eyebrow">
                                            {product.category}
                                        </span>

                                        <h1 className="hero-title">
                                            {product.title}
                                        </h1>

                                        <p className="hero-description">
                                            {product.description}
                                          
                                        </p>
                                               <span className="hero-offer">
                                            Up to{" "}
                                            {Math.round(
                                                product.discountPercentage
                                            )}
                                            % OFF
                                        </span>
                                       

                                    </div>

                                </div>

                            </div>

                        </article>

                    </SwiperSlide>

                ))}

            </Swiper>

        </section>
    );
};

export default Hero;