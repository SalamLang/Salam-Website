"use client";
import React, { useContext } from "react";
import { Button } from "../common/Button";
import EyseIcon from "../../../public/Eyse.svg";
import PlayIcon from "../../../public/Play.svg";
import SettingIcon from "../../../public/setting.svg";
import ShareIcon from "../../../public/share.svg";
import { EditorModalsContext } from "@/utils/contexts/EditorModals";
import EyseMotion from "./EyseMotion";

export default function ListButtonEditor() {
  const { setIsOpenSettingModal, setIsOpenShareModal, setIsOpenBottonSheet } =
    useContext(EditorModalsContext);
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
          onClick={() => setIsOpenBottonSheet(true)}
        >
          <PlayIcon className="scale-75" />
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
    </>
  );
}
