import React, { useMemo } from "react"
import { useTestStore } from "../store"
import Checkbox from "./Checkbox"

const CheckboxQuestion = () => {
  const currentQuestion = useTestStore((state) => state.currentQuestion)
  const selectOption = useTestStore((state) => state.selectOption)
  const currentSelectedOptions = useTestStore(
    (state) => state.currentSelectedOptions
  )
  const isCheckingAnswers = useTestStore((state) => state.isCheckingAnswers)

  return (
    <div className="flex flex-col gap-3">
      {isCheckingAnswers && (
        <p className="p-2 bg-gray-300 rounded-lg">
          Ответы, которые были верными выделены синим цветом
        </p>
      )}
      {currentQuestion.options.map((option, index) => (
        <Checkbox
          disabled={isCheckingAnswers}
          correct={
            isCheckingAnswers && currentQuestion.correct_answers.includes(index)
          }
          key={index}
          value={option}
          checked={currentSelectedOptions?.has(index) || false}
          onClick={() => selectOption(index)}
        />
      ))}
    </div>
  )
}

export default CheckboxQuestion
