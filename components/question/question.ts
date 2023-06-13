export type QuestionComponent<T> = {
    Create: (props: { id: string }) => JSX.Element;
    Submit: (props: { id: string, prompt: string }) => JSX.Element;
    View: (props: { prompt: string, answers: T[] }) => JSX.Element;
}

export type Question = {
    type: 'checkbox',
    prompt: string
}