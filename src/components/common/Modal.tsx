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

const Modal: ModalComponent = ({
  isOpen,
  onClose,
  children,
  className,
  ...props
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`fixed !overflow-hidden inset-0 w-full h-full bg-black/10 backdrop-blur-sm z-[100] flex justify-center items-center flex-grow ${
            className || ""
          }`}
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
Modal.Box.displayName = "Modal.Box";

Modal.Header = ({ children, ...props }) => (
  <motion.div {...props}>{children}</motion.div>
);
Modal.Header.displayName = "Modal.Header";

Modal.Body = ({ children, ...props }) => (
  <motion.div className="modal-body" {...props}>
    {children}
  </motion.div>
);
Modal.Body.displayName = "Modal.Body";

Modal.Footer = ({ children, ...props }) => (
  <motion.div className="modal-footer" {...props}>
    {children}
  </motion.div>
);
Modal.Footer.displayName = "Modal.Footer";

export default Modal;
