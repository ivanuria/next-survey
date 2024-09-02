import { useState } from 'react';
import Explanation from "./Explanation";
import { QuestionDefinition } from '../lib/definitions';

function renderExplanations(
  survey: string,
  question:
  {
    title: string,
    content: string
  }[],
  onNext: Function,
  current: number
) {
  const explanationsToReturn = [];

  question.forEach((item, step) => {
    explanationsToReturn.push(
      <Explanation
        key={`${survey}_${step}`}
        survey={survey}
        title={item.title}
        content={item.content}
        step={step}
        onNext={onNext}
        open={current === step}
      />
    );
  });
}

export default function Question(
  { question }:
  Readonly<{question: QuestionDefinition}>)
{
  const [currentStep, setCurrentStep] = useState(0);
  const survey = 'Name of survey'
  const onNext = () => {
    setCurrentStep(currentStep + 1);
  }

  return (
    <>
      {renderExplanations(
        survey,
        question.explanations,
        onNext,
        currentStep
      )}
    </>
  );
}