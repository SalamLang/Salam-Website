import React from "react";
import { LoaderIcon } from "react-hot-toast";

export default function LoadingPage() {
  return (
    <div className="fixed w-full h-full bg-white/50 backdrop-blur-xl inset-0 z-[101] flex justify-center items-center overflow-hidden">
      <LoaderIcon />
    </div>
  );
}
