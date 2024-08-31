"use client";
import React, { createContext, useState } from "react";

export const EditorModalsContext = createContext({
  isOpenSettingModal: false,
  setIsOpenSettingModal: null,
  isOpenShareModal: false,
  setIsOpenShareModal: null,
  isOpenBottonSheet: false,
  setIsOpenBottonSheet: null,
  initialSnap: 3,
  setInitialSnap: null,
});

export function EditorModalsProvider({ children }) {
  const [isOpenSettingModal, setIsOpenSettingModal] = useState(false);
  const [isOpenShareModal, setIsOpenShareModal] = useState(false);
  const [isOpenBottonSheet, setIsOpenBottonSheet] = useState(true);
  const [initialSnap, setInitialSnap] = useState(3);

  return (
    <EditorModalsContext.Provider
      value={{
        isOpenSettingModal,
        setIsOpenSettingModal,
        isOpenShareModal,
        setIsOpenShareModal,
        isOpenBottonSheet,
        setIsOpenBottonSheet,
        initialSnap,
        setInitialSnap
      }}
    >
      {children}
    </EditorModalsContext.Provider>
  );
}
