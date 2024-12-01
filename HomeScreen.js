import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // For using icons

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('./assets/Image/bg2_weather.png')} // Path to your bg_weather.png image
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

              {/* Forecast Section */}
              <View style={styles.forecastSection}>
                <Text style={styles.sectionTitle}>Forecast</Text>
                <View style={styles.forecastRow}>
                  <View style={styles.forecastCard}>
                    
                    <Text style={styles.forecastText}></Text>
                    <Text style={styles.forecastTemp}></Text>
                  </View>
                  <View style={styles.forecastCard}>
                    
                    <Text style={styles.forecastText}></Text>
                    <Text style={styles.forecastTemp}></Text>
                  </View>
                  <View style={styles.forecastCard}>
                    
                    <Text style={styles.forecastText}></Text>
                    <Text style={styles.forecastTemp}></Text>
                  </View>
                </View>
              </View>


                {/* Weather Section */}
                <View style={styles.weatherContainer}>
                  <Text style={styles.weatherheading}>Weather</Text>
                  <View style={styles.itemRow}>
                    <View style={styles.Weather_box}>
                    <Icon name="water" size={24} color="#00bcd4" style={styles.Icon} />
                      <Text style={styles.dayLabel}>Humadity</Text>
                      <Text style={styles.temperature}>69%</Text>
                    </View>
                    <View style={styles.Weather_box}>
                      <Text style={styles.dayLabel}></Text>
                      <Text style={styles.temperature}></Text>
                    </View>
                    <View style={styles.Weather_box}>
                    <Icon name="thermometer" size={24} color="#00bcd4" style={styles.Icon} />
                      <Text style={styles.dayLabel}>Temperature</Text>
                      <Text style={styles.temperature}>69°C</Text>
                    </View>
                    <View style={styles.Weather_box}>
                      <Text style={styles.dayLabel}></Text>
                      <Text style={styles.temperature}></Text>
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
    margin: 'auto',
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#eeeee',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
  },
  content: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
  weatherInfoSection: {
    width: '100%',
    height: 'auto',
    backgroundColor: 'rgba(10, 10, 60, 0.1)', 
    borderRadius: 15, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'flex-start', 
    padding: 15, 
    marginBottom: 30,
  
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
  forecastSection: {
    marginBottom: 30,
  },


  //FORECAST SECTION
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    padding:10,
    
  },
  forecastRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  forecastCard: {
    height: 150,
    alignItems: 'center',
    backgroundColor: 'rgba(10, 10, 60, 0.1)', 
    padding: 10,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
  },
  forecastText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  forecastTemp: {
    fontSize: 16,
    color: '#333',
  },
  

  // Container for the entire weather section
  weatherContainer: {
    padding: 10,
    marginBottom: 10,
  },

  // Heading for the weather section
  weatherheading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },

  // Flexbox container for the weather items in rows
  itemRow: {
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'space-between',
  },

  // Box for individual day weather information
  Weather_box: {
    width: '48%', 
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
    elevation: 4, 
    shadowColor: '#000', 
    shadowOpacity: 0.1, 
    shadowRadius: 4, 
  },

  // Day label text styling
  dayLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },

  // Temperature text styling
  temperature: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e94e77', 
    marginTop: 5,
  },

});

export default HomeScreen;
