import { create } from 'zustand';
import { persist } from 'zustand/middleware'

interface StoreDefinition {
  currentQuestion: number,
  currentStep: number,
  setNextQuestion: () => void,
  setNextStep: () => void
}

const useStore = create(
  persist<StoreDefinition>(
    (set, get) => ({
      currentQuestion: 0,
      currentStep: 0,
      setNextQuestion: () => set((state) => ({ currentQuestion: state.currentQuestion + 1,  currentStep: 0})),
      setNextStep: () => set((state) => ({ currentStep: state.currentStep + 1 }))
    }),
    {
      name: `${process.env.NEXT_PUBLIC_NAME}-survey-storage`
    }
  )
);

export default useStore