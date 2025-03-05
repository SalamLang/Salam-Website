import React from "react";
import CircelsBoxCode from "../atoms/CircelsBoxCode";
import TextExampleCole from "../atoms/TextExampleCole";
import ButtonCodeBox from "../atoms/ButtonCodeBox";

import Play from "../../../public/svgs/play.svg";
import Link from "next/link";
import { getRoute } from "@/utils/constants/getRoutes";

function CodeExample() {
  return (
    <div className={"w-full"}>
      <div className="max-w-[95%] sm:container mx-auto">
        <div
          className={
            "h-auto max-w-[900px] bg-bg-box2 dark:bg-gray-800 dark:shadow-2xl dark:shadow-gray-800/20 transition-colors dark:text-gray-300 rounded-2xl p-8 flex items-start justify-between mx-auto"
          }
        >
          <div className="flex flex-col items-start justify-start gap-y-4">
            <CircelsBoxCode />
            <TextExampleCole />
          </div>
          <a
            href={process.env.NEXT_PUBLIC_EDITOR_URL}
            className="flex flex-col items-end justify-end gap-y-10"
          >
            <ButtonCodeBox
              icon={
                <span>
                  <Play className="max-md:scale-75" />
                </span>
              }
            />
            <ButtonCodeBox
              icon={
                <span>
                  <Play className="max-md:scale-75" />
                </span>
              }
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default CodeExample;
