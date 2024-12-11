// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4cgr2YkdAgI59zQTFE3NIvTjNjjQCNB8",
  authDomain: "esp32-a7ae4.firebaseapp.com",
  databaseURL: "https://esp32-a7ae4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "esp32-a7ae4",
  storageBucket: "esp32-a7ae4.firebasestorage.app",
  messagingSenderId: "355685466840",
  appId: "1:355685466840:web:a1bdce939f95b07fc70dad",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { app, auth };
