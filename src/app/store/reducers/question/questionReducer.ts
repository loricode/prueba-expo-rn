import { Results  } from '../../../models/response/questions/question';
import { Action } from '../../../models/action/action';
import { ADD_QUESTIONS, ADD_ANSWER, REMOVE_ANSWER} from '../../actions'; 
import { Answer } from '../../../models/answers/answer';
 
 export type State = {
   answers:Answer[],
   results:Results[]
 };
 
 export function questionReducer( state:State, action:Action ){
   switch(action.type){
     case ADD_QUESTIONS:
        return {
          answers:[],
          results: action.payload
        }
      case ADD_ANSWER:
        return {
          ...state,
          answers: [ ...state.answers, action.payload]
       }
       case REMOVE_ANSWER:
        return {
          results:[],
          answers:[]
       } 
     default:
        return state   
   }
 }