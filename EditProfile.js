import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image, ImageBackground, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';  // Make sure to install this package for the back icon

const EditProfile = ({ navigation }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    
    const handleSave = () => {
        if (newPassword === confirmNewPassword) {
            Alert.alert('Profile Saved', 'Your profile has been successfully saved.');
            navigation.goBack();  // Go back to "My Account" screen
        } else {
            Alert.alert('Error', 'Passwords do not match.');
        }
    };

    const handleBack = () => {
        navigation.goBack();  // Navigate back to "My Account" screen
    };

    return (
        <ImageBackground
            source={require('./assets/Image/bg_weather.png')} // Path to your bg_weather.png image
            style={styles.container}
        >
            <View style={styles.container}>
                <TouchableOpacity onPress={handleBack} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>

                <View style={styles.Headings_container}>
                    <Text style={styles.headings}>Edit Profile</Text>
                    <Text style={styles.subheadings}>Update your information below</Text>
                </View>

                {/* Image Section */}
                <View style={styles.profileImageContainer}>
                    <Image
                        source={require('./assets/Image/anagap.png')} // Path to your image
                        style={styles.profileImage}
                    />
                </View>

                <View style={styles.formContainer}>
                    {/* Full Name Section */}
                  
                    <View style={styles.nameFieldsContainer}>
                        <View style={styles.nameFieldWrapper}>
                            <Text style={styles.label}>First Name</Text>
                            <TextInput
                                placeholder="First Name"
                                value={firstName}
                                onChangeText={setFirstName}
                                style={styles.inputHalf}
                                placeholderTextColor="#AFAFAF"
                            />
                        </View>

                        <View style={styles.nameFieldWrapper}>
                            <Text style={styles.label}>Last Name</Text>
                            <TextInput
                                placeholder="Last Name"
                                value={lastName}
                                onChangeText={setLastName}
                                style={styles.inputHalf}
                                placeholderTextColor="#AFAFAF"
                            />
                        </View>
                    </View>


                    <Text style={styles.label}>Email Address</Text>
                    <TextInput
                        placeholder="Enter your email"
                        value={email}
                        onChangeText={setEmail}
                        style={styles.input}
                        placeholderTextColor="#AFAFAF"
                    />

                    <Text style={styles.label}>Username</Text>
                    <TextInput
                        placeholder="Enter your username"
                        value={username}
                        onChangeText={setUsername}
                        style={styles.input}
                        placeholderTextColor="#AFAFAF"
                    />

                    <Text style={styles.label}>New Password</Text>
                    <TextInput
                        placeholder="Enter your new password"
                        value={newPassword}
                        onChangeText={setNewPassword}
                        secureTextEntry
                        style={styles.input}
                        placeholderTextColor="#AFAFAF"
                    />

                    <Text style={styles.label}>Confirm New Password</Text>
                    <TextInput
                        placeholder="Confirm your new password"
                        value={confirmNewPassword}
                        onChangeText={setConfirmNewPassword}
                        secureTextEntry
                        style={styles.input}
                        placeholderTextColor="#AFAFAF"
                    />

                    <TouchableOpacity style={styles.button} onPress={handleSave}>
                        <Text style={styles.buttonText}>Save</Text>
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
    backButton: {
        position: 'absolute',
        top: 40,
        left: 10,
        zIndex: 1,
    },
    Headings_container: {
        position: 'relative',
        bottom: 20,
        right: 25,
    },
    headings: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 700,
    },
    subheadings: {
        color: '#fff',
        fontSize: 13,
    },
    label: {
        color: '#fff',
        fontWeight: 600,
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
    inputHalf: {
        height: 45,
        borderColor: '#2F96F4',
        color: 'Black',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 8,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        width: '100%',  // Ensure 100% width for now to fit label properly
    },
    nameFieldsContainer: {
        flexDirection: 'row',  // Align the name fields horizontally
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    nameFieldWrapper: {
        width: '48%',  // Ensure each field takes 48% width, leaving space in between
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
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    
    signinBlue: {
        fontWeight: 'bold',
        color: '#022341',
    },
    profileImageContainer: {
        borderRadius: 80, // Add borderRadius to the container for circular effect
        borderWidth: 3,  // Border around the image container
        borderColor: '#fff',  // Border color
        alignSelf: 'center',  // Align to the left 
        marginBottom: 120, // Space below the image
    },
    profileImage: {
        width: 100,  // Image width
        height: 100, // Image height
        borderRadius: 50,  // Make image circular (half of width/height)
    },
});

export default EditProfile;
