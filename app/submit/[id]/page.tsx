import { checkbox } from '@/components/question/checkbox';
import { textarea } from '@/components/question/textarea';
import { Question } from '@/components/question/question';

import prisma from '@/lib/prisma';

export default async function SubmitSurvey({ params }: { params: { id: string } }) {
    const id = parseInt(params.id);

    const survey = await prisma.surveys.findFirst({ where: { id } });
    if (survey == null) throw new Error();

    const questions = survey.content as Question[];
    return <main>
        <form action={`/api/submit-survey?id=${id}`} method='POST'>
            {questions.map(({ type, prompt }, i) => {
                switch (type) {
                    case 'checkbox':
                        return <checkbox.Submit prompt={prompt} id={i.toString()} key={id} />;
                    case 'textarea':
                        return <textarea.Submit prompt={prompt} id={i.toString()} key={id} />;
                }
            })}
            <div className="card">
                <button type='submit'>Submit</button>
            </div>
        </form>
    </main>
}