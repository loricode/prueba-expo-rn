import React, { useEffect , useContext, useState } from 'react';

import { 
   StyleSheet,
   StatusBar,
   SafeAreaView,
   FlatList,
   Text,
   TouchableOpacity 
   } from 'react-native'
import { REMOVE_ANSWER } from '../../../store/actions/question/question';


   //context
import { questionContext } from '../../../store/contexts/question/questionContext';
import { Item } from '../components/Item';


export const Score = ({navigation}:any) => {

   const [ score, setScore ] = useState(0)
   const { state, dispatch } = useContext(questionContext);

   useEffect(()=>{
      myScore();
   },[])

   const myScore = () => {
  
      let count = 0;

      for(let i = 0; i< state.answers.length; i++){
         if( state.results[i].correct_answer === state.answers[i].correct ){
            count++
         }   
      }

      setScore(count);
   }


   const renderItem = ({ item }:any) => {
      return ( <Item item={item} /> );
  }

  const playAgain = () => {
     dispatch({ type:REMOVE_ANSWER })
     navigation.navigate('Welcome')
  }

   return (
      <SafeAreaView style={styles.container}>
         
         <Text style={styles.title}>You Scored { score } / { state.answers.length }</Text>

      <FlatList
        data={state.answers}
        renderItem={renderItem}
        keyExtractor={(_, key) => key.toString()}
      />

      <TouchableOpacity  
       style={styles.button}
       onPress={playAgain}
      >
         <Text style={styles.textButton}>play again?</Text>
      </TouchableOpacity>
        <StatusBar backgroundColor="white" />
      </SafeAreaView>
   );
}


const styles = StyleSheet.create({
   container:{
      flex:1,
      paddingTop:20
   },
   title:{
      textAlign:'center',
      paddingTop:10,
      fontSize:19    
   },
   textButton:{
      textAlign:'center',
      fontSize:16,
      marginBottom:5,
      textTransform:'uppercase'
   },
   button:{
      padding:12
   }
});