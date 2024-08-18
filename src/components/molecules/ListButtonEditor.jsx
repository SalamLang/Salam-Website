import React from "react";
import { Button } from "../common/Button";
import EyseIcon from "../../../public/Eyse.svg";
import PlayIcon from "../../../public/Play.svg";
import SettingIcon from "../../../public/setting.svg";
import ShareIcon from "../../../public/share.svg";

export default function ListButtonEditor() {
  return (
    <>
      <div className="max-md:hidden w-auto min-h-[600px] flex flex-col gap-8 justify-start items-start p-4">
        <Button
          intent="orange"
          size="large"
          className="!rounded-xl !bg-bg-button-orange !p-1 w-12 h-12 flex justify-center items-center !cursor-not-allowed"
        >
          <EyseIcon className="scale-90" />
        </Button>
        <Button
          intent="orange"
          size="large"
          className="!rounded-xl !bg-bg-button-orange !p-1 w-12 h-12 flex justify-center items-center"
        >
          <PlayIcon className="scale-75" />
        </Button>
        <Button
          intent="orange"
          size="large"
          className="!rounded-xl !bg-bg-button-orange !p-1 w-12 h-12 flex justify-center items-center"
        >
          <SettingIcon className="scale-90" />
        </Button>
        <Button
          intent="orange"
          size="large"
          className="!rounded-xl !bg-bg-button-orange !p-1 w-12 h-12 flex justify-center items-center"
        >
          <ShareIcon className="scale-90" />
        </Button>
      </div>
    </>
  );
}
