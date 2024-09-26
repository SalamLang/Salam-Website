"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const Avatar = "/images/person.png";

const comments = [
  {
    text: "من این کارو دیدم و برام خیلی سواله که چطور یک همچین مغز متفکری پشت این پروژه‌ست. کار های این پروژه رو انجام میده تیمی که داره به اسم Asrez ولی چند تا طراح پشت اینکار بودن ؟",
    name: "ماری بلنکا",
    title: "موسس فیس بوک",
    img: Avatar,
    id: 1,
  },
  {
    text: "من این کارو دیدم و برام خیلی سواله که چطور یک همچین مغز متفکری پشت این پروژه‌ست. کار های این پروژه رو انجام میده تیمی که داره به اسم Asrez ولی چند تا طراح پشت اینکار بودن ؟",
    name: "جان دو",
    title: "مدیر عامل گوگل",
    img: Avatar,
    id: 2,
  },
  {
    text: "من این کارو دیدم و برام خیلی سواله که چطور یک همچین مغز متفکری پشت این پروژه‌ست. کار های این پروژه رو انجام میده تیمی که داره به اسم Asrez ولی چند تا طراح پشت اینکار بودن ؟",
    name: "جین اسمیت",
    title: "مدیر مایکروسافت",
    img: Avatar,
    id: 3,
  },
];

function SliderBestComment() {
  return (
    <div className={"overflow-hidden w-full"}>
      <Swiper
        slidesPerView={1}
        className={"!max-w-[672px] w-full comment_slider"}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }} // پیکربندی تنظیمات autoplay
        spaceBetween={30}
        modules={[Pagination, Navigation, Autoplay]}
      >
        {comments.map((item) => (
          <SwiperSlide
            key={item.id}
            className={
              "w-full min-h-[300px] py-5 px-16 rounded-[23px] bg-[#F6FDA6]"
            }
          >
            <p className={"font-Estedad-Medium text-black leading-10"}>
              {item.text}
            </p>
            <div className={"flex flex-col items-center mb-5"}>
              <Image
                src={item.img}
                alt={item.title}
                width={118}
                height={118}
                className={"mt-10"}
              />
              <h3 className={"font-Estedad-Bold text-[20px] mt-4"}>
                ماری بلنکا
              </h3>
              <p className={"text-[#577C07] font-Estedad-Regular"}>
                موسس فیس بوک
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SliderBestComment;
