import React, { useMemo } from "react"
import { useTestStore } from "../store"

const QuestionsList = () => {
  const { questions } = useTestStore((state) => state.test)
  const questionIndex = useTestStore((state) => state.questionIndex)
  const setQuestionIndex = useTestStore((state) => state.setQuestionIndex)
  const isCheckingAnswers = useTestStore((state) => state.isCheckingAnswers)
  const correctAnswers = useTestStore((state) => state.correctAnswers)
  const correctAnswersCount = useMemo(
    () => correctAnswers.filter((val) => val === true).length,
    [correctAnswers]
  )
  const resetTest = useTestStore((state) => state.resetTest)

  return (
    <div className="flex flex-col gap-2">
      {isCheckingAnswers && (
        <button
          className={`w-full lg:order-last rounded-xl py-2 text-xl text-gray-100 bg-blue-500 hover:bg-blue-600 transition-colors`}
          onClick={resetTest}
        >
          Попробовать снова
        </button>
      )}
      <div className="bg-gray-200 p-2 rounded-xl">
        <p className="px-[1em] py-[0.5em] text-lg">Задания:</p>
        {isCheckingAnswers && (
          <p className="px-[1em] py-[0.5em] text-lg">{`Правильных ответов: ${correctAnswersCount}/${correctAnswers.length}`}</p>
        )}
        <div className="flex flex-col gap-2">
          {questions.map((q, index) => (
            <button
              key={index}
              className={`
              text-start px-[1em] py-[0.5em] rounded-lg
              hover:bg-orange-200 flex items-center gap-2 transition-all outline outline-0 outline-transparent
              ${index === questionIndex ? "!bg-orange-400 text-gray-100" : ""}
            `}
              onClick={() => setQuestionIndex(index)}
            >
              {isCheckingAnswers && (
                <p>{correctAnswers[index] ? "✔️" : "❌"}</p>
              )}
              <p>{`№${index + 1} ${q.title}`}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default QuestionsList
