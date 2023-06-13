import { QuestionComponent } from "./question";

function Create({ id }: { id: string }) {
    return <div className="checkbox">
        <button className="delete">✘</button>
        <label htmlFor={id}>checkbox</label>
        <input required type="text" name={'checkbox'} id={id} />
    </div>
}

function Submit({ prompt, id }: { prompt: string, id: string }) {
    return <div className="checkbox">
        <h2>{prompt}</h2>
        <label htmlFor={id}></label>
        <input id={id} name={'checkbox'} type="checkbox" />
    </div>
}

function View({ prompt, answers }: { prompt: string, answers: boolean[] }) {
    let total = 0;
    for (const answer of answers) {
        if (answer === true) { total++; }
    }
    const percent = (total * 100 / answers.length).toFixed(1);
    return <div className="checkbox">
        <h2>{prompt}</h2>
        <p>{percent}% said yes</p>
    </div>;
}

export const checkbox: QuestionComponent<boolean> = {
    Create,
    Submit,
    View
}