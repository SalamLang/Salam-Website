"use client";

import React, { useState } from 'react';
import CommentSlide from '../organisms/CommentSlide';

import Avatar1 from '../../../public/avatar-comment-1.png';
import Avatar2 from '../../../public/avatar-comment-2.png';
import Avatar3 from '../../../public/avatar-comment-3.png';

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
        <div className="w-full max-w-[1082px] mx-auto p-6 border-2 border-red-600 rounded-3xl z-10">
            <div className="p-4 relative z-20 flex flex-col items-center justify-center gap-y-6">
                {groups.map((group, groupIndex) => (
                    <div
                        key={groupIndex}
                        className={`${groupIndex === currentIndex ? 'block' : 'hidden'}`}
                    >
                        <CommentSlide comments={group} />
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-4">
                {groups.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${
                            index === currentIndex ? 'bg-bg-main w-8' : 'bg-[#FFB992]'
                        }`}
                        onClick={() => setCurrentIndex(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default SliderTemplate;