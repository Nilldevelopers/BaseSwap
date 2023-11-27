import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import React from "react";
interface IProps  {
    elements : React.JSX.Element[] ,
    event ?: () => void,
    htmlFor ?: string ,
    textBtn : string
}
function SliderSwiper({elements , event , htmlFor , textBtn} : IProps) {
    return (
        <Swiper
            pagination={{
                dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper h-[300px] md:h-[400px] 2xl:!h-[600px]"
        >
            {elements?.map((item , index) => (
                <SwiperSlide key={index} className="md:bg-hero-section1 !flex flex-wrap justify-center  items-center">
                    {item}
                    <div className="w-full mb-2 md:m-0  text-center">
                        <label onClick={event} htmlFor={htmlFor} className="text-[15px] cursor-pointer underline z-10 p-1 bg-transparent">
                            {textBtn}
                        </label>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>    );
}

export default SliderSwiper;