import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image, ImageBackground } from 'react-native';


const SignUpScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    

    const handleLogin = () => {
            navigation.navigate('Login'); // Navigate to Login
    };

    const handleSignUp = () => {
        navigation.navigate('Login'); // Navigate to Sign Up screen
    };

    return (

        <ImageBackground
            source={require('./assets/Image/bg2_weather.png')} // Path to your bg_weather.png image
            style={styles.container}
        >
        <View style={styles.container}>

            <View style={styles.Headings_container}>
            <Text style={styles.headings}>Create an account!</Text>
            <Text style={styles.subheadings}>Connect with your weather update!</Text>
            </View>

            <View style={styles.formContainer}>

                <Text style={styles.label}>Email Address</Text>
                    
                    <TextInput
                        placeholder="Enter your email"
                        value={username}
                        onChangeText={setUsername}
                        style={[styles.input]}               
                    placeholderTextColor="#AFAFAF" // Change placeholder text color
                    />
                    
                <Text style={styles.label}>Username</Text>

                <TextInput
                    placeholder="Enter your username"
                    value={username}
                    onChangeText={setUsername}
                    style={[styles.input]}               
                   placeholderTextColor="#AFAFAF" // Change placeholder text color
                />

                <Text style={styles.label}>Password</Text>

                <TextInput
                    placeholder="Enter your password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    style={[styles.input]}
                    placeholderTextColor="#AFAFAF" 
                />
               

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                
                
                <View style={styles.loginWithContainer}>
                    <View style={styles.line}></View>
                    <Text style={styles.loginWithText}>Or with</Text>
                    <View style={styles.line}></View>
                </View>

                <View style={styles.socialButtonContainer}>
                 
                    <TouchableOpacity style={styles.socialButton}>
                        <Image
                            source={require('./assets/Facebook-Icon.png')} 
                            style={styles.socialIcon}
                        />
                        <Text style={styles.socialButtonText}>Facebook</Text>
                    </TouchableOpacity>

                   
                    <TouchableOpacity style={styles.socialButton}>
                        <Image
                            source={require('./assets/Google-Icon.png')}
                            style={styles.socialIcon}
                        />
                        <Text style={styles.socialButtonText}>Google</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
            
            <View style={styles.signinContainer}>
                <Text style={styles.signin}>Already have an account? </Text>
                <TouchableOpacity onPress={handleSignUp}>
                    <Text style={styles.signinBlue}>Sign In</Text>
                </TouchableOpacity>
            </View>
            
        </View>
        </ImageBackground>
    );
};
            
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
   
    
    signinContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        top: 100,
    },

    Headings_container:{
        position: 'relative',
        bottom: 50,
        right:25,
    },

    headings: {
        fontSize: 30,
        color: '#000000',
        fontWeight: 700,
    },

    subheadings:{
        color: '#000000',
        fontSize: 13,
        marginBottom: 50,
    },

    label: {
        color: '#000000',
        fontWeight: 600,
    },

    signin: {
        color: 'Black',
    },

    signinBlue: {
        fontWeight: 'bold',
        color: '#2F96F4',
    },

    formContainer: {
        width: '100%',
        paddingHorizontal: 16,
        position: 'relative',
        bottom: 80,
    },

    input: {
        height: 45,
        borderColor: '#2F96F4',
        color: 'Black', 
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 8,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
    },


    button: {
        height: 40,
        backgroundColor: '#2F96F4',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 0,
    }, 

    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
      // For error
    error: {
        position: 'relative',
        bottom: 20,
        color: 'red',
        alignSelf: 'center',
    },

    // Styles for the "Log in with" section and lines
    loginWithContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        marginVertical: 10, 
        top: 25,
    },
    line: {
        height: 1,
        backgroundColor: '#000000',
        flex: 1, 
        marginHorizontal: 10, 
    },
    loginWithText: {
        fontSize: 12,
        color: '#000000', 
        fontWeight: 'bold',
        
    },

   // New styles for the social buttons
    socialButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        marginTop: 10,
    },
    socialButton: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF', 
        paddingVertical: 10,
        paddingHorizontal: 15,
        height: 45,
        borderRadius: 5,
        alignItems: 'center',
        top: 50,
        justifyContent: 'center',
        width: '48%', 

        elevation: 5, //Add a shadow
    },
    socialButtonText: { color: '#000000', marginLeft: 10, fontSize: 14 },

});

export default SignUpScreen;
