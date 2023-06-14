'use client';

import { MouseEventHandler, useState } from 'react';
import { Cross, Tick, checkbox } from '../../components/question/checkbox'
import { TextCursor, textarea } from '../../components/question/textarea'
import { Question, QuestionType } from '@/components/question/question';
import './styles.css';

export default function CreateSurvey() {

    const [questions, setQuestions] = useState<Question[]>([]);

    const removeQuestion = (index: number) => {
        const copy = [...questions];
        copy.splice(index, 1);
        setQuestions(copy);
    }

    const addQuestion = (type: QuestionType): MouseEventHandler => (e) => {
        e.preventDefault();
        setQuestions([...questions, { type, prompt: '' }])
    }

    return <main>
        <form action="/api/create-survey" method="post">

            {questions.map((q, i) => {
                const remove: MouseEventHandler = (e) => {
                    e.preventDefault();
                    removeQuestion(i);
                }

                switch (q.type) {
                    case 'checkbox':
                        return <checkbox.Create id={i.toString()} remove={remove} key={i} />
                    case 'textarea':
                        return <textarea.Create id={i.toString()} remove={remove} key={i} />
                }
            })}

            <div className="card">
                <button className="add" onClick={addQuestion('checkbox')}><Tick /><Cross /></button>
                <button className="add" onClick={addQuestion('textarea')}><TextCursor /></button>
                <button type="submit">Create survey</button>
            </div>

        </form>
    </main>
}