import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBvyyQNj5_UnPvRNnza0lWF6txYwptYJig",
    authDomain: "tubersi-sign-in-sign-out.firebaseapp.com",
    databaseURL: "https://tubersi-sign-in-sign-out.firebaseio.com",
    projectId: "tubersi-sign-in-sign-out",
    storageBucket: "tubersi-sign-in-sign-out.appspot.com",
    messagingSenderId: "84643872330"
};
 
const fire = firebase.initializeApp(config);
export default fire;