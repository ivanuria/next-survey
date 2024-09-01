import { useState } from 'react';
import Explanation from "./Explanation";

const question = [
  {
    type: 'explanation',
    title: 'This is a try',
    content: 'Nothing to say yet'
  },
  {
    type: 'navigation',
    to: '/'
  },
  {
    type: 'objective',
    target: 'noreem'
  }
];

function renderExplanations(
  survey: string,
  question:
  {
    type: string,
    title?: string,
    content?: string,
    to?: string,
    target?: string,
  }[],
  onNext: Function,
  current: number
) {
  const explanationsToReturn = [];

  question.forEach((item, step) => {
    if (item.type && item.type === 'explanation') {
      if (!item.title) return;
      if (!item.content) return;
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
      )
    }
  });
}

export default function Question() {
  const [currentStep, setCurrentStep] = useState(0);
  const survey = 'Name of survey'
  const onNext = () => {
    setCurrentStep(currentStep + 1);
  }

  return (
    <>
      {renderExplanations(
        survey,
        question,
        onNext,
        currentStep
      )}
    </>
  );
}