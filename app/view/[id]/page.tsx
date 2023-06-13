import { checkbox } from '@/components/question/checkbox';
import { Question } from '@/components/question/question';
import prisma from '@/lib/prisma'


export default async function ViewSurvey({ params }: { params: { id: string } }) {
    const id = parseInt(params.id);

    const [survey, answers] = await Promise.all([
        prisma.surveys.findFirst({ where: { id } }),
        prisma.answers.findMany({ where: { survey_id: id } })
    ]);

    if (!survey
        || survey.content == null
        || !answers.every((a) => (a != null))
    ) return <h1>uh oh</h1>;

    // Prisma typings failing here.
    // JSON values always returned as strings, runtime check above.
    const questions = survey.content as Question[];
    const responses = answers.map((answer) => answer.content as unknown[])

    return (questions)
        .map((question, i) => {
            switch (question.type) {
                case 'checkbox':
                    return <checkbox.View
                        prompt={question.prompt}
                        answers={responses.map((x) => x[i] as boolean)}
                    />
            }
        })
}