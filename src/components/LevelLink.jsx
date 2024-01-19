import React from "react"
import { Link } from "react-router-dom"
import { twMerge } from "tailwind-merge"

const LevelLink = ({ text, to, className }) => {
  return (
    <Link
      className={twMerge(
        "px-4 py-2 border-2 border-black rounded-[0.5em] text-lg hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-colors w-full text-center",
        className
      )}
      to={to}
    >
      {text}
    </Link>
  )
}

export default LevelLink
