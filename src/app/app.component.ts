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
  // title = '';
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
      this.warningMessage = 'Sizda giperaktiv qovuq yo‘q';
    } else if ((this.userAnswers[2] || 0) < 2) {
      this.warningMessage = 'Sizda giperaktiv qovuq yo‘q';
    } else if (totalScore >= 3 && totalScore <= 5) {
      this.warningMessage = 'Sizda giperaktiv qovuq yengil darajada';
    } else if (totalScore >= 6 && totalScore <= 11) {
      this.warningMessage = 'Sizda giperaktiv qovuq o‘rta darajada';
    } else if (totalScore >= 12) {
      this.warningMessage = 'Sizda Giperaktiv qovuq og‘ir darajada';
    }

    return totalScore;
  }
}
