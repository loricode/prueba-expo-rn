import { createContext } from "react";
import { Answer } from "../../../models/answers/answer";
import { Results } from '../../../models/response/questions/question';

export type Context = {
  state: { 
    answers:Answer[],
    results:Results[]
  },
  dispatch: (action:{ type: string, payload?: any}) => void
};

export const questionContext = createContext<Context>({
  state: {
   answers:[],
   results:[]
  },
  dispatch: () => {}
});