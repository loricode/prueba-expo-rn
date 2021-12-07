import { ResultResponse } from '../../../models/response/questions/question';
import { HttpService } from '../../HttpService';

export class QuestionRepository {
   
   public static getQuestions(): Promise<ResultResponse>{
     return HttpService.get('?amount=10&difficulty=hard&type=boolean')
   }

}