"use client";

import React, { useEffect, useState } from "react";
import TitleDescription from "../atoms/TitleDescription";
import BoxDownload from "../molecules/BoxDownload";
import { Button } from "../common/Button";

function EducationDownload() {
  const [clientOS, setClientOS] = useState("");

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    let os = "desktop"; // default value

    if (/android/i.test(userAgent)) {
      os = "Android";
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      os = "iOS";
    } else if (/Mac/i.test(userAgent)) {
      os = "Mac";
    } else if (/Win/i.test(userAgent)) {
      os = "Windows";
    } else if (/Linux/i.test(userAgent)) {
      os = "Linux";
    }

    setClientOS(os);
  }, []);
  return (
    <div className="flex items-center justify-center flex-col gap-5">
      <TitleDescription title="اولین قدم اینه که میری برای دانلود نرم افزار" />
      <div className={"-translate-y-1/3"}>
        <Button
          intent="orange"
          rounded="full"
          size="medium"
          className="!bg-bg-main !px-10 !py-1"
          link={`download?os=${clientOS}`} // This is a link to the download page
        >
          دانلود
        </Button>
      </div>
      <div className="w-full flex items-center justify-evenly flex-wrap gap-8">
        <BoxDownload
          variant="Linux"
          imgClass="scale-75"
          href={`download?os=Linux`}
        />
        <BoxDownload
          variant="Windows"
          imgClass="scale-75"
          href={`download?os=Windows`}
        />
        <BoxDownload
          variant="Mac"
          imgClass="scale-75"
          href={`download?os=Mac`}
        />
        <BoxDownload
          variant="Android"
          imgClass="scale-75"
          href={`download?os=Android`}
        />
        <BoxDownload
          variant="Pwa"
          imgClass="scale-75"
          href={`download?os=Pwa`}
        />
      </div>
    </div>
  );
}

export default EducationDownload;
