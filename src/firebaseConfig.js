import firebase from 'firebase/app';
import "firebase/auth";
//import "firebase/database";
// import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBVHh6KNOvJ6PRWBp7WI_jlGNmevwDAsgo",
    authDomain: "landingpagebytailwindcss.firebaseapp.com",
    projectId: "landingpagebytailwindcss",
    storageBucket: "landingpagebytailwindcss.appspot.com",
    messagingSenderId: "1097257654094",
    appId: "1:1097257654094:web:91af57d5b5707ea7feb01f"
  };
  let app;

if(firebase.apps.length === 0){

  app = firebase.initializeApp(firebaseConfig)

}else{
  app = firebase.app();

}

  export default firebaseConfig;