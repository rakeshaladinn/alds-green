"use client";
import React, { useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  closeOnOutsideClick?: boolean;
  children: React.ReactNode;
  title?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  closeOnOutsideClick = true,
  children,
  title,
}) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="modal-backdrop"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          onClick={closeOnOutsideClick ? onClose : undefined}
        >
          <motion.div
            key="modal-content"
            className="relative bg-white shadow-lg rounded w-full max-w-md mx-4 sm:mx-0"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div className="truncate text-center text-xl font-semibold w-full">
                {title}
              </div>
              {onClose && (
                <button
                  className="text-red-500 cursor-pointer hover:text-red-600 absolute right-4 top-2"
                  onClick={onClose}
                >
                  <RxCross1 size={20} />
                </button>
              )}
            </div>

            {/* Modal Body */}
            <div className="p-4 overflow-y-auto max-h-[80vh]">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
