import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="flex justify-center py-2 border-b">
      <Link
        to={"/"}
        className="text-xl hover:text-orange-500 transition-colors text-center"
      >
        Тесты по JavaScript
      </Link>
    </div>
  )
}

export default Header
