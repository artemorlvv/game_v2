import { create } from "zustand"

const updateCheckbox = (selectedOptions, questionIndex, optionIndex) => {
  selectedOptions[questionIndex] = selectedOptions[questionIndex] || new Set()

  if (selectedOptions[questionIndex].has(optionIndex)) {
    selectedOptions[questionIndex] = new Set(
      [...selectedOptions[questionIndex]].filter((item) => item !== optionIndex)
    )
  } else {
    selectedOptions[questionIndex] = new Set([
      ...selectedOptions[questionIndex],
      optionIndex,
    ])
  }
}

export const useTestStore = create((set) => ({
  test: null,
  questionIndex: 0,
  currentQuestion: null,
  selectedOptions: [],
  currentSelectedOptions: null,
  correctAnswers: [],
  isCheckingAnswers: false,
  setTest: (test) =>
    set({
      test,
      questionIndex: 0,
      currentQuestion: test.questions[0],
      selectedOptions: [],
      currentSelectedOptions: null,
      correctAnswers: [],
      isCheckingAnswers: false,
    }),
  resetTest: () =>
    set((state) => ({
      questionIndex: 0,
      currentQuestion: state.test.questions[0],
      selectedOptions: [],
      currentSelectedOptions: null,
      correctAnswers: [],
      isCheckingAnswers: false,
    })),
  setQuestionIndex: (questionIndex) =>
    set((state) => ({
      questionIndex,
      currentQuestion: state.test.questions[questionIndex],
      currentSelectedOptions: state.selectedOptions[questionIndex],
    })),
  selectOption: (index) =>
    set((state) => {
      const newSelectedOptions = [...state.selectedOptions]
      switch (state.currentQuestion.type) {
        case "checkbox":
          updateCheckbox(newSelectedOptions, state.questionIndex, index)
          break
        case "radio":
          newSelectedOptions[state.questionIndex] = index
          break
        case "text":
          newSelectedOptions[state.questionIndex] = index
          break
      }
      return {
        selectedOptions: newSelectedOptions,
        currentSelectedOptions: newSelectedOptions[state.questionIndex],
      }
    }),
  setIsCheckingAnswers: (val) => set({ isCheckingAnswers: val }),
  setCorrectAnswers: (correctAnswers) => set({ correctAnswers }),
}))
