"use client";
import React, { useEffect, useState } from "react";
import Snap from "../../../public/images/snap.png";
import Digikala from "../../../public/images/digikala.png";
import Asrez from "../../../public/images/asrez.png";
import Tapsi from "../../../public/images/tapsi.png";
import TapsiGarage from "../../../public/images/tapsigarage.png";
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
          <Image src={Snap} alt="Snap" className="dark:invert" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Digikala} alt="Digikala" className="dark:invert" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Asrez} alt="Asrez" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Tapsi} alt="Tapsi" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={TapsiGarage} alt="Tapsi Garage" className="dark:invert" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Snap} alt="Snap" className="dark:invert" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Digikala} alt="Digikala" className="dark:invert" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Asrez} alt="Asrez" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Tapsi} alt="Tapsi" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={TapsiGarage} alt="Tapsi Garage" className="dark:invert" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Marquee;
