import React from "react"
import LevelLink from "./LevelLink"

const NotFound = () => {
  return (
    <div className="flex justify-center grow flex-col items-center gap-2 w-max">
      <p className="text-xl">Страница не найдена</p>
      <LevelLink to={"/"} text={"На главную"} className={"w-auto"} />
    </div>
  )
}

export default NotFound
