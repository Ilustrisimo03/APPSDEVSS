import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Import your screens
import HomeScreen from './HomeScreen';  // Assuming you have a HomeScreen component
import AboutUsScreen from './AboutUsScreen'; // About Us screen
import UserAccountScreen from './UserAccountScreen'; // Settings screen

import LoginScreen from './LoginScreen';

// Create stack and tab navigators
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#2B71B1', // Tab bar background color
          borderTopWidth: 1,
          borderTopColor: '#ddd',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="home" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="About Us"
        component={AboutUsScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="info" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={UserAccountScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="settings" size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={TabNavigator} options={{ headerShown: false }}/>
        <Stack.Screen name="About" component={AboutUsScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Settings" component={UserAccountScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
