import { QuestionComponent } from "./question";
import './checkbox.css';

function Create({ id }: { id: string }) {
    return <div className="checkbox create card">
        <label htmlFor={id}>prompt: </label>
        <input required type="text" name={'checkbox'} id={id} />
        <div className="preview">
            <Tick />
            <Cross />
        </div>
        <button className="delete">✘</button>
    </div>
}

function Submit({ prompt, id }: { prompt: string, id: string }) {
    return <div className="checkbox submit card">
        <h2>{prompt}</h2>
        <input id={id} name={'checkbox'} type="checkbox" />
        <label htmlFor={id}>
            <Tick />
            <Cross />
        </label>
    </div>
}

function View({ prompt, answers }: { prompt: string, answers: boolean[] }) {
    let total = 0;
    for (const answer of answers) {
        if (answer === true) { total++; }
    }
    const percent = (total * 100 / answers.length).toFixed(1);
    return <div className="checkbox view card">
        <h2>{prompt}</h2>
        <p>{percent}% said yes</p>
    </div>;
}

// from https://fontawesomeicons.com/svg/icons/checkmark-square-2#ex-tab1
const Tick = () => <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="3 3 19 19">
    <g id="Layer_2" data-name="Layer 2">
        <g id="checkmark-square-2">
            <g id="checkmark-square-2-2" data-name="checkmark-square-2">
                <rect fill="transparent" width="24" height="24" transform="translate(24 24) rotate(180)" />
                <path fill="currentColor" d="M18,3H6A3,3,0,0,0,3,6V18a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V6A3,3,0,0,0,18,3ZM16.3,9.61l-4.57,6a1,1,0,0,1-.79.39h0a1,1,0,0,1-.79-.38L7.71,12.51a1,1,0,0,1,1.58-1.23l1.63,2.08,3.78-5a1,1,0,1,1,1.6,1.22Z" />
            </g>
        </g>
    </g>
</svg>

// from https://fontawesomeicons.com/svg/icons/x-square-fill
const Cross = () => <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50-" fill="currentColor" className="bi bi-x-square-fill" viewBox="0 0 17 17">
    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
</svg>

export const checkbox: QuestionComponent<boolean> = {
    Create,
    Submit,
    View
}