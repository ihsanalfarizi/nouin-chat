// Import functions needed from the SDKs 
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, doc, deleteDoc, updateDoc } from "firebase/firestore";

//  Firebase configuration
const firebaseConfig = { 
  apiKey : "AIzaSyBvddSALckdYZhqXd49LcjxDhpsYgPwQvk" , 
  authDomain : "instantchat-d3442.firebaseapp.com" , 
  databaseURL : "https://instantchat-d3442-default-rtdb.firebaseio.com" , 
  projectId : "instantchat-d3442" , 
  storageBucket : "instantchat-d3442.appspot.com" , 
  messagingSenderId : "630373673183" , 
  appId : "1:630373673183:web:f994af5b8a6fbd8a0f616a" 
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Function to delete a message
export const deleteMessage = async (messageId) => {
  try {
    const messageRef = doc(collection(db, "messages"), messageId);
    await deleteDoc(messageRef);
    console.log('Message deleted successfully.');
  } catch (error) {
    console.error('Error deleting message:', error);
  }
};

// Function to update a message
export const updateMessage = async (messageId, newText) => {
  try {
    const messageRef = doc(collection(db, "messages"), messageId);
    await updateDoc(messageRef, { text: newText });
    console.log('Message updated successfully.');
  } catch (error) {
    console.error('Error updating message:', error);
  }
};