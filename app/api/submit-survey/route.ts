import { QuestionType } from '@/components/question/question';
import prisma from '@/lib/prisma';
import { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
    const id = new URL(request.url).searchParams.get('id');
    const data = await request.formData();

    // TODO:
    // validate data

    const values = [...data.entries()].map(([type, value]) => {
        switch (type as QuestionType) {
            case 'checkbox':
                return value === 'on';
        }
    });

    await prisma.answers.create({
        data: {
            survey_id: parseInt(id!),
            content: values
        }
    });

    return new Response(null, {
        status: 302,
        headers: {
            location: '/submitted'
        }
    });
};