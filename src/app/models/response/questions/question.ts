export type Results = {
   category:string,
   type:string,
   difficulty:string,
   question:string,
   correct_answer:string,
   incorrect_answers:string[]
};

export interface ResultResponse {
 
   data:{
      response_code:number,
      results:Results[]  
   } 
}  
