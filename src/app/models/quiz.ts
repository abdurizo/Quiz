export interface AnswerInterface {
  option: 'a' | 'b' | 'c';
  text: string;
  score: number;
}
export interface QuestionInterface{
    id:number;
    text:string; 
    answers: AnswerInterface[];  
}