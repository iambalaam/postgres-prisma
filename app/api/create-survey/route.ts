import prisma from '@/lib/prisma';
import { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
    const data = await request.formData();

    // TODO:
    // validate data

    const questions = [...data.entries()]
        .map(([type, prompt]) => ({ type, prompt } as { type: string, prompt: string }));

    const survey = await prisma.surveys.create({
        data: { content: questions }
    });

    return new Response(null, {
        status: 302,
        headers: {
            location: `/created/${survey.id}`
        }
    });
};