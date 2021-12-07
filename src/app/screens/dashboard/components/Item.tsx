import React, { useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { questionContext } from '../../../store/contexts/question/questionContext';
import { decode } from 'html-entities';

export const Item = ({item}:any) => {


   const { state } = useContext(questionContext);

   const isCorrect = (answer:string, id:string):boolean => {
       let success = false;
     
       if(state.results[Number(id)].correct_answer === answer){
         success = true
       }
      
      return success;
   }


   return (
      <View style={styles.container}>
         <Text style={styles.text}>
         {isCorrect(item.correct, item.id) ? '+' : '-'}  {decode(item.question)}
         </Text>
      </View>
   );
}

const styles = StyleSheet.create({
   container:{
      flex:1,
      padding:10,
      width:'100%'
   },
   text:{
     color:'black',
     fontSize:16
   },
 });