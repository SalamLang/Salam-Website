"use client";
import React, { useContext, useState } from "react";
import { Button } from "../common/Button";
import PlayIcon from "../../../public/svgs/play.svg";
import SettingIcon from "../../../public/svgs/setting.svg";
import ShareIcon from "../../../public/svgs/share.svg";
import { EditorModalsContext } from "@/utils/contexts/EditorModals";
import EyseMotion from "./EyseMotion";
import { LoaderIcon } from "react-hot-toast";
import RunCode from "./RunCode";

export default function ListButtonEditor() {
  const {
    setIsOpenSettingModal,
    setIsOpenShareModal,
    setInitialSnap,
    setIsOpenBottonSheet,
  } = useContext(EditorModalsContext);
  const [disabled, setDisabled] = useState(false);
  const handleRunCode = () => {
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
      setInitialSnap(0);
      setIsOpenBottonSheet(true);
    }, 1000);
  };
  return (
    <>
      <div className="max-md:hidden w-auto min-h-[600px] flex flex-col gap-8 justify-start items-start p-4">
        <Button
          intent="orange"
          size="large"
          className="!rounded-xl !bg-bg-button-orange !p-1 w-12 h-12 flex justify-center items-center !cursor-not-allowed"
        >
          <EyseMotion className="scale-90" />
        </Button>
        <Button
          intent="orange"
          size="large"
          className="!rounded-xl !bg-bg-button-orange !p-1 w-12 h-12 flex justify-center items-center"
          onClick={handleRunCode}
          disabled={disabled}
        >
          {disabled ? (
            <LoaderIcon className="!w-4 !h-4" />
          ) : (
            <PlayIcon className="scale-75" />
          )}
        </Button>
        <Button
          intent="orange"
          size="large"
          className="!rounded-xl !bg-bg-button-orange !p-1 w-12 h-12 flex justify-center items-center"
          onClick={() => setIsOpenSettingModal(true)}
        >
          <SettingIcon className="scale-90" />
        </Button>
        <Button
          intent="orange"
          size="large"
          className="!rounded-xl !bg-bg-button-orange !p-1 w-12 h-12 flex justify-center items-center"
          onClick={() => setIsOpenShareModal(true)}
        >
          <ShareIcon className="scale-90" />
        </Button>
      </div>
      <div className="md:hidden w-full flex gap-3 justify-end items-center p-2">
        <Button
          intent="orange"
          size="large"
          className="!rounded-xl !bg-bg-button-orange !p-1 w-14 h-14 flex justify-center items-center"
          onClick={handleRunCode}
          disabled={disabled}
        >
          {disabled ? (
            <LoaderIcon className="!w-4 !h-4" />
          ) : (
            <PlayIcon className="scale-75" />
          )}
        </Button>
        <Button
          intent="orange"
          size="large"
          className="!rounded-xl !bg-bg-button-orange !p-1 w-14 h-14 flex justify-center items-center"
          onClick={() => setIsOpenShareModal(true)}
        >
          <ShareIcon />
        </Button>
      </div>
    </>
  );
}
