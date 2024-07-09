'use client';

import Image from 'next/image';
import React, { useState } from 'react';

import Avatar from "../../../public/avatar.png";
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
        <div className="max-w-md mx-auto p-6 bg-bg-slider rounded-3xl z-10">
            <div className="p-4 relative z-20 flex flex-col items-center justify-center gap-y-6">
                <p className="mb-4 text-white text-base font-normal text-center">{comments[currentIndex].text}</p>
                <div className="w-full flex items-center justify-center flex-col gap-y-2">
                    <Image 
                        className="rounded-2xl w-16 h-16"
                        src={comments[currentIndex].img}
                        alt="profile"
                        width={150}
                        height={150}
                    />
                    <p className="text-white text-2xl font-medium">{comments[currentIndex].name}</p>
                    <p className="text-sm text-white">{comments[currentIndex].title}</p>
                </div>
                <button
                    onClick={prevSlide}
                    className="absolute w-16 h-16 rounded-3xl right-0 top-[70%] transform -translate-y-1/2 bg-bg-slider p-2 flex items-center justify-center"
                >
                    <Preview />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute w-16 h-16 left-0 top-[70%] transform -translate-y-1/2 bg-bg-slider rounded-3xl p-2 flex items-center justify-center"
                >
                    <Next />
                </button>
            </div>
            <div className="flex justify-center mt-4">
                {comments.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${
                            index === currentIndex ? 'bg-white w-8' : 'bg-[#FFB992]'
                        }`}
                        onClick={() => setCurrentIndex(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default SliderBestComment;
