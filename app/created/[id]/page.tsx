import Link from "next/link";
import './styles.css';

export default function Created(props: { params: { id: string } }) {
    const { id } = props.params;
    return <main className="created">
        <h1>Success!</h1>
        <div className="card">
            <ul>
                <li><Link href={`/submit/${id}`} target="_blank">Fill out the survey</Link></li>
                <li><Link href={`/view/${id}`}>View the results</Link></li>
            </ul>
        </div>
    </main>
}