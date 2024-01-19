import React, { useMemo } from "react"
import { useTestStore } from "../store"
import CheckboxQuestion from "./CheckboxQuestion"
import RadioQuestion from "./RadioQuestion"
import TextQuestion from "./TextQuestion"

const TestQuestion = () => {
  const currentQuestion = useTestStore((state) => state.currentQuestion)

  const renderQuestion = () => {
    if (!currentQuestion) return null
    switch (currentQuestion.type) {
      case "checkbox":
        return <CheckboxQuestion />
      case "radio":
        return <RadioQuestion />
      case "text":
        return <TextQuestion />
    }
  }

  return (
    <div className="grow bg-gray-200 p-3 rounded-xl">{renderQuestion()}</div>
  )
}

export default TestQuestion
