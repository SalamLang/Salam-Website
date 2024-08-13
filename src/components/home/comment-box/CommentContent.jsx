import React from "react";
import Image from "next/image";
export default function CommentContent({ comment }) {
  return (
    <>
      <div className="w-full h-full flex flex-col gap-3 items-center justify-between">
              <h1 className="text-xl text-start w-full font-Estedad-SemiBold">
                  {comment.title}
              </h1>
              <p className="text-sm text-start w-full font-Estedad-Light !leading-8">
                {comment.text}
              </p>
              <div className="w-full flex justify-between items-center gap-2">
                <div className="w-auto h-full flex flex-col text-right gap-1">
                  <h1 className="text-base font-Estedad-Regular">
                      {comment.name}
                  </h1>
                  <p className="text-[12px] font-Estedad-Regular">
                      {comment.description}
                  </p>
                </div>
                <div className="w-auto h-full flex justify-center items-center"></div>
                <Image src={comment.img} alt="" />
              </div>
            </div>
    </>
  );
}
