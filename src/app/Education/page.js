// app/Education/page.js
import ArrowDown from '@/components/atoms/ArrowDown';
import EducationDownload from '@/components/templates/EducationDownload';
import EducationHero from '@/components/templates/EducationHero';
import React from 'react';

const Education = () => {
  return (
    <div className="container flex items-center flex-col m-auto gap-y-12">
      <EducationHero />
      <ArrowDown variant="Screw" />
      <EducationDownload />
    </div>
  );
};

export default Education;
