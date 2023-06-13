import Link from 'next/link';
export default function Submitted() {
    return <main>
        <h1>Success!</h1>
        <p>Thank you for your time</p>

        <Link href="/create">Create your own survey...</Link>
    </main>
}