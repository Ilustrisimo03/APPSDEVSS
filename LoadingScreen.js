import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, Dimensions } from 'react-native';


const LoadingScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('./assets/Image/bg_weather.png')} // Path to your bg_weather.png image
      style={styles.imageBackground}
    >
      <View style={styles.container}>
        {/* Image or Logo */}
        <Image
          source={require('./assets/Image/ulap.png')} // Replace with your logo image path
          style={styles.logo}
          resizeMode="contain" // Ensures the logo scales without distortion
        />

        {/* Text between logo and button */}
        <Text style={styles.text}>Smart Weather Station</Text>

        {/* Custom Button to go to Login */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const { width, height } = Dimensions.get('window'); // Get the screen dimensions for responsiveness

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1, // Ensures the image background covers the entire screen
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center', // Centers content horizontally
  },
  container: {
    justifyContent: 'center', // Centers content vertically in the container
    alignItems: 'center', // Centers content horizontally
    width: '100%', // Full width of the screen
    padding: 20, // Added padding to avoid content being too close to edges
  },
  logo: {
    width: width * 0.8, // Logo width as 60% of screen width for responsiveness
    height: undefined, // Height will be determined by aspect ratio
    aspectRatio: 1, // Maintains the aspect ratio of the logo
    marginBottom: 30, // Space between the logo and the button
  },

  text: {
    color: '#fff', // White text color for visibility on the background
    textAlign: 'center',
    bottom: 50,
    fontSize: 35, // Text size
    fontWeight: 'bold', // Make text bold
    marginVertical: 15, // Space between the logo and the button
    textShadowColor: 'gray', // Shadow color for the text
    textShadowOffset: { width: 0, height: 1 }, // Offset of the shadow
    textShadowRadius: 2, // Blur radius of the shadow
  },
  button: {
    backgroundColor: '#FDFBFB', // Button background color
    borderRadius: 10, // Rounded corners
    paddingVertical: 12, // Vertical padding for button height
    paddingHorizontal: 20, // Horizontal padding for button width
    width: '80%', // Button width as 80% of screen width
    alignItems: 'center', // Centers the text horizontally
    justifyContent: 'center', // Centers the text vertically
    marginTop: 20, // Space between logo and button
    shadowColor: '#000', // Shadow color for the button
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.2, // Shadow opacity
    shadowRadius: 4, // Shadow radius
    elevation: 3, // Elevation for Android shadow
  },
  buttonText: {
    color: '#2F96F4', // Button text color
    fontSize: 16, // Text size
    fontWeight: 'bold', // Bold text
  },
});

export default LoadingScreen;
