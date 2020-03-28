import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// npm install @react-navigation/native
//expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
//npm install @react-navigation/stack
// expo install expo-mail-composer

const AppStack = createStackNavigator();

import Detail  from './pages/Detail';
import Incidents from './pages/Incidents';

export default function Routes(){
  return(
    <NavigationContainer >
      <AppStack.Navigator screenOptions={{headerShown: false}} >
        <AppStack.Screen name="Incidents" component={Incidents}/>
        <AppStack.Screen name="Detail" component={Detail}/>
      </AppStack.Navigator>
    </NavigationContainer>

  );

}