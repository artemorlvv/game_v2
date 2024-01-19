import React from "react"

const Checkbox = ({ disabled, value, correct, checked, onClick }) => {
  return (
    <button
      className={`
        flex items-center gap-3 px-3 py-1.5 
        w-full ${disabled ? "cursor-default" : "hover:bg-gray-300 "}
        transition-colors outline-none rounded-md 
        ${correct ? "outline-blue-400" : ""}
      `}
      onClick={disabled ? null : onClick}
    >
      <div
        className={`
          border-2 border-gray-700 relative 
          p-2 rounded-md overflow-hidden transition-colors
          ${checked ? "bg-blue-400" : ""}
        `}
      ></div>
      <span className="text-start">{value}</span>
    </button>
  )
}

export default Checkbox
