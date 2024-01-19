import React from "react"

const RadioButton = ({ disabled, value, onClick, correct, checked }) => {
  return (
    <button
      className={`
        flex items-center gap-3 px-3 py-1.5 
        w-full ${disabled ? "cursor-default" : "hover:bg-gray-300"} 
        transition-colors outline-none rounded-md 
        ${correct ? "outline-blue-400" : ""}
      `}
      onClick={disabled ? null : onClick}
    >
      <div
        className={`
        border-2 border-gray-700 relative 
        p-2 rounded-full overflow-hidden transition-colors
        ${checked ? "bg-blue-400" : "bg-transparent"}
        `}
      >
        {/* <div className="border-2 border-gray-700 relative p-2 rounded-full overflow-hidden">
        <div
          className={`
            bg-blue-400 rounded-full absolute 
            w-full h-full left-0 top-0 
            duration-300 transition-all  
            ${checked ? "scale-125 opacity-100" : "scale-[0.2] opacity-0"}
          `}
        /> */}
      </div>
      <span className="text-start">{value}</span>
    </button>
  )
}

export default RadioButton
