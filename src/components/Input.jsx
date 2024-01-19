import React from "react"

const Input = ({ value, onChange, disabled }) => {
  return (
    <input
      type="text"
      placeholder="Введите ответ..."
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`
        bg-gray-300 text-lg px-[1em] 
        py-[0.5em] border-2 border-gray-400 
        rounded-lg outline-none transition-all
        ${
          disabled
            ? ""
            : "hover:!border-gray-500 focus:!border-gray-500 focus:outline-blue-500"
        }
      `}
    />
  )
}

export default Input
