import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const UserAccountScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Profile Image */}
      <Image
        source={require('./assets/Image/anagap.png')} // Replace with your logo image path
        style={styles.profileImage}
      />

      {/* Profile Information */}
      <View style={styles.profileContainer}>
        <Text style={styles.profileInfo}>JOHN LOYD KUPAL</Text>

        {/* Edit Profile Button */}
        <TouchableOpacity
          style={styles.editProfileButton}
          onPress={() => navigation.navigate('EditProfile')}
        >
          <Icon name="edit" size={20} color="white" />
          <Text style={styles.editProfileButtonText}> Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Navigation Buttons */}
      <View style={styles.buttonContainer}>
        {/* Home Button */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Icon name="home" size={24} color="#2F96F4" />
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>

        {/* About Button */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('About Us')}>
          <Icon name="dataset" size={24} color="#2F96F4" />
          <Text style={styles.buttonText}>About</Text>
        </TouchableOpacity>

        {/* Logout Button */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Icon name="logout" size={24} color="red" />
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f8',
    padding: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 150, // Circular image
    bottom: 100,
    borderWidth: 2,
    borderColor: '#ddd', // Light border for the image
  },
  profileContainer: {
    alignItems: 'center',
    bottom: 100,
  },

  // Style for the Edit Profile Button
  editProfileButton: {
    backgroundColor: '#2F96F4', // Button background color
    height: 40, // Button height
    width: 180, // Width of the button
    borderRadius: 15, // Rounded corners for the button
    marginTop: 10, // Space above the button
    justifyContent: 'center', // Center the text vertically
    alignItems: 'center', // Center the text horizontally
    flexDirection: 'row', // Align icon and text in a row
  },
  editProfileButtonText: {
    color: 'white', // Text color
    fontSize: 16,
    fontWeight: 'bold',
  },

  profileInfo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 8,
  },
  buttonContainer: {
    width: '100%',
  },
  button: {
    backgroundColor: 'rgba(10, 10, 60, 0.1)', // Transparent button background
    height: 60,
    width: '100%', // Make the button stretch across the screen
    paddingHorizontal: 20, // Horizontal padding to make it wider
    borderRadius: 5, // Rounded corners
    marginBottom: 10, // Space between buttons
    alignItems: 'center', // Center horizontally
    justifyContent: 'center', // Center vertically
    flexDirection: 'row', // Align icon and text in a row
  },
  
  buttonText: {
    color: 'black', // Button text color
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10, // Space between icon and text
    textAlign: 'left', // Center the text
    width: '80%', // Ensure text takes up available width (if needed)
  },
});

export default UserAccountScreen;
