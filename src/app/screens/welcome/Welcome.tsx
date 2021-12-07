import React from 'react';
import { StyleSheet,  View, Text, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';

export const Welcome = ({navigation}:any) => {
 
  const [loaded] = useFonts({
   RobotoLight: require('../../../../assets/fonts/RobotoLight.ttf'),
 });
 
 if (!loaded) {
   return null;
 }

   return (
    <View style={styles.container}>
       <View style={styles.sectionOne}>
          <Text style={styles.sectionOneTitle}>
             Welcome to the {"\n"}
             Trivia Challenge!
          </Text>
        </View>
        <View style={styles.sectionTwo}>
          <Text style={styles.sectionTwoTitle}>
             You will be presented {"\n"}
             with 10 True of False {"\n"}
             Questions.
         </Text>
        </View>
        <View style={styles.sectionThree}>
        <Text style={styles.sectionThreeTitle}>
             Can you score 100%?
          </Text>
        </View>
        <View style={styles.sectionFour}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.textButton}>begin</Text>
      </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
    </View>
   );
}

const styles = StyleSheet.create({
   container:{
    flex:1,
    paddingTop:33,
    alignItems: 'center',
   },
   sectionOneTitle:{
      textAlign:'center',
      fontSize:18,
      fontFamily:'RobotoLight',
      fontWeight:'bold'
   },
   sectionTwoTitle:{
      textAlign:'center',
      alignItems:'center',
      justifyContent:'center',
      fontSize:18,
      fontFamily:'RobotoLight',
      fontWeight:'600'
   },
   sectionThreeTitle:{
      textAlign:'center',
      alignItems:'center',
      justifyContent:'center',
      fontSize:18,
      fontFamily:'RobotoLight',
      fontWeight:'600'
   },
   button:{
      alignItems: "center",
      padding: 10
   },
   textButton:{
      fontSize:22,
      fontFamily:'RobotoLight',
      fontWeight:'700',
      color:'gray',
      textTransform:'uppercase'
   },
   sectionOne:{
      flex:1,
      justifyContent:'center'
    },
    sectionTwo:{
      flex:1,
      justifyContent:'center'
    },
    sectionThree:{
      flex:1,
      justifyContent:'center'
    },
    sectionFour:{
      width:"100%",
      flex:1,
      flexDirection:'column-reverse',
      paddingBottom:22
    }
});