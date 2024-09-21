import ListButtonEditor from "./ListButtonEditor";
import BoxEditor from "./BoxEditor";
import { EditorModalsProvider } from "@/utils/contexts/EditorModals";
import SettingModal from "./SettingModal";
import ShareModal from "./ShareModal";
import BottonSheet from "../common/BottonSheet";
import React from "react";

export default function Editor() {
  return (
    <EditorModalsProvider>
      <SettingModal />
      <ShareModal />
      <BottonSheet />
      <div
        className={`absolute w-full h-full min-h-full md:max-w-[90%] lg:max-w-[70%] py-4 px-6 max-md:!px-4 flex-grow flex max-md:flex-col justify-between items-center`}
      >
        <BoxEditor />
        <ListButtonEditor />
      </div>
    </EditorModalsProvider>
  );
}
