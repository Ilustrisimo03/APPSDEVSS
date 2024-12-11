import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image, ImageBackground, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Make sure to install this package for the back icon
import Icon from "react-native-vector-icons/MaterialIcons";

const EditProfile = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const handleSave = () => {
    if (newPassword === confirmNewPassword) {
      Alert.alert("Profile Saved", "Your profile has been successfully saved.");
    } else {
      Alert.alert("Error", "Passwords do not match.");
    }
  };

  const handleCancel = () => {
    Alert.alert("Cancel Successfully", "You have successfully canceled the action.");
  };

  const handleBack = () => {
    navigation.goBack(); // Navigate back to "My Account" screen
  };

  return (
    <ImageBackground source={require("./assets/Image/bg_weather.png")} style={styles.container}>
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
          <Image source={require("./assets/Image/anagap.png")} style={styles.profileImage} />
        </View>
        <View style={styles.Username_container}>
          <Text style={styles.usernameprofile}>username</Text>
          <Text style={styles.useremail}>AnagapPogi@gmail.com</Text>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            placeholder="Change your username"
            value={username}
            onChangeText={setUsername}
            style={styles.input}
            placeholderTextColor="#AFAFAF"
          />

          <Text style={styles.label}>Email Address</Text>
          <TextInput
            placeholder="Change your email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            placeholderTextColor="#AFAFAF"
          />

          <Text style={styles.label}>New Password</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Change your new password"
              value={newPassword}
              onChangeText={setNewPassword}
              secureTextEntry={!showPassword}
              style={styles.input}
              placeholderTextColor="#AFAFAF"
            />
            <TouchableOpacity onPress={togglePasswordVisibility} style={styles.iconWrapper}>
              <Icon name={showPassword ? "visibility" : "visibility-off"} size={24} color="#AFAFAF" />
            </TouchableOpacity>
          </View>

          <Text style={styles.label}>Confirm New Password</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Confirm your new password"
              value={confirmNewPassword}
              onChangeText={setConfirmNewPassword}
              secureTextEntry={!showConfirmPassword}
              style={styles.input}
              placeholderTextColor="#AFAFAF"
            />
            <TouchableOpacity onPress={toggleConfirmPasswordVisibility} style={styles.iconWrapper}>
              <Icon name={showConfirmPassword ? "visibility" : "visibility-off"} size={24} color="#AFAFAF" />
            </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleSave}>
              <Text style={styles.buttonText}>Save </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleCancel}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 10,
    zIndex: 1,
  },
  Headings_container: {
    position: "relative",
    textAlign: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  headings: {
    fontSize: 30,
    color: "#fff",
    fontWeight: 700,
  },
  subheadings: {
    color: "#fff",
    fontSize: 13,
  },

  Username_container: {
    textAlign: "center",
    alignItems: "center",
    marginBottom: 100,
  },
  usernameprofile: {
    fontSize: 24,
    color: "#fff",
    fontWeight: 700,
  },
  useremail: {
    color: "#fff",
    fontSize: 13,
  },
  label: {
    color: "#fff",
    fontWeight: 600,
  },

  formContainer: {
    width: "100%",
    paddingHorizontal: 16,
    position: "relative",
    bottom: 80,
  },
  input: {
    height: 45,
    borderColor: "#2F96F4",
    color: "Black",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
  },

  buttonContainer: {
    flexDirection: "row", // Align children horizontally
    justifyContent: "flex- start", // Optional: Add space between the buttons (can use 'center' or 'flex-start' if needed)
    marginTop: 5, // Adjust as needed
    marginBottom: 0,
  },
  button: {
    height: 40,
    width: 100,
    backgroundColor: "#fff",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 30, // Space between buttons
    marginRight: 25, // Space between buttons
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 10,
  },
  buttonText: {
    color: "#2F96F4",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },

  signinBlue: {
    fontWeight: "bold",
    color: "#022341",
  },
  profileImageContainer: {
    borderRadius: 80,
    borderWidth: 3,
    borderColor: "#fff",
    alignSelf: "center",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  inputWrapper: {
    position: "relative",
    marginBottom: 10,
  },
  iconWrapper: {
    position: "absolute",
    left: 270,
    top: "50%",
    transform: [{ translateY: -17 }],
  },
});

export default EditProfile;
