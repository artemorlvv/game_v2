import React, { useEffect, useMemo, useState } from "react"
import { useParams } from "react-router-dom"
import apiMock from "../api"
import NotFound from "../components/NotFound"
import QuestionsList from "../components/QuestionsList"
import { useTestStore } from "../store"
import TestDescription from "../components/TestDescription"
import TestQuestion from "../components/TestQuestion"
import TestButtons from "../components/TestButtons"

const Test = () => {
  const { id } = useParams()
  const setTest = useTestStore((state) => state.setTest)
  const test = useTestStore((state) => state.test)

  useEffect(() => {
    setTest(apiMock.tests[id])
  }, [id, setTest])

  if (!test) return <NotFound />

  return (
    <div className="container my-2 grid grid-cols-1 lg:grid-cols-3 lg:grow gap-2">
      <div className="lg:col-span-2 grow flex flex-col gap-2">
        <TestDescription />
        <TestQuestion />
        <TestButtons />
      </div>
      <div>
        <QuestionsList />
      </div>
    </div>
  )
}

export default Test
