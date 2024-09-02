import { ObjectiveType } from './enums';

export interface QuestionDefinition {
  pollName: string,
  explanations: {
    title: string,
    content: string
  }[],
  surveys: {
    title: string,
    content: string,
    lower: string,
    higher: string
  }[],
  navigation: string,
  objective: {
    type: ObjectiveType,
    target: string
  }[],
}