import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // For using icons

const HomeScreen = ({ navigation }) => {
  
  return (
    <ImageBackground
      source={require('./assets/Image/bg_weather.png')} // Path to your bg_weather.png image
            style={styles.container}
    >
    <View style={styles.container}>
     

      {/* Scrollable Content */}
      <ScrollView style={styles.content}>

         {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Welcome, Mate!</Text>
        <Text style={styles.subTitle}>Your daily weather forecast</Text>
      </View>

        {/* Weather Info Section */}
        
        <View style={styles.weatherInfoSection}>
          <Image source={require('./assets/bolt-isolated 2.png')} style={styles.Imagesun} />
          <View style={styles.weatherCard}>
            
            <Text style={styles.temperatureText}>29°C</Text>
            <Text style={styles.weatherConditionText}>Monday Sunny</Text>
            
            <Text style={styles.forecastText1}>Celcuis</Text>
          
          </View>
        </View>
              


             {/* Weather Section */}
              <View style={styles.weatherContainer}>
                <Text style={styles.weatherheading}>Weather</Text>
                <View style={styles.itemRow}>
                  <View style={styles.Weather_box}>
                    <Icon name="water" size={24} color="#00bcd4" style={styles.Icon} />
                    <Text style={styles.dayLabel}>Humidity</Text>
                    <View style={styles.verticalLine}>
                      </View> 
                    <Text style={styles.temperature}>69%</Text>
                  </View>

                  <View style={styles.Weather_box}>
                    <Icon name="thermometer" size={24} color="#FF4649" style={styles.Icon} />
                    <Text style={styles.dayLabel}>Temperature</Text>
                    <View style={styles.verticalLine}>

                    </View>
                    <Text style={styles.temperature}>69°C</Text>
                  </View>
                  
                  <View style={styles.Weather_box}>
                    <Icon name="cloud" size={24} color="#2F96F4" style={styles.Icon} />
                    <Text style={styles.dayLabel}>Air Quality</Text>
                    <View style={styles.verticalLine}>
                      </View> 
                    <Text style={styles.temperature}>69°C</Text>
                  </View>
                  
                </View>
                
              </View>



       
      </ScrollView>
      </View>
      </ImageBackground>
    
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 14,
    color: '#fff',
    opacity: .8,
    textAlign: 'center',
  },
  content: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
  weatherInfoSection: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#296093', 
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 5,
    marginBottom: 30, 
    shadowColor: '#000',        
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 5,      
  },

  Imagesun:{
    width: 120,  
    height: 120,
    marginRight: 15,
    resizeMode: 'contain', 
  },
  weatherCard: {
    alignItems: 'center',
  },
  temperatureText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 5,
  },
  weatherConditionText: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 10,
  },
  forecastText1: {
    fontSize: 16,
    color: '#ffff',
    marginTop: 10,
    marginLeft: 100,
  },
 
 // Flexbox container for the weather section
weatherContainer: {
  paddingHorizontal: 15,
  marginBottom: 10,
  flex: 1,
},

// Heading for the weather section
weatherheading: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#fff',
  textAlign: 'center',
  marginBottom: 10,
},

// Flexbox container for the weather items in a row
itemRow: {
  flexDirection: 'column',  // Layout items in a row
  justifyContent: 'space-between', // Distribute items with space between them
  alignItems: 'center', // Center align vertically
  flexWrap: 'wrap',  // Allow items to wrap if necessary
}, 

// Box for individual weather information
Weather_box: {
  flexDirection: 'row',  // Layout items horizontally in a row
  width: '100%',  // Adjust width to allow items to fit side by side
  height: '80',
  backgroundColor: '#f9f9f9',
  padding: 20,
  borderRadius: 8,
  alignItems: 'center',  // Center items vertically
  marginBottom: 10,
  elevation: 4,
  shadowColor: '#000',
  shadowOpacity: 0.1,
  shadowRadius: 4,
  marginHorizontal: 0,
  marginVertical: 5,
},

// Day label text styling
dayLabel: {
  fontSize: 16,
  fontWeight: '600',
  color: '#333',

  textAlign: 'center',
  marginLeft: 10,  // Add some space between icon and label
},

// Icon styling
Icon: {
  fontSize: 35,
  marginRight: 35,  // Space between icon and label
},

// Temperature text styling
temperature: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#e94e77',
  textAlign: 'right',  // Align temperature to the right
  flex: 1,  // Allow the temperature text to take up the remaining space
},


});

export default HomeScreen;
