import React from "react";
import TitleDescription from "../atoms/TitleDescription";
import BoxDownload from "../molecules/BoxDownload";
import { Button } from "../common/Button";

function EducationDownload() {
  return (
    <div className="flex items-center justify-center flex-col gap-5" id="download-section">
      <TitleDescription title="اولین قدم اینه که میری برای دانلود نرم افزار" />
      <div className={"-translate-y-1/3"}>
        <Button
          intent="orange"
          rounded="full"
          size="medium"
          className="!bg-bg-main !px-10 !py-1"
          link={`download`} // This is a link to the download page
        >
          دانلود
        </Button>
      </div>
      <div className="w-full flex items-center justify-evenly flex-wrap gap-8">
        <BoxDownload
          variant="Linux"
          imgClass="scale-75"
          href={`download?os=linux`}
        />
        <BoxDownload
          variant="Windows"
          imgClass="scale-75"
          href={`download?os=windows`}
        />
        <BoxDownload
          variant="Mac"
          imgClass="scale-75"
          href={`download?os=mac`}
        />
        <BoxDownload
          variant="Android"
          imgClass="scale-75"
          href={`download?os=android`}
        />
        <BoxDownload
          variant="Pwa"
          imgClass="scale-75"
          href={`download?os=pwa`}
        />
      </div>
    </div>
  );
}

export default EducationDownload;
