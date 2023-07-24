import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6b7E1osWPYqa9hi0XHmnyiz0bo1FoQ68",
  authDomain: "taskmanager-34c40.firebaseapp.com",
  projectId: "taskmanager-34c40",
  storageBucket: "taskmanager-34c40.appspot.com",
  messagingSenderId: "598168919030",
  appId: "1:598168919030:web:e51e47aa5b1ab74ff985d7"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
