import { checkbox } from '../../components/question/checkbox'

export default function CreateSurvey() {
    return <main>
        <form action="/api/create-survey" method="post">
            <checkbox.Create id="1" />
            <checkbox.Create id="2" />

            <div className="card">
                <button type="submit">Create</button>
            </div>

        </form>
    </main>
}