"use client";

import React, { useEffect, useState } from "react";
import Button from "@/components/atoms/Button";
import Gif from "@/components/atoms/Gif";
import CarectersDownload from "@/components/molecules/CarectersDownload";

import DownloadClud from "../../../public/svgs/download.svg";
import TitleDescription from "@/components/atoms/TitleDescription";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import useOS from "@/hooks/useOS";
import ProblemToDownloadModal from "./ProblemToDownloadModal";

export default function DownloadItem() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const clientOS = useOS();
  const os = searchParams.get("os");
  const [isOpenModal, setIsOpenModal] = useState(false);

  const download = (os) => {
    switch (os) {
      case "android":
        window.open(
          "https://dl2.soft98.ir/soft/t/TweakNow.WinSecret.Plus.v5.6.6.rar?1726403582"
        );
        break;
      case "ios":
        window.open(
          "https://dl2.soft98.ir/soft/t/TweakNow.WinSecret.Plus.v5.6.6.rar?1726403582"
        );
        break;
      case "mac":
        window.open(
          "https://dl2.soft98.ir/soft/t/TweakNow.WinSecret.Plus.v5.6.6.rar?1726403582"
        );
        break;
      case "windows":
        window.open(
          "https://dl2.soft98.ir/soft/t/TweakNow.WinSecret.Plus.v5.6.6.rar?1726403582"
        );
        break;
      case "linux":
        window.open(
          "https://dl2.soft98.ir/soft/t/TweakNow.WinSecret.Plus.v5.6.6.rar?1726403582"
        );
        break;
      default:
        toast.error("درخواست نامعتبر");
        break;
    }
  };

  useEffect(() => {
    if (os) {
      download(os);
    } else if (clientOS) {
      if (clientOS === "unknown os") {
        toast.error("سیستم عامل شما پشتیبانی نمی شود");
        router.push("/");
      } else {
        download(clientOS);
      }
    }
  }, [os, clientOS, router]);

  return (
    <>
      <ProblemToDownloadModal isOpen={isOpenModal} setIsOpen={setIsOpenModal} />
      <div className="relative w-full sm:w-fit flex items-center justify-center">
        <Gif variant="GifDownload"></Gif>
        <CarectersDownload />
      </div>
      <TitleDescription
        title="مرسی که ..."
        className={"!z-0"}
        headerClass={"dark:!text-white transition-colors"}
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
          onClick={() => setIsOpenModal(true)}
          className="text-nowrap"
        />
      </div>
    </>
  );
}
