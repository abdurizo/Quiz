import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuestionInterface } from './models/quiz';
import { QuizService } from './services/quiz.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'quiz';
  questionInterface: QuestionInterface[] = [];
  constructor(private quizService: QuizService) {}
  async ngOnInit() {
    this.questionInterface = await this.quizService.getQuestions();
  }

  total: number = 0;
  userAnswers: number[] = [];

  // selectAnswer(questionIndex: number, score: number) {
  //   this.userAnswers[questionIndex] = score;
  // }

  getTotalScore(): number {
    return this.userAnswers.reduce((sum, score) => sum + (score || 0), 0);
  }
}
