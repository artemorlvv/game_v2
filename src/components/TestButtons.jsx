import React, { useMemo, useState } from "react"
import { useTestStore } from "../store"
import Modal from "./Modal"
import { AnimatePresence } from "framer-motion"

const TestButtons = () => {
  const questionIndex = useTestStore((state) => state.questionIndex)
  const setQuestionIndex = useTestStore((state) => state.setQuestionIndex)
  const { questions } = useTestStore((state) => state.test)
  const selectedOptions = useTestStore((state) => state.selectedOptions)
  const isLastQuestion = useMemo(
    () => questions.length - 1 === questionIndex,
    [questionIndex, questions]
  )
  const setIsCheckingAnswers = useTestStore(
    (state) => state.setIsCheckingAnswers
  )
  const isCheckingAnswers = useTestStore((state) => state.isCheckingAnswers)
  const setCorrectAnswers = useTestStore((state) => state.setCorrectAnswers)
  const [modalVisible, setModalVisible] = useState(false)

  const handleClick = (direction) => {
    if (direction === "left") {
      setQuestionIndex(questionIndex - 1)
    } else if (direction === "right") {
      if (isLastQuestion) {
        if (isCheckingAnswers) return
        setModalVisible(true)
        return
      }
      setQuestionIndex(questionIndex + 1)
    }
  }

  const getModalText = () => {
    const arr = []
    for (let i = 0; i < questions.length; i++) {
      const selectedOption = selectedOptions[i]

      if (selectedOption === null || selectedOption === undefined) {
        arr.push(`№${i + 1}`)
      } else if (selectedOption instanceof Set) {
        if (selectedOption.size === 0) arr.push(`№${i + 1}`)
      } else if (typeof selectedOption === "string") {
        if (selectedOption.trim() === "") arr.push(`№${i + 1}`)
      }
    }

    if (!arr.length) return "Завершить тест?"

    return `Пропущено вопросов - ${arr.length}:\n${arr.join(
      ", "
    )}\nЗавершить тест?`
  }

  const arraysEqual = (arr1, arr2) => {
    const set1 = new Set(arr1)
    const set2 = new Set(arr2)

    if (set1.size !== set2.size) {
      return false
    }

    for (const value of set1) {
      if (!set2.has(value)) {
        return false
      }
    }

    return true
  }

  const checkAnswers = () => {
    setModalVisible(false)
    setIsCheckingAnswers(true)
    const arr = []

    for (let i = 0; i < questions.length; i++) {
      const selectedOption = selectedOptions[i]

      if (selectedOption === null || selectedOption === undefined) {
        arr.push(false)
      } else if (selectedOption instanceof Set) {
        arr.push(arraysEqual(selectedOption, questions[i].correct_answers))
      } else if (typeof selectedOption === "string") {
        arr.push(questions[i].correct_answers.includes(selectedOption.trim()))
      } else {
        arr.push(selectedOption === questions[i].correct_answer)
      }
    }
    setCorrectAnswers(arr)
  }

  return (
    <>
      <div className="flex gap-2">
        <button
          className={`
          bg-blue-500 w-full rounded-xl py-2
          text-2xl text-gray-100 
          hover:bg-blue-600 transition-colors
          ${questionIndex ? "" : "invisible"}
        `}
          onClick={() => handleClick("left")}
        >
          &#8656;
        </button>
        <button
          className={`w-full rounded-xl py-2 ${
            isLastQuestion ? "text-xl" : "text-2xl"
          } text-gray-100 ${
            isCheckingAnswers && isLastQuestion
              ? "bg-blue-400 cursor-default"
              : "bg-blue-500 hover:bg-blue-600"
          } transition-colors`}
          onClick={() => handleClick("right")}
        >
          {isLastQuestion ? "Завершить" : String.fromCharCode(8658)}
        </button>
      </div>
      <AnimatePresence>
        {modalVisible && (
          <Modal
            onClose={() => setModalVisible(false)}
            onConfirm={checkAnswers}
            text={getModalText()}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default TestButtons
