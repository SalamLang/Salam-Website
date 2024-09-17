import React, { useCallback, useContext, useEffect, useState } from "react";
import Modal from "../common/Modal";
import { EditorModalsContext } from "@/utils/contexts/EditorModals";
import CloseSvg from "../../../public/svgs/svg-close-box.svg";
import ShareModalIcon from "../../../public/gifs/download.gif";
import CopyIcon from "../../../public/svgs/copy.svg";
import Image from "next/image";
import { copyToClipboard } from "@/utils/helper/handlers";

export default function ShareModal() {
  const [linkText] = useState("Sallam/ENfrzWaQDSOKdeOtD");

  const { isOpenShareModal, setIsOpenShareModal } =
    useContext(EditorModalsContext);

  // Memoize the onCloseModal function
  const onCloseModal = useCallback(() => {
    setIsOpenShareModal(false);
  }, [setIsOpenShareModal]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onCloseModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onCloseModal]);

  return (
    <Modal isOpen={isOpenShareModal} onClose={onCloseModal}>
      <Modal.Box
        className="max-w-[24rem] max-sm:w-10/12 w-full max-h-[30rem] h-[30rem] bg-white dark:bg-gray-800/70 dark:!backdrop-blur-3xl rounded-3xl p-5 shadow-2xl shadow-black/10 dark:shadow-gray-600/10 dark:text-white"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
      >
        <Modal.Header className="w-full h-auto pt-2 flex justify-end">
          <div
            className="w-auto h-full px-1 flex justify-center items-center cursor-pointer"
            onClick={onCloseModal}
          >
            <CloseSvg className="scale-[0.8]" />
          </div>
        </Modal.Header>
        <Modal.Body className="w-full h-auto flex justify-center items-center">
          <Image
            src={ShareModalIcon}
            alt="ShareModalIcon"
            className="max-w-[15rem] w-full"
          />
        </Modal.Body>
        <Modal.Footer className="w-full h-auto relative flex flex-col gap-6">
          <div className="w-full h-auto flex flex-col justify-center items-center gap-3">
            <h2 className="text-2xl font-Estedad-Bold">
              این لینک رو میتونی استفاده کنی
            </h2>
            <p className="text-sm opacity-60 max-w-[16rem] text-center font-Estedad-Medium">
              برای اشتراک گذاشتن لینک زیر به دوستان خود ارسال کنید
            </p>
          </div>
          <div className="w-full h-auto flex justify-center items-center">
            <div
              className="w-auto border-2 border-cream-light rounded-[12px] p-0.5 select-none cursor-pointer"
              onClick={() => copyToClipboard(linkText)}
            >
              <div className="w-full h-full px-4 py-2.5 bg-cream-light rounded-[9px] flex flex-row-reverse justify-center items-center gap-1">
                <span className="text-xs font-Estedad-Bold text-bg-main">
                  {linkText}
                </span>
                <div className="w-auto h-auto">
                  <CopyIcon className="text-nowrap" />
                </div>
              </div>
            </div>
          </div>
        </Modal.Footer>
      </Modal.Box>
    </Modal>
  );
}
