import { checkbox } from '../../components/question/checkbox'
import './create.css';

export default function CreateSurvey() {
    return <main>
        <form action="/api/create-survey" method="post">
            <checkbox.Create id="1" />

            <button type="submit">Create</button>

        </form>
    </main>
}