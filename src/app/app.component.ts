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
  warningMessage: string = '';
  userAnswers: number[] = [];

  // selectAnswer(questionIndex: number, score: number) {
  //   this.userAnswers[questionIndex] = score;
  // }

  getTotalScore(): number {
    const totalScore = this.userAnswers.reduce(
      (sum, score) => sum + (score || 0),
      0,
    );

    if (totalScore < 2) {
      this.warningMessage = 'Сизда гиперактив қовуқ йўқ';
    } else if ((this.userAnswers[2] || 0) < 2) {
      this.warningMessage = 'Сизда гиперактив қовуқ йўқ';
    } else if (totalScore >= 3 && totalScore <= 5) {
      this.warningMessage = 'Сизда гиперактив қовуқ енгил даражада';
    } else if (totalScore >= 6 && totalScore <= 11) {
      this.warningMessage = 'Сизда гиперактив қовуқ ўрта даражада';
    } else if (totalScore >= 12) {
      this.warningMessage = 'Сизда Гиперактив қовуқ оғир даражада';
    }

    // if ((this.userAnswers[2] || 0) < 2) {
    //   this.warningMessage =
    //     '3-savol bo‘yicha tanlangan javob balli 2 dan kichik!';
    // } else {
    //   this.warningMessage = '';
    // }

    return totalScore;
  }
}
