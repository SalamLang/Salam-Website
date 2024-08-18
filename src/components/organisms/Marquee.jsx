"use client";
import React from "react";
import Snap from "../../../public/Snap.png";
import Digikala from "../../../public/Digikala.png";
import Asrez from "../../../public/Asrez.png";
import Tapsi from "../../../public/Tapsi.png";
import TapsiGarage from "../../../public/TapsiGarage.png";
import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, FreeMode } from 'swiper/modules';


function Marquee() {
    return (<div className={"w-full overflow-hidden"}>
        <Swiper
            spaceBetween={30}
            slidesPerView={8}
            freeMode={true}
            loop={true}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
            }}
            speed={3000}
            modules={[Autoplay, FreeMode]}
            className={"slider"}
        >
            <SwiperSlide>
                <Image src={Snap} alt="Snap" className=""/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src={Digikala} alt="Digikala" className=""/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src={Asrez} alt="Asrez" className=""/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src={Tapsi} alt="Tapsi" className=""/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src={TapsiGarage} alt="Tapsi Garage" className=""/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src={Snap} alt="Snap" className=""/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src={Digikala} alt="Digikala" className=""/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src={Asrez} alt="Asrez" className=""/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src={Tapsi} alt="Tapsi" className=""/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src={TapsiGarage} alt="Tapsi Garage" className=""/>
            </SwiperSlide>
        </Swiper>
    </div>)
}

export default Marquee;
