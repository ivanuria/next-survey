import Question from './Question';
import { ObjectiveType } from '../lib/enums.js';
import { QuestionDefinition } from '../lib/definitions';

const questionsTest = [
  {
    pollName: 'this is a test',
    explanations: [
      {
        title: 'This is a try',
        content: 'Nothing to say yet'
      }
    ],
    surveys: [
      {
        title: 'Has it been easy to find?',
        content: 'set from 0 (extremely hard) to 10 (extremely easy)',
        lower: 'hard',
        higher: 'easy'
      }
    ],
    navigation: '/',
    objective: [
      {
        type: ObjectiveType['click'],
        target: 'noreem'
      }
    ]
  }
];

function renderPolls(polls: QuestionDefinition[]) {
  const questionsToRender = [];
  polls.forEach((question, index) => {
    questionsToRender.push(<Question key={index} question={question} />)
  })
}

export default function Poll() {
  const polls = [...questionsTest];
  return (
    <>{renderPolls(polls)}</>
  );
}