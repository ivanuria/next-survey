import Question from './Question';
import { ObjectiveType } from '../lib/enums';

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

export default function Poll() {
  const polls = [...questionsTest];
  return (
    <>{polls.map((question, index) => <Question key={index} question={question} index={index}/>)}</>
  );
}