import 'react-native-gesture-handler';
import * as React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, Header, HeaderTitle } from '@react-navigation/stack';
import Login from './scr/components/Login/Login';
import Home from './scr/components/Home/Home';



const Stack = createStackNavigator();

const App =() =>

{

    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" 
          component={Login}
          options={{
            headerShown: false
           }}
          />

          <Stack.Screen name="Home" 
          component={Home}
          options={{
            headerShown: false
           }}
          />
        </Stack.Navigator>
      </NavigationContainer>
   
    );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
})

export default App;