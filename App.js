import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Profile from './Screens/Profile';
import Signup from './Screens/Signup';
import ServicesPage from './Screens/ServicesPage';
import Appointment from './Screens/Appointment';
import Welcome from './Screens/Welcome';
import Home from './Screens/Home';
import Feedback from './Screens/Feedback';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Login') {
            iconName = focused
              ? 'ios-log-in'
              : 'ios-log-in-outline';
          } else if (route.name === 'Home') {
            iconName =  'ios-home';
          }
          else if (route.name === 'Feedback'){
            iconName = 'ios-chatbox';
          }
          else if (route.name === 'Appointment'){
            iconName = 'ios-calendar';
          }
          else if (route.name === 'Services'){
            iconName = 'ios-cut-outline';
          }
          else if (route.name === 'Login'){
            iconName = 'ios-log-in';
          }
          else if (route.name === 'Profile'){
            iconName = 'ios-person';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'gray',
        tabBarInactiveTintColor: '#FF69B4',
      })}>
     <Tab.Screen name="Login" component={Welcome} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Services" component={ServicesPage} />
      <Tab.Screen name="Appointment" component={Appointment} />
      <Tab.Screen name="Feedback" component={Feedback} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
