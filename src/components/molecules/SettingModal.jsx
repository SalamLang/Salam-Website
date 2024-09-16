"use client";

import React, { useCallback, useContext, useEffect, useState } from "react";
import Modal from "../common/Modal";
import { EditorModalsContext } from "@/utils/contexts/EditorModals";
import CloseSvg from "../../../public/svgs/svg-close-box.svg";
import MenuSetting from "./MenuSettingModal";
import DisplaySetting from "./DisplaySetting";
import MoreDetails from "./MoreDetails";

export default function SettingModal() {
  const { isOpenSettingModal, setIsOpenSettingModal } =
    useContext(EditorModalsContext);
  // Memoize the onCloseModal function
  const onCloseModal = useCallback(() => {
    setIsOpenSettingModal(false);
  }, [setIsOpenSettingModal]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        onCloseModal();
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onCloseModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onCloseModal]);

  return (
    <Modal
      isOpen={isOpenSettingModal}
      onClose={onCloseModal}
      className="overflow-auto"
    >
      <Modal.Box
        initial={{ y: "100vw" }}
        animate={{ y: 0 }}
        className="max-w-[48rem] w-full max-h-[40rem] h-full transition-colors bg-cream-light dark:bg-gray-800 rounded-2xl flex flex-col shadow-2xl shadow-black/10 dark:shadow-gray-600/10 max-2xl:!scale-[0.7]"
      >
        <Modal.Header className="w-full h-auto px-6 py-3">
          <div className="w-full h-full flex flex-row-reverse justify-between items-center">
            <div
              className="w-auto h-full px-1 flex justify-center items-center cursor-pointer"
              onClick={onCloseModal}
            >
              <CloseSvg className="scale-[0.8]" />
            </div>
            <span className="font-Estedad-Medium text-orange-medium">
              تنظیمات
            </span>
          </div>
        </Modal.Header>
        <Modal.Body className="w-full h-full transition-colors bg-white dark:bg-dark dark:text-white rounded-b-2xl rounded-t-3xl">
          <div className="w-full h-full flex gap-2 justify-between items-center">
            <div className="w-1/4 h-full shadow-2xl shadow-black/10 dark:shadow-gray-600/10">
              <MenuSetting page={page} setPage={setPage} />
            </div>
            <div className="w-full h-full !overflow-auto orange-scrollbar">
              {page === 1 && <DisplaySetting />}
              {page === 2 && <MoreDetails />}
            </div>
          </div>
        </Modal.Body>
      </Modal.Box>
    </Modal>
  );
}
