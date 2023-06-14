import { MouseEventHandler } from "react";

export type QuestionComponent<T> = {
    Create: (props: { id: string, remove: MouseEventHandler }) => JSX.Element;
    Submit: (props: { id: string, prompt: string }) => JSX.Element;
    View: (props: { prompt: string, answers: T[] }) => JSX.Element;
}

export type QuestionType = 'checkbox' | 'textarea';
export type Question = {
    type: QuestionType,
    prompt: string
}