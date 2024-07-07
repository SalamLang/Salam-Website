// app/Education/page.js
import ArrowDown from '@/components/atoms/ArrowDown';
import BoxStartLanguge from '@/components/molecules/BoxStartLanguge';
import CodeExample from '@/components/templates/CodeExample';
import EducationDownload from '@/components/templates/EducationDownload';
import EducationHero from '@/components/templates/EducationHero';
import Faq from '@/components/templates/Faq';
import SectionInstall from '@/components/templates/SectionInstall';
import GoToLearn from '@/components/templates/goToLearn';
import React from 'react';

const Education = () => {
  return (
    <div className="container flex items-center flex-col m-auto gap-y-20">
      <EducationHero />
      <ArrowDown variant="Screw" />
      <EducationDownload />
      <ArrowDown variant="Clear" />
      <Faq />
      <GoToLearn />
      <ArrowDown variant="Screw" />
      <SectionInstall />
      <CodeExample />
      <BoxStartLanguge />
    </div>
  );
};

export default Education;