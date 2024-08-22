import Button from "@/components/atoms/Button";
import Gif from "@/components/atoms/Gif";
import CarectersDownload from "@/components/molecules/CarectersDownload";

import DownloadClud from "../../../../public/download.svg";
import TitleDescription from "@/components/atoms/TitleDescription";

function Download() {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="relative w-full sm:w-fit flex items-center justify-center">
        <Gif variant="GifDownload"></Gif>
        <CarectersDownload />
      </div>
      <TitleDescription
        title="مرسی که ..."
        description="نرم افزار مارو دانلود کردید و تشکر میکنیم از این کارتون !"
      />
      <div className="flex items-center justify-center gap-6">
        <Button
          text="مشاهده ی آموزش"
          variant="buttonOrange2"
          type="link"
          href="/"
        />
        <Button
          text="مشکل تو دانلود"
          variant="buttonOrange"
          icon={
            <span>
              <DownloadClud />
            </span>
          }
          type="link"
          href="/"
        />
      </div>
    </div>
  );
}

export default Download;
