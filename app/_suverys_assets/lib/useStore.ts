import { create } from 'zustand';
import { StoreDefinition } from './definitions'

const useStore = create(set => ({
  currentQuestion: 0,
  currentStep: 0,
  setNextQuestion: () => set((state:StoreDefinition) => ({ currentQuestion: state.currentQuestion + 1,  currentStep: 0})),
  setNextStep: () => set((state:StoreDefinition) => ({ currentStep: state.currentStep + 1 }))
}));

export default useStore