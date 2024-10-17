import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; 
import { Navigation, Thumbs } from "swiper/modules";

const SliderComponent = ({ sliders }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [mainSwiper, setMainSwiper] = useState(null); // Thêm state cho mainSwiper

    return (
        <div className='p-4'>
            <div className="relative md:w-[600px] md:h-[270px] lg:w-[800px] lg:h-[350px] mb-3">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    modules={[Navigation, Thumbs]} // Thêm Navigation và Thumbs module vào đây
                    thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : null} // Chỉ truyền thumbs nếu thumbsSwiper có giá trị
                    onSwiper={setMainSwiper} // Cập nhật mainSwiper
                >
                    {sliders.length === 0 ? (
                        <SwiperSlide>
                            <div>No images available</div>
                        </SwiperSlide>
                    ) : (
                        sliders.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={image.url}
                                    alt={`slider-${index}`}
                                    className="w-full h-full object-cover"
                                    

                                />
                            </SwiperSlide>
                        ))
                    )}
                </Swiper>
            </div>
            <div className="md:w-[600px] md:h-[113px] lg:w-[800px] lg:h-[150px] mb-3">
                <Swiper
                    onSwiper={setThumbsSwiper} // Cập nhật thumbsSwiper
                    slidesPerView={3}
                    watchSlidesProgress
                    navigation
                    spaceBetween={10}
                    modules={[Navigation, Thumbs]} // Thêm Navigation và Thumbs module vào đây
                >
                    {sliders.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={image.url}
                                alt={`thumb-${index}`}
                                className="object-cover cursor-pointer"
                                onClick={() => mainSwiper.slideTo(index)} // Chuyển tới slide tương ứng khi click
                                onMouseDown={(e) => e.preventDefault()} // Ngăn chặn hành động mặc định

                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            
        </div>
    );
};

export default SliderComponent;
