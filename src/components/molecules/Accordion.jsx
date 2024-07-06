'use client';

import React from "react";
import Image from "next/image";

const Accordion = ({ title, content, index, number, active, handleToggle }) => {
  return (
    <div className='m-0 p-0 w-full max-w-[929px]'>
      <div className='flex flex-col'>
        <div className='flex justify-between items-center gap-3 my-2 cursor-pointer'>
          <div className="flex items-center justify-start gap-6">
            <span className="bg-bg-main w-[60px] h-[60px] rounded-2xl text-white text-3xl flex items-center justify-center">
                {number}
            </span>
            <h4
                className="text-title text-2xl"
                onClick={handleToggle}>
                {title}
            </h4>
          </div>

          <Image
            src="/ArrowLeftFaq.svg"
            width={10}
            height={6}
            alt='arrow-icon'
            onClick={handleToggle}
            className={
              active
                ? "cursor-pointer -rotate-90"
                : "cursor-pointer"
            }
          />
        </div>
        <hr
          className={
            active
              ? "border-border-grey2 border-b-2 relative top-[50px] opacity-20"
              : "border-border-grey2 border-b-2 relative top-[8px]"
          }
        />
      </div>

      <p
        onClick={handleToggle}
        className={
          active
            ? "text-description text-[17px] w-5/6 text-start p-0 m-0 cursor-pointer pr-[85px]"
            : "invisible max-h-0"
        }>
        {content}
      </p>
    </div>
  );
};

export default Accordion;
