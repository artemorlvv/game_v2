import { motion } from "framer-motion"
import React, { useEffect } from "react"

const Modal = ({ onClose, onConfirm, text, closeText, confirmText }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  return (
    <motion.div
      className="absolute flex items-center justify-center top-0 left-0 px-2 w-full h-full bg-gray-200/60"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className="top-0 left-0 w-full h-full absolute z-0"
        onClick={onClose}
      />
      <motion.div
        className="max-w-[300px] w-[95%] absolute z-[1] mx-2 bg-gray-300 flex flex-col gap-3 items-center rounded-xl p-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
      >
        <p className="text-xl text-center whitespace-pre-line">
          {text || "Подтвердить?"}
        </p>
        <div className="grid grid-cols-2 gap-2 w-full">
          <button
            className="bg-red-500 hover:bg-red-600 text-white rounded-lg px-[1em] py-[0.5em] transition-colors"
            onClick={onClose}
          >
            {closeText || "Нет"}
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 text-white rounded-lg px-[1em] py-[0.5em] transition-colors"
            onClick={onConfirm}
          >
            {confirmText || "Да"}
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Modal
