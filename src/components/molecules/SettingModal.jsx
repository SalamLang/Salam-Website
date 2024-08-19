"use client";

import React, { useContext, useEffect, useState } from "react";
import Modal from "../common/Modal";
import { EditorModalsContext } from "@/utils/contexts/EditorModals";
import CloseSvg from "../../../public/svg-close-box.svg";
import MenuSetting from "./MenuSettingModal";
import DisplaySetting from "./DisplaySetting";
import MoreDetails from "./MoreDetails";

export default function SettingModal() {
  const { isOpenSettingModal, setIsOpenSettingModal } =
    useContext(EditorModalsContext);
  const onCloseModal = () => setIsOpenSettingModal(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        onCloseModal();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Modal isOpen={isOpenSettingModal} onClose={onCloseModal}>
      <Modal.Box
        initial={{ y: "100vw" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3, type: "spring", stiffness: 80 }}
        className="max-w-[48rem] w-full max-h-[40rem] h-full bg-cream-light rounded-2xl flex flex-col shadow-2xl shadow-black/10"
      >
        <Modal.Header className="w-full h-auto px-6 py-3">
          <div className="w-full h-full flex justify-between items-center">
            <CloseSvg
              className="scale-[0.8] cursor-pointer"
              onClick={onCloseModal}
            />
            <span className="font-Estedad-Medium text-orange-medium">
              تنظیمات
            </span>
          </div>
        </Modal.Header>
        <Modal.Body className="w-full h-full bg-white rounded-b-2xl rounded-t-3xl">
          <div className="w-full h-full flex gap-2 justify-between items-center">
            <div className="w-1/4 h-full shadow-2xl shadow-black/10">
              <MenuSetting page={page} setPage={setPage} />
            </div>
            <div className="w-full h-full">
              {page === 1 && <DisplaySetting />}
              {page === 2 && <MoreDetails />}
            </div>
          </div>
        </Modal.Body>
      </Modal.Box>
    </Modal>
  );
}
