'use client';

import Image from 'next/image';
import React, { useState } from 'react';

import Avatar from "../../../public/avatar-comment-2.png";
import Next from "../../../public/next.svg";
import Preview from "../../../public/preview.svg";

const comments = [
    {
        text: 'من این کارو دیدم و برام خیلی سواله که چطور یک همچین مغز متفکری پشت این پروژه‌ست. کار های این پروژه رو انجام میده تیمی که داره به اسم Asrez ولی چند تا طراح پشت اینکار بودن ؟',
        name: 'ماری بلنکا',
        title: 'موسس فیس بوک',
        img: Avatar,
    },
    {
        text: 'من این کارو دیدم و برام خیلی سواله که چطور یک همچین مغز متفکری پشت این پروژه‌ست. کار های این پروژه رو انجام میده تیمی که داره به اسم Asrez ولی چند تا طراح پشت اینکار بودن ؟',
        name: 'جان دو',
        title: 'مدیر عامل گوگل',
        img: Avatar,
    },
    {
        text: 'من این کارو دیدم و برام خیلی سواله که چطور یک همچین مغز متفکری پشت این پروژه‌ست. کار های این پروژه رو انجام میده تیمی که داره به اسم Asrez ولی چند تا طراح پشت اینکار بودن ؟',
        name: 'جین اسمیت',
        title: 'مدیر مایکروسافت',
        img: Avatar,
    },
];

function SliderBestComment() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % comments.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + comments.length) % comments.length);
    };

    return (
        <div className="max-w-[672px] p-6 rounded-xl z-10 bg-[#F6FDA6]">
            <div className="p-4 relative z-20 flex flex-col items-center justify-center gap-y-6">
                <p className="mb-4 text-black  text-base font-Estedad-Light text-center">{comments[currentIndex].text}</p>
                <div className="w-full flex items-center justify-center flex-col gap-y-2">
                    <Image
                        className="rounded-2xl w-16 h-16"
                        src={comments[currentIndex].img}
                        alt="profile"
                        width={150}
                        height={150}
                    />
                    <p className="text-black text-2xl font-Estedad-Light">{comments[currentIndex].name}</p>
                    <p className="text-sm text-black font-Estedad-ExtraLight">{comments[currentIndex].title}</p>
                </div>
                <button
                    onClick={prevSlide}
                    className="absolute w-16 h-16 rounded-3xl right-0 top-[70%] transform -translate-y-1/2 bg-bg-gray hover:bg-[#0303037F] transition p-2 flex items-center justify-center"
                >
                    <Preview />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute w-16 h-16 left-0 top-[70%] transform -translate-y-1/2 bg-bg-gray hover:bg-[#0303037F] transition rounded-3xl p-2 flex items-center justify-center"
                >
                    <Next />
                </button>
            </div>
            <div className="flex justify-center mt-4">
                {comments.map((_, index) => (
                    <div
                        key={index}
                        className={`w-24 h-3 mx-2 rounded-full cursor-pointer ${
                            index === currentIndex ? 'bg-bg-circel-green w-24' : 'bg-[#92C73BD6] w-8'
                        }`}
                        onClick={() => setCurrentIndex(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default SliderBestComment;
