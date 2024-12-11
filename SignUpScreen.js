import React, { useState, useEffect } from "react";
import { auth } from "./firebaseConfiguration";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"; // Import MaterialIcons

const SignUpScreen = ({ navigation }) => {
  // State for toggling password visibility
  const handleLogin = () => {
    navigation.navigate("Login"); // Navigate to Login
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle the state for password visibility
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword); // Toggle the state for password visibility
  };

  // sign up function
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // toggle password
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // toggle confirm password

  // form validation
  const isFormValid = () => email.includes("@") && password == confirmPassword && password.length >= 8;

  const handleSignUp = async () => {
    if (!isFormValid()) {
      Alert.alert("Try again", "Please enter a valid email and matching passwords with at least 8 characters");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert("Success", "Account created successfully");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      navigation.navigate("Login");
    } catch (error) {
      Alert.alert("Error", `Error creating user: ${error.message}`);
    }
  };

  const handleSignIn = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/Image/bg_weather.png")} // Path to your bg_weather.png image
        style={styles.container}
      >
        <View style={styles.Headings_container}>
          <Text style={styles.headings}>Create an account!</Text>
          <Text style={styles.subheadings}>Connect with your weather update!</Text>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.label}>Email Address</Text>
          {/* email address input */}
          <TextInput
            placeholder="Enter your email"
            value={email}
            textContentType="emailAddress"
            onChangeText={setEmail}
            style={[styles.input]}
            placeholderTextColor="#AFAFAF" // Change placeholder text color
          />

          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordContainer}>
            {/* password input */}
            <TextInput
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword} // Toggle password visibility
              style={[styles.input, { paddingRight: 40 }]} // Add padding for the icon
              placeholderTextColor="#AFAFAF"
            />
            {/* toggle password visibility */}
            <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIconContainer}>
              <Icon name={showPassword ? "visibility" : "visibility-off"} size={24} color="#AFAFAF" />
            </TouchableOpacity>
          </View>

          <Text style={styles.label}>Confirm Password</Text>
          <View style={styles.passwordContainer}>
            {/* confirm password input */}
            <TextInput
              placeholder="Enter your password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!showConfirmPassword} // Toggle password visibility
              style={[styles.input, { paddingRight: 40 }]} // Add padding for the icon
              placeholderTextColor="#AFAFAF"
            />
            {/* toggle confirm password visibility */}
            <TouchableOpacity onPress={toggleConfirmPasswordVisibility} style={styles.eyeIconContainer}>
              <Icon name={showPassword ? "visibility" : "visibility-off"} size={24} color="#AFAFAF" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          <View style={styles.loginWithContainer}>
            <View style={styles.line}></View>
            <Text style={styles.loginWithText}>Or with</Text>
            <View style={styles.line}></View>
          </View>

          {/* Social Button */}
          <View style={styles.socialButtonContainer}>
            {/* Facebook Button */}
            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={require("./assets/Image/FB.png")} // Custom Facebook icon
                style={[styles.socialIcon, { width: 33, height: 33 }]} // Set fixed width and height
                resizeMode="contain" // Ensures the image doesn't stretch or distort
              />
              <Text style={styles.socialButtonText}>Facebook</Text>
            </TouchableOpacity>

            {/* Google Button */}
            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={require("./assets/Image/GOOGLEE.png")} // Custom Google icon
                style={[styles.socialIcon, { width: 30, height: 30 }]} // Set fixed width and height
                resizeMode="contain" // Ensures the image doesn't stretch or distort
              />
              <Text style={styles.socialButtonText}>Google</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.signinContainer}>
          <Text style={styles.signin}>Already have an account? </Text>
          <TouchableOpacity onPress={handleSignIn}>
            <Text style={styles.signinBlue}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    paddingTop: 50,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  signinContainer: {
    flexDirection: "row",
    justifyContent: "center",
    position: "relative",
    top: 100,
  },
  Headings_container: {
    width: "100%",
    marginTop: 80,
    paddingHorizontal: 20,
  },

  headings: {
    fontSize: 35,
    color: "#fff",
    fontWeight: 700,
  },
  subheadings: {
    color: "#fff",
    fontSize: 15,
    marginTop: 5,
  },

  label: {
    color: "#fff",
    fontWeight: 600,
    marginBottom: 5,
  },
  signin: {
    color: "#fff",
  },
  signinBlue: {
    fontWeight: "bold",
    color: "#f8c225",
  },
  forgotPassword: {
    textAlign: "right",
    fontWeight: "bold",
    color: "#f8c225",
    marginVertical: 10,
  },
  formContainer: {
    marginTop: 70,
    width: "100%",
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    borderColor: "#2F96F4",
    color: "Black",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: "#FFFFFF",
  },
  passwordContainer: {
    position: "relative",
  },
  eyeIconContainer: {
    position: "absolute",
    right: 5,
    top: 3,
    padding: 5,
  },
  button: {
    height: 40,
    backgroundColor: "#2F96F4",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 0,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  loginWithContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    top: 40,
  },
  line: {
    height: 1,
    backgroundColor: "#fff",
    opacity: 0.5,
    flex: 1,
    marginHorizontal: 10,
  },
  loginWithText: {
    fontSize: 12,
    color: "#fff",
    opacity: 0.5,
    fontWeight: "bold",
  },
  socialButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  socialButton: {
    flexDirection: "row",
    height: 40, // Height of the button
    backgroundColor: "#FFFFFF",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    top: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "48%", // Button width
    elevation: 5, // Shadow effect
  },
  socialButtonText: {
    color: "#000000",
    fontSize: 14,
  },
});

export default SignUpScreen;
