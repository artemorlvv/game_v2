import React from "react"
import { useTestStore } from "../store"
import RadioButton from "./RadioButton"

const RadioQuestion = () => {
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
          Ответ, который был верным выделен синим цветом
        </p>
      )}
      {currentQuestion.options.map((option, index) => (
        <RadioButton
          key={index}
          disabled={isCheckingAnswers}
          correct={
            isCheckingAnswers && currentQuestion.correct_answer === index
          }
          value={option}
          checked={currentSelectedOptions === index}
          onClick={() => selectOption(index)}
        />
      ))}
    </div>
  )
}

export default RadioQuestion
