import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import React from "react";
interface IProps  {
    elements : React.JSX.Element[]
}
function SliderSwiper({elements} : IProps) {
    return (
        <Swiper
            pagination={{
                dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper h-[300px] md:h-[400px] 2xl:!h-[600px]"
        >
            {elements?.map((item , index) => (
                <SwiperSlide key={index} className="md:bg-hero-section1 !flex flex-wrap justify-center items-center">
                    {item}
                </SwiperSlide>
            ))}
        </Swiper>    );
}

export default SliderSwiper;