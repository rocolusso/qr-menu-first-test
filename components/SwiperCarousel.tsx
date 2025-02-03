import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Pagination } from 'swiper/modules';
import Image from "next/image";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {useThemeStore} from "@/lib/themeStore";



const SwiperCarousel = ({slides}:{slides:{src:string}[]}) => {
    const { theme } = useThemeStore();
    return (
        <>
            <Swiper
                pagination={true}
                // pagination={{
                //     dynamicBullets: true,
                // }}
                navigation={true}
                modules={[Navigation,Pagination]}
                className="mySwiper"
            >
                {
                    slides.map((slide,index)=>(
                        <div  key={Math.random()+ index}>
                            <SwiperSlide>
                                <div>
                                    <Image
                                        className={theme === 'light' ? 'rounded-lg': ""}
                                        src={slide.src}
                                        alt={''}
                                        width={600}
                                        height={600}
                                        priority
                                    />
                                </div>
                            </SwiperSlide>
                        </div>
                    ))
                }
            </Swiper>
        </>
    );
};

export default SwiperCarousel;