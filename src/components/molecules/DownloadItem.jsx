"use client";

import React, { useEffect } from "react";
import Button from "@/components/atoms/Button";
import Gif from "@/components/atoms/Gif";
import CarectersDownload from "@/components/molecules/CarectersDownload";

import DownloadClud from "../../../public/download.svg";
import TitleDescription from "@/components/atoms/TitleDescription";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

export default function DownloadItem() {
  const searchParams = useSearchParams();

  const os = searchParams.get("os");

  useEffect(() => {
    if (os) {
      toast.success(`درخواست دانلود برای : ${os}`, {
        position: "bottom-center",
        style: { textWrap: "nowrap" },
      });
    }
  }, [os]);

  return (
    <>
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
          href="/education"
          className="text-nowrap"
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
          className="text-nowrap"
        />
      </div>
    </>
  );
}
