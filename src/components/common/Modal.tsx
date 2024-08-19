"use client";

import React, { ReactNode, HTMLAttributes } from "react";
import { AnimatePresence, motion, MotionProps } from "framer-motion";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement> &
  MotionProps;

type ModalComponent = React.FC<ModalProps> & {
  Box: React.FC<
    { children: ReactNode } & HTMLAttributes<HTMLDivElement> & MotionProps
  >;
  Header: React.FC<
    { children: ReactNode } & HTMLAttributes<HTMLDivElement> & MotionProps
  >;
  Body: React.FC<
    { children: ReactNode } & HTMLAttributes<HTMLDivElement> & MotionProps
  >;
  Footer?: React.FC<
    { children: ReactNode } & HTMLAttributes<HTMLDivElement> & MotionProps
  >;
};

const Modal: ModalComponent = ({ isOpen, onClose, children, ...props }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed overflow-hidden inset-0 w-full h-full bg-black/10 backdrop-blur-sm z-[123000] flex justify-center items-center flex-grow"
          onClick={onClose}
          {...props}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

Modal.Box = ({ children, ...props }) => (
  <motion.div onClick={(e) => e.stopPropagation()} {...props}>
    {children}
  </motion.div>
);

Modal.Header = ({ children, ...props }) => (
  <motion.div {...props}>{children}</motion.div>
);

Modal.Body = ({ children, ...props }) => (
  <motion.div className="modal-body" {...props}>
    {children}
  </motion.div>
);

Modal.Footer = ({ children, ...props }) => (
  <motion.div className="modal-footer" {...props}>
    {children}
  </motion.div>
);

export default Modal;
