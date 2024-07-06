// app/Education/page.js
import ArrowDown from '@/components/atoms/ArrowDown';
import EducationDownload from '@/components/templates/EducationDownload';
import EducationHero from '@/components/templates/EducationHero';
import Faq from '@/components/templates/Faq';
import React from 'react';

const Education = () => {
  return (
    <div className="container flex items-center flex-col m-auto gap-y-20">
      <EducationHero />
      <ArrowDown variant="Screw" />
      <EducationDownload />
      <ArrowDown variant="Clear" />
      <Faq />
    </div>
  );
};

export default Education;