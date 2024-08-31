import ListButtonEditor from "./ListButtonEditor";
import BoxEditor from "./BoxEditor";
import { useContext } from "react";
import { EditorModalsProvider } from "@/utils/contexts/EditorModals";
import SettingModal from "./SettingModal";
import ShareModal from "./ShareModal";
import BottonSheet from "../common/BottonSheet";

export default function Editor() {
  return (
    <EditorModalsProvider>
      <SettingModal />
      <ShareModal />
      <BottonSheet />
      <div
        className={`w-full md:[90%] lg:max-w-[70%] h-full py-4 px-6 flex max-md:flex-col justify-between items-center`}
      >
        <BoxEditor />
        <ListButtonEditor />
      </div>
    </EditorModalsProvider>
  );
}
