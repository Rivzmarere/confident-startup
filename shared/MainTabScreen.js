import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { NavigationContainer, TabRouter } from '@react-navigation/native';
import Home from '../scr/components/Home/Home';  
import Canteen from '../scr/components/Canteen/Canteen';
import About from '../scr/components/Information/Information';
import ChatBox from '../scr/components/ChatBox/ChatBox';
import Settings from '../scr/components/Settings/Settings';
import Personalinfo from '../scr/components/Profile/PersonalInformation';
import Portal from '../scr/components/Profile/Portal';
import Enrolledcources from '../scr/components/Profile/Enrolledcources';
import Email from '../scr/components/Profile/Email';
import News from '../scr/components/news/news';
import canteenmenu from '../scr/components/Canteen/canteenmenu';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Login from '../scr/components/Login/Login'
import splash from '../Splash'
import { Header } from 'native-base';
import HomeGuest from '../scr/components/HomeGuest/HomeGuest'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const HomeStack =({navigation})=> {
    return (
      <Stack.Navigator screenOptions={{
        headerStyle:{
          backgroundColor:'#F5F8FA',
          
        }
      }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title:'Home',
          headerRight:() =>(
              <Icon.Button name="menu" size={25}
              color="#050339"
              backgroundColor="#F5F8FA" onPress={()=> navigation.openDrawer()}>
              </Icon.Button>  
          )
        }}/>
        <Stack.Screen
          name="News"
          component={News}
          options={{headerShown: true
          }
        }
          />
      </Stack.Navigator>
    );
  }
  
  function CanteenStack() {
    return (
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: 'black' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' }
          }}>
          <Stack.Screen
            name="Canteen"
            component={Canteen}
            options={{ headerShown: false}}/>
          <Stack.Screen name="canteenmenu"
          component={canteenmenu}
      options={{
        headerShown:false,}}/>
        </Stack.Navigator>
    );
  }
  
  function NewsStack() {
    return (
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: 'black' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' }
          }}>
          <Stack.Screen
            name="Chatbox"
            component={ChatBox}
            options={{ title: 'Chatbox' }}/>
        </Stack.Navigator>
    );
  }
  
  function SchoolsStack() {
    return (
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: 'black' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' }
          }}>
          <Stack.Screen
            name="Chatbox"
            component={ChatBox}
            options={{ title: 'Chatbox' }}/>
        </Stack.Navigator>
    );
  }
  const HomeTab =()=> {
    return (
    <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            activeTintColor: 'black',
            backgroundColor:'#D6E4FF'
          }}>
          <Tab.Screen
            name="Home"
            component={HomeStack}
            options={{
              headerShown: false,
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="home"
                  color={color}
                  size={size}
                />
              ),
            }}  />
          <Tab.Screen
            name="Canteen"
            component={CanteenStack}
            options={{
              tabBarLabel: 'Canteen',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="food"
                  color={color}
                  size={size}
                />
              ),
            }} />
          <Tab.Screen
            name="Clubs"
            component={NewsStack}
            options={{
              headerShown: false,
              tabBarLabel: 'Clubs',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="newspaper"
                  color={color}
                  size={size}
                />
              ),
            }}  />
          <Tab.Screen
            name="School"
            component={SchoolsStack}
            options={{
              headerShown: false,
              tabBarLabel: 'E-Learning ',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="school"
                  color={color}
                  size={size}
                />
              ),
            }}  />
        </Tab.Navigator>
        );
      }  

      const RootStackScreen =({navigation})=>{
        return (
           <Stack.Navigator headerMode='none'>
                <Stack.Screen name="splash"
                 component={splash}
                 options={{headerShown: false}}
                 />
                <Stack.Screen name="Login" 
                component={Login}
                options={{headerShown: false}}
                />
                <Stack.Screen name="Home" 
                component={HomeTab}
                options={{headerShown: false}}
                />
              </Stack.Navigator> 
        );
      }
      export default RootStackScreen
  


