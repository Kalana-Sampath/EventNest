// Import the functions you need from the SDKs you need
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from "firebase/app";
//@ts-ignore
import { getReactNativePersistence, initializeAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdwdBpABx2Jtf6ICHJVFjwctweTu5sz1Y",
  authDomain: "event-nest-479d8.firebaseapp.com",
  projectId: "event-nest-479d8",
  storageBucket: "event-nest-479d8.firebasestorage.app",
  messagingSenderId: "447473666406",
  appId: "1:447473666406:web:8c1411adeb1f3d466aa0a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
    persistence:getReactNativePersistence(ReactNativeAsyncStorage)
});
