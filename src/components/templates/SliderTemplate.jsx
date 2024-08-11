"use client";

import React, { useState } from 'react';
import CommentSlide from '../organisms/CommentSlide';

import Avatar1 from '../../../public/avatar-comment-1.png';
import Avatar2 from '../../../public/avatar-comment-2.png';
import Avatar3 from '../../../public/avatar-comment-3.png';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
//

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const comments = [
    {
        text: 'در سریع تری میتوانی زبانو رو یاد بگیرید و یادگیریش خیلی ساده تری ولی در هم حین تمام توانایی',
        name: 'محمد جواد سجادی',
        description: 'مدت زمان یادگیری: دو روزعه',
        title: 'نظرم مثبته !',
        img: Avatar1,
    },
    {
        text: 'در سریع تری میتوانی زبانو رو یاد بگیرید و یادگیریش خیلی ساده تری ولی در هم حین تمام توانایی',
        name: 'محمد جواد سجادی',
        description: 'مدت زمان یادگیری: دو روزعه',
        title: 'نظرم مثبته !',
        img: Avatar2,
    },
    {
        text: 'در سریع تری میتوانی زبانو رو یاد بگیرید و یادگیریش خیلی ساده تری ولی در هم حین تمام توانایی',
        name: 'محمد جواد سجادی',
        description: 'مدت زمان یادگیری: دو روزعه',
        title: 'نظرم مثبته !',
        img: Avatar3,
    },
    {
        text: 'در سریع تری میتوانی زبانو رو یاد بگیرید و یادگیریش خیلی ساده تری ولی در هم حین تمام توانایی',
        name: 'محمد جواد سجادی',
        description: 'مدت زمان یادگیری: دو روزعه',
        title: 'نظرم مثبته 2',
        img: Avatar1,
    },
    {
        text: 'در سریع تری میتوانی زبانو رو یاد بگیرید و یادگیریش خیلی ساده تری ولی در هم حین تمام توانایی',
        name: 'محمد جواد سجادی',
        description: 'مدت زمان یادگیری: دو روزعه',
        title: 'نظرم مثبته 2',
        img: Avatar2,
    },
    {
        text: 'در سریع تری میتوانی زبانو رو یاد بگیرید و یادگیریش خیلی ساده تری ولی در هم حین تمام توانایی',
        name: 'محمد جواد سجادی',
        description: 'مدت زمان یادگیری: دو روزعه',
        title: 'نظرم مثبته 2',
        img: Avatar3,
    },
];

const SliderTemplate = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const groups = [];
    for (let i = 0; i < comments.length; i += 3) {
        groups.push(comments.slice(i, i + 3));
    }

    return (
        <div className="w-full max-w-[1082px] mx-auto p-6 border-2 border-bg-section-purple rounded-3xl z-10">
            {/*<div className="p-4 relative z-20 flex flex-col items-center justify-center gap-y-6">*/}
            {/*    {groups.map((group, groupIndex) => (*/}
            {/*        <div*/}
            {/*            key={groupIndex}*/}
            {/*            className={`${groupIndex === currentIndex ? 'block' : 'hidden'}`}*/}
            {/*        >*/}
            {/*            <CommentSlide comments={group} />*/}
            {/*        </div>*/}
            {/*    ))}*/}
            {/*</div>*/}
            {/*<div className="flex justify-center mt-4">*/}
            {/*    {groups.map((_, index) => (*/}
            {/*        <div*/}
            {/*            key={index}*/}
            {/*            className={`w-24 h-3 mx-1 rounded-full cursor-pointer ${*/}
            {/*                index === currentIndex ? 'bg-[#8470FFEB] w-24' : 'bg-[#8DB5FF] w-8'*/}
            {/*            }`}*/}
            {/*            onClick={() => setCurrentIndex(index)}*/}
            {/*        ></div>*/}
            {/*    ))}*/}
            {/*</div>*/}
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                ...
            </Swiper>

        </div>
    );
};

export default SliderTemplate;
