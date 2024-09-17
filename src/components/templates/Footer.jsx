"use client";

import React from "react";
import TextFooter from "../atoms/TextFooter";
import Button from "../atoms/Button";
import Logo from "../atoms/Logo";
import MenuListFooter from "../molecules/MenuListFooter";
import Image from "next/image";
import InteractiveImage from "../molecules/InteractiveImage";

function Footer() {
  return (
    <div className={"bg-footer-green dark:bg-gray-900 dark:shadow-2xl dark:shadow-gray-700 dark:text-white"}>
      <div className="p-5 2xl:p-6 flex items-center justify-center flex-col lg:flex-row-reverse lg:justify-between gap-y-6 container m-auto">
        <div className="w-full lg:w-fit flex items-center justify-between">
          <Logo />
          <div className="lg:hidden">
            <Button
              text="محیط برنامه "
              variant="buttonBlue"
              type="link"
              href="/"
            />
          </div>
        </div>
        <hr className="w-full h-1 bg-border-grey lg:hidden" />

        <InteractiveImage
          referrerPolicy="origin"
          id="rgvjjzpenbqenbqefukzfukz"
          style={{ cursor: "pointer" }}
          onClick={() =>
            window.open(
              "https://logo.samandehi.ir/Verify.aspx?id=372266&p=xlaojyoeuiwkuiwkgvkagvka",
              "Popup",
              "toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30"
            )
          }
          alt="logo-samandehi"
          src="https://logo.samandehi.ir/logo.aspx?id=372266&p=qftiyndtodrfodrfwlbqwlbq"
          width={50}
          height={50}
        />

        <MenuListFooter />
        <div className="w-full lg:w-fit flex items-center justify-center">
          <TextFooter />
        </div>
      </div>
    </div>
  );
}

export default Footer;
