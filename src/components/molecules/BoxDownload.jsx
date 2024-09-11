"use client";

import Linux from "../../../public/svgs/linux.svg";
import Mac from "../../../public/svgs/mac.svg";
import Android from "../../../public/svgs/android.svg";
import Windows from "../../../public/svgs/windows.svg";
import Pwa from "../../../public/svgs/pwa.svg";
import Link from "next/link";

function BoxDownload({ variant, className, imgClass, isBlack, href }) {
  let classes = `scale-[0.65] ${imgClass} ${isBlack && "!brightness-0"}`;
  let svgComponent = null;
  let title;
  let description;

  switch (variant) {
    case "Linux":
      classes;
      svgComponent = <Linux className={classes} />;
      title = "لینوکس";
      description = "12 مگابایت";
      break;
    case "Mac":
      classes;
      svgComponent = <Mac className={classes} />;
      title = "مک";
      description = "47 مگابایت";
      break;
    case "Android":
      classes;
      svgComponent = <Android className={classes} />;
      title = "اندروید";
      description = "56 مگابایت";
      break;
    case "Windows":
      classes;
      svgComponent = <Windows className={classes} />;
      title = "ویندوز";
      description = "27 مگابایت";
      break;
    case "Pwa":
      classes;
      svgComponent = <Pwa className={classes} />;
      title = "PWA";
      description = "بدون نیاز به نصب";
      break;
  }

  if (href)
    return (
      <Link
        href={href}
        className="flex items-center justify-center flex-col gap-2 cursor-pointer"
      >
        <div
          className={`bg-bg-box rounded-lg flex items-center justify-center  w-16 h-16 2xl:w-20 2xl:h-20 ${className}`}
        >
          {svgComponent}
        </div>
        <h4 className="text-title text-center font-Estedad-SemiBold">
          {title}
        </h4>
        <p className="text-description text-center text-xs font-Estedad-Regular w-24">
          {description}
        </p>
      </Link>
    );
  else
    return (
      <div className="flex items-center justify-center flex-col gap-2 cursor-pointer">
        <div
          className={`bg-bg-box rounded-lg flex items-center justify-center  w-16 h-16 2xl:w-20 2xl:h-20 ${className}`}
        >
          {svgComponent}
        </div>
        <h4 className="text-title text-center font-Estedad-SemiBold">
          {title}
        </h4>
        <p className="text-description text-center text-xs font-Estedad-Regular w-24">
          {description}
        </p>
      </div>
    );
}

export default BoxDownload;
