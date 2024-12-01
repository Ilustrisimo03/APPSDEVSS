import React from 'react';
import { ScrollView, View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';

// Add image paths relative to the assets folder
const teamMembers = [
  { id: 1, name: 'Geanga', description: 'Lorem.', image: require('./assets/Image/Geanga.png') },
  { id: 2, name: 'Dinolan', description: 'Lorem.', image: require('./assets/Image/Dinolan.png') },
  { id: 3, name: 'Laison', description: 'Lorem.', image: require('./assets/Image/Laison.png') },
  { id: 4, name: 'Tamsi', description: 'Lorem.', image: require('./assets/Image/Geanga.png') },
  { id: 5, name: 'Lahay Lahay', description: 'Lorem.', image: require('./assets/Image/lahaylahay.png') },
  { id: 6, name: 'Anagap', description: 'Lorem', image: require('./assets/Image/anagap.png') },
  { id: 7, name: 'Cabarrubias', description: 'Lorem', image: require('./assets/Image/Geanga.png') },
  { id: 8, name: 'Del Pilar', description: 'Lorem', image: require('./assets/Image/Delpilar.png') },
  { id: 9, name: 'Ilustrisimo', description: 'Lorem', image: require('./assets/Image/Ilustrisimo.png') },
  { id: 10, name: 'Umbay', description: 'Lorem', image: require('./assets/Image/Geanga.png') },
];

const AboutUsScreen = () => {
  const handleMorePress = (name) => {
    // Handle the button press here (e.g., navigate to a new screen or show more info)
    alert(`More information about ${name}`);
  };

  return (
    <ImageBackground
      source={require('./assets/Image/bg2_weather.png')}  // Replace with your asset path
      style={styles.background}
      resizeMode="cover"  // Ensures the background covers the whole screen
    >
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Text style={styles.heading}>Meet Our Team</Text>
        <View style={styles.gridContainer}>
          {teamMembers.map((member) => (
            <View key={member.id} style={styles.card}>
              {/* Display the team member image */}
              <Image source={member.image} style={styles.cardImage} />
              <Text style={styles.cardTitle}>{member.name}</Text>
              <Text style={styles.cardDescription}>{member.description}</Text>
              
              {/* More button */}
              <TouchableOpacity style={styles.moreButton} onPress={() => handleMorePress(member.name)}>
                <Text style={styles.moreButtonText}>More</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',  // Centering the content vertically
    padding: 20,  // Padding around the screen
  },
  scrollViewContainer: {
    alignItems: 'center',        // Center content horizontally
  },
  heading: {
    fontSize: 32,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
    letterSpacing: 1.5,          // Slight letter spacing for better readability
  },
  gridContainer: {
    flexDirection: 'row',        // Arrange items in rows
    flexWrap: 'wrap',            // Wrap items to next row when needed
    justifyContent: 'space-between', // Space between the items for even distribution
    width: '100%',               // Full width for proper wrapping
  },
  card: {
    width: '48%',                // Each card takes 48% of the width for two columns with space between them
    flexDirection: 'column',     // Arrange items in column inside the card
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Light transparency for background
    borderRadius: 10,            // Softer rounded corners
    padding: 15,
    marginVertical: 10,          // Vertical spacing between rows
    shadowColor: '#72B8F8',         // Shadow for depth
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,                // Android shadow support
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 40,           
    marginBottom: 10,
    alignSelf: 'center',        
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginBottom: 8,           // Space below the name
  },
  cardDescription: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    marginBottom: 10,           // Space below the description
  },
  moreButton: {
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#72B8F8',
    borderRadius: 10,         
    shadowColor: '#000',        
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 5,       
  },
  moreButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default AboutUsScreen;
