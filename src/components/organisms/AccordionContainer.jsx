'use client';

import React, { useState } from "react";
import Accordion from "../molecules/Accordion";

const AccordionContainer = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
        number: "۱",
        title: "اصلا چجوری باید یاد بگیرم ؟",
        content: "برای شما دوست عزیز یک صفحه خاض تهیه شده که تمامی مراحل که شما میتوانید از این زبان استفاده شده آموزش داده بشه شما میتوانید کاملا رایگان از این آموزش استفاده کنید"
    },
    {
        number: "۲",
        title: "چرا انقدر قشنگه وبتون ؟",
        content: "برای شما دوست عزیز یک صفحه خاض تهیه شده که تمامی مراحل که شما میتوانید از این زبان استفاده شده آموزش داده بشه شما میتوانید کاملا رایگان از این آموزش استفاده کنید"
    },
    {
        number: "۳",
        title: "آموزش هاتون پولیه ؟",
        content: "برای شما دوست عزیز یک صفحه خاض تهیه شده که تمامی مراحل که شما میتوانید از این زبان استفاده شده آموزش داده بشه شما میتوانید کاملا رایگان از این آموزش استفاده کنید"
    },
  ];

  return (
    <div className="flex items-center justify-center flex-col gap-y-7">
      {accordionData.map((item, index) => (
        <Accordion
          key={index}
          number={item.number}
          title={item.title}
          content={item.content}
          index={index}
          active={activeIndex === index}
          handleToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default AccordionContainer;
