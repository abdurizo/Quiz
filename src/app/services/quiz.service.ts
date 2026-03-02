import { Injectable } from '@angular/core';
import { QuestionInterface } from '../models/quiz';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  url = 'http://localhost:3000/questions';
  /** */
  async getQuestions(): Promise<QuestionInterface[]> {
    const date = await fetch(this.url);
    return (await date.json()) ?? [];
  }
}
