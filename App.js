import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";

// Import your screens
import HomeScreen from "./HomeScreen";
import AboutUsScreen from "./AboutUsScreen";
import UserAccountScreen from "./UserAccountScreen";
import SignUpScreen from "./SignUpScreen";
import LoginScreen from "./LoginScreen";
import LoadingScreen from "./LoadingScreen"; // Import LoadingScreen
import EditProfile from "./EditProfile";

// Create stack and tab navigators
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Tab Navigator for HomeScreen, AboutUs, and MyAccount
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#fff", // Tab bar background color
          justifyContent: "center",
          height: 60,
          width: "100%", // Adjust width to center
          alignSelf: "center", // Center the tab bar horizontally
          borderTopWidth: 0, // Remove the top border (underline)
          borderTopColor: "transparent", // Ensure the top border color is transparent
        },
        tabBarLabelStyle: {
          textAlign: "center", // Center the label
          fontSize: 12, // Smaller font size for tab labels
          fontWeight: "bold", // Make tab label text bold
          tintColor: "#000", // White color for text
        },
        tabBarIconStyle: {
          width: 30, // Set fixed width for the icons
          height: 30, // Set fixed height for the icons
          tintColor: "#000", // White color for icons
          top: 5,
        },
        tabBarActiveTintColor: "#2F96F4", // Active tab icon and label color
        tabBarInactiveTintColor: "#585B60", // Inactive tab icon and label color

        tabBarShowLabel: true, // Show the label under the icons

        // Add background color when the tab is active

        tabBarInactiveBackgroundColor: "#fff", // White background for inactive tabs
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="home" size={size} color={color} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="About Us"
        component={AboutUsScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="dataset" size={size} color={color} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="My Account"
        component={UserAccountScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="face" size={size} color={color} />,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

// Main Stack Navigator
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Loading Screen is the first screen before authentication */}
        <Stack.Screen name="Loading" component={LoadingScreen} options={{ headerShown: false }} />
        {/* Authentication screens */}
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />

        {/* Main Application Screens */}

        <Stack.Screen
          name="Home"
          component={TabNavigator} // Use the TabNavigator for main app flow
          options={{ headerShown: false }}
        />
        <Stack.Screen name="About" component={AboutUsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="My Account" component={UserAccountScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name="Edit Profile"
          component={EditProfile} // Use the TabNavigator for main app flow
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
