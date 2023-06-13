import Link from "next/link";

export default function Created(props: { params: { id: string } }) {
    const { id } = props.params;
    return <main>
        <h1>Success!</h1>
        <Link href={`/submit/${id}`} target="_blank">Fill out the survey</Link>
        <Link href={`/view/${id}`}>View the results</Link>
    </main>
}