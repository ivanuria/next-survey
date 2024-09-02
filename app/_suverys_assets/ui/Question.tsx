'use client';
import Explanation from "./Explanation";
import { QuestionDefinition } from '../lib/definitions';
import useStore from '../lib/useStore';

export default function Question(
  { question, index }:
  Readonly<{ question: QuestionDefinition, index: number }>)
{
  const {currentQuestion, currentStep, setNextStep} = useStore()
  const survey = question.pollName;

  console.log(index, currentQuestion, index !== currentQuestion);
  if (index !== currentQuestion) return null

  return (
    <>
      {
        question.explanations.map(
          (item, step) =>
            <Explanation
              key={`${survey}_${step}`}
              survey={survey}
              title={item.title}
              content={item.content}
              step={step}
              onNext={setNextStep}
              open={currentStep === step}
            />
        )
      }
    </>
  );
}