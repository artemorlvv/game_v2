import React from "react"
import LevelLink from "./LevelLink"
import apiMock from "../api"

const LevelsList = () => {
  return (
    <div className="flex grow items-center justify-center">
      <div className="flex flex-col m-2 p-4 items-center justify-center gap-2 w-max bg-gray-200 rounded-xl">
        <p className="text-2xl border-b-2 border-black text-start decoration-2 mb-2">
          Темы:
        </p>
        {apiMock.tests.map(({ title }, index) => (
          <LevelLink key={index} to={"/test/" + index} text={title} />
        ))}
      </div>
    </div>
  )
}

export default LevelsList
