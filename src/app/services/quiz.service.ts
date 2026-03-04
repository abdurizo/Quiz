import { Injectable } from '@angular/core';
import { QuestionInterface } from '../models/quiz';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  url = 'assets/db.json';
  /** */
  async getQuestions(): Promise<QuestionInterface[]> {
    const response  = await fetch(this.url);
    const data = await response.json();
    return data.questions ?? [];
  }
}
