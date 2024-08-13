"use client";

import React, { useState, useEffect } from "react";

import Avatar1 from "../../../public/avatar-comment-1.png";
import Avatar2 from "../../../public/avatar-comment-2.png";
import Avatar3 from "../../../public/avatar-comment-3.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

import "swiper/css";
import CommentBox from "../home/comment-box";
import CommentContent from "../home/comment-box/CommentContent";

const comments = [
  {
    id: 1,
    text: "در سریع تری میتوانی زبانو رو یاد بگیرید و یادگیریش خیلی ساده تری ولی در هم حین تمام توانایی",
    name: "محمد جواد سجادی",
    description: "مدت زمان یادگیری: دو روز",
    title: "نظرم مثبته !",
    img: Avatar1,
  },
  {
    id: 2,
    text: "در سریع تری میتوانی زبانو رو یاد بگیرید و یادگیریش خیلی ساده تری ولی در حین تمام توانایی",
    name: "محمد جواد سجادی",
    description: "مدت زمان یادگیری: دو روز",
    title: "نظرم مثبته !",
    img: Avatar2,
  },
  {
    id: 3,
    text: "در سریع تری میتوانی زبانو رو یاد بگیرید و یادگیریش خیلی ساده تری ولی در هم حین تمام توانایی",
    name: "محمد جواد سجادی",
    description: "مدت زمان یادگیری: دو روز",
    title: "نظرم مثبته !",
    img: Avatar3,
  },
  {
    id: 4,
    text: "در سریع تری میتوانی زبانو رو یاد بگیرید و یادگیریش خیلی ساده تری ولی در هم حین تمام توانایی",
    name: "محمد جواد سجادی",
    description: "مدت زمان یادگیری: دو روز",
    title: "نظرم مثبته 2",
    img: Avatar1,
  },
  {
    id: 5,
    text: "در سریع تری میتوانی زبانو رو یاد بگیرید و یادگیریش خیلی ساده تری ولی در هم حین تمام توانایی",
    name: "محمد جواد سجادی",
    description: "مدت زمان یادگیری: دو روز",
    title: "نظرم مثبته 2",
    img: Avatar2,
  },
  {
    id: 6,
    text: "در سریع تری میتوانی زبانو رو یاد بگیرید و یادگیریش خیلی ساده تری ولی در هم حین تمام توانایی",
    name: "محمد جواد سجادی",
    description: "مدت زمان یادگیری: دو روز",
    title: "نظرم مثبته 2",
    img: Avatar3,
  },
];
const SliderTemplate = () => {
  const [perViewSlide, setPerViewSlide] = useState(1);

  useEffect(() => {
    const handleResizePreViewSlide = () => {
      if (window.innerWidth > 768) {
        setPerViewSlide(3);
      } else if (window.innerWidth > 640) {
        setPerViewSlide(2);
      } else {
        setPerViewSlide(1);
      }
    };

    handleResizePreViewSlide();
    window.addEventListener("resize", handleResizePreViewSlide);

    return () => {
      window.removeEventListener("resize", handleResizePreViewSlide);
    };
  }, []);

  return (
    <div className="w-full max-w-[1082px] mx-auto p-6 border-2 border-bg-section-purple rounded-3xl z-10">
      <Swiper
        spaceBetween={30}
        slidesPerView={perViewSlide}
        onSlideChange={(swiper) => console.log(swiper)}
        loop={true}
      >
        {comments.map((comment) => (
          <SwiperSlide key={comment.id}>
            <CommentBox>
              <CommentContent comment={comment} />
            </CommentBox>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderTemplate;
