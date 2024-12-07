"use client";

import React, { useCallback, useContext, useEffect } from "react";
import Modal from "../common/Modal";
import CloseSvg from "../../../public/svgs/svg-close-box.svg";
import { Button } from "../common/Button";
import { useScrollBlock } from "@/hooks/useScrollBlock ";

const ProblemToDownloadModal = ({ isOpen, setIsOpen }) => {
  const [blockScroll, allowScroll] = useScrollBlock();

  useEffect(() => {
    if (isOpen) {
      blockScroll();
    } else allowScroll();

    return () => {
      allowScroll();
    };
  }, [blockScroll, allowScroll, isOpen]);

  const onCloseModal = useCallback(() => {
    allowScroll();
    setIsOpen(false);
  }, [allowScroll, setIsOpen]);
  return (
    <>
      <Modal isOpen={isOpen} onClose={onCloseModal} className="overflow-auto">
        <Modal.Box
          initial={{ y: "100vw" }}
          animate={{ y: 0 }}
          className="max-w-[30rem] max-md:w-11/12 w-full max-h-[20rem] h-full dark:bg-gray-800/70 dark:!backdrop-blur-3xl transition-colors bg-cream-light rounded-2xl flex flex-col shadow-2xl shadow-black/10"
        >
          <Modal.Header className="w-full h-auto px-2 py-3">
            <div className="w-full h-full flex flex-row-reverse justify-between items-center">
              <div
                className="w-auto h-full px-1 flex justify-center items-center cursor-pointer"
                onClick={onCloseModal}
              >
                <CloseSvg className="scale-[0.8]" />
              </div>
              <span className="font-Estedad-Medium text-orange-medium mx-1">
                مشکل دانلود
              </span>
            </div>
          </Modal.Header>
          <Modal.Body className="w-full h-full dark:text-white bg-white dark:bg-gray-800 transition-colors rounded-b-2xl rounded-t-3xl">
            <div className="w-full h-full flex gap-2 justify-center items-center">
              <div className="w-full h-auto p-3 flex flex-col justify-center items-center gap-3">
                <h2 className="max-md:text-lg text-xl font-bold">
                  متاسفیم برای مشکل پیش آمده...
                </h2>
                <p className="max-w-[70%] text-xs md:text-sm text-center">
                  میتوانید برای دانلود دستی روی دکمه زیر بزنید تا فایل برای شما
                  دانلود شه:)
                </p>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="w-full h-auto flex justify-center items-center px-3 py-4">
            <Button
              size="small"
              onClick={() =>
                window.open(
                  "https://dl2.soft98.ir/soft/t/TweakNow.WinSecret.Plus.v5.6.6.rar?1726403582"
                )
              }
              className="!w-full hover:!scale-[1.02]"
              rounded="large"
            >
              دانلود
            </Button>
          </Modal.Footer>
        </Modal.Box>
      </Modal>
    </>
  );
};

export default ProblemToDownloadModal;
