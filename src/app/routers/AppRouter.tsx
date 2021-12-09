import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Welcome } from '../screens/welcome/Welcome';
import { Home } from '../screens/dashboard/home/Home';
import { Score } from '../screens/dashboard/score/Score';

const Stack = createNativeStackNavigator();

export const AppRouter = ( ) =>{
   
   return (
      <NavigationContainer>
      <Stack.Navigator>
        
      <Stack.Screen name="Welcome" component={Welcome} 
        options={{ title:'',  headerShown:false }}
      />

       <Stack.Screen options={{ title:'',  headerShown:false }}
        name="Home"
        component={Home}
       />

      <Stack.Screen options={{ title:'',  headerShown:false}}
        name="Score"
        component={Score}
       />
   
      </Stack.Navigator>
    </NavigationContainer>
   );
}