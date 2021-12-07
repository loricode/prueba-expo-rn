import React, { useReducer } from 'react';

import { AppRouter } from './src/app/routers/AppRouter';

import { questionContext } from './src/app/store/contexts/question/questionContext';
import { questionReducer } from './src/app/store/reducers/question/questionReducer';

import { Results } from './src/app/models/response/questions/question';
import { Answer } from './src/app/models/answers/answer';

export type State = {
  answers:Answer[],
  results:Results[]
};


export const initialState:State = {
  answers:[],
  results:[]
};

export default function App() {

  const [state, dispatch] = useReducer(questionReducer, initialState);

  return (
    <questionContext.Provider value={{state, dispatch}}>
     <AppRouter />
    </questionContext.Provider>
  );
}
