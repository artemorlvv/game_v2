import React from "react"
import { useTestStore } from "../store"

const TestDescription = () => {
  const questionIndex = useTestStore((state) => state.questionIndex)
  const currentQuestion = useTestStore((state) => state.currentQuestion)

  return (
    <div className="bg-gray-200 px-6 py-4 rounded-xl">
      <p className="text-lg border-b-2 border-black w-max mb-1">{`Задача №${
        questionIndex + 1
      }`}</p>
      <p className="text-lg whitespace-pre-line">{currentQuestion.text}</p>
    </div>
  )
}

export default TestDescription
