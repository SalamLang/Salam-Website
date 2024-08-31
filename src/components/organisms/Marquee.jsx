"use client";
import React, { useEffect, useState } from "react";
import Snap from "../../../public/snap.png";
import Digikala from "../../../public/digikala.png";
import Asrez from "../../../public/asrez.png";
import Tapsi from "../../../public/tapsi.png";
import TapsiGarage from "../../../public/tapsigarage.png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode } from "swiper/modules";

function Marquee() {
  const [perViewSlide, setPerViewSlide] = useState(8);

  useEffect(() => {
    const handleResizePreViewSlide = () => {
      if (window.innerWidth > 768) {
        setPerViewSlide(8);
      } else if (window.innerWidth > 640) {
        setPerViewSlide(6);
      } else {
        setPerViewSlide(5);
      }
    };

    handleResizePreViewSlide();
    window.addEventListener("resize", handleResizePreViewSlide);

    return () => {
      window.removeEventListener("resize", handleResizePreViewSlide);
    };
  }, []);

  return (
    <div className={"w-full overflow-hidden"}>
      <Swiper
        spaceBetween={30}
        slidesPerView={perViewSlide}
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
          <Image src={Snap} alt="Snap" className="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Digikala} alt="Digikala" className="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Asrez} alt="Asrez" className="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Tapsi} alt="Tapsi" className="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={TapsiGarage} alt="Tapsi Garage" className="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Snap} alt="Snap" className="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Digikala} alt="Digikala" className="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Asrez} alt="Asrez" className="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Tapsi} alt="Tapsi" className="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={TapsiGarage} alt="Tapsi Garage" className="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Marquee;
