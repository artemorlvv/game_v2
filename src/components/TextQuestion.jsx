import React from "react"
import { useTestStore } from "../store"
import Input from "./Input"

const TextQuestion = () => {
  const selectOption = useTestStore((state) => state.selectOption)
  const currentSelectedOptions = useTestStore(
    (state) => state.currentSelectedOptions
  )
  const isCheckingAnswers = useTestStore((state) => state.isCheckingAnswers)
  const currentQuestion = useTestStore((state) => state.currentQuestion)

  return (
    <div className="flex flex-col gap-3">
      {isCheckingAnswers && (
        <p className="whitespace-pre-line p-2 bg-gray-300 rounded-lg">
          {`Правильные ответы:\n${currentQuestion.correct_answers
            .map((q, index) => `№${index + 1} - ${q}`)
            .join("\n")}
          `}
        </p>
      )}
      <Input
        value={currentSelectedOptions || ""}
        disabled={isCheckingAnswers}
        onChange={(e) => selectOption(e.target.value)}
      />
    </div>
  )
}

export default TextQuestion
