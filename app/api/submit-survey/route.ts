import { QuestionType } from '@/components/question/question';
import prisma from '@/lib/prisma';
import { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
    const id = new URL(request.url).searchParams.get('id');
    const data = await request.formData();

    // TODO:
    // validate data

    // Horrible checkbox hack
    // If checkbox is unchecked it will not be sent
    // So we always prepend an unchecked one

    const values = [...data.entries()];
    const deduped = [];
    for (let i = 0; i < values.length; i++) {
        const [type, value] = values[i];
        switch (type as QuestionType) {
            case 'textarea':
                deduped.push(value.toString());
                break;
            case 'checkbox':
                if (value === 'on') {
                    deduped.push(true);
                    break;
                }
                if (value === 'off') {
                    // check it doesn't come before an 'on'
                    const [nextType, nextValue] = values[i + 1] || [];
                    if (!(nextType === 'checkbox' && nextValue == 'on')) {
                        deduped.push(false);
                        break;
                    }
                }
        }
    }

    await prisma.answers.create({
        data: {
            survey_id: parseInt(id!),
            content: deduped
        }
    });

    return new Response(null, {
        status: 302,
        headers: {
            location: '/submitted'
        }
    });
};