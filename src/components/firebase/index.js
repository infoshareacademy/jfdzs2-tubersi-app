import React, { Component } from 'react';
import firebase from 'firebase';

export default class Firebase extends Component {
    constructor(props) {
        super(props);
        firebase.initializeApp({
            apiKey: "AIzaSyBvyyQNj5_UnPvRNnza0lWF6txYwptYJig",
            authDomain: "tubersi-sign-in-sign-out.firebaseapp.com",
            databaseURL: "https://tubersi-sign-in-sign-out.firebaseio.com",
            projectId: "tubersi-sign-in-sign-out",
            storageBucket: "tubersi-sign-in-sign-out.appspot.com",
            messagingSenderId: "84643872330"
        });  
    }

    componentDidMount() {
        this.props.setReferenceFirebase(firebase);
        let databaseUsers = firebase.database().ref('users');
        databaseUsers.on("value", this.downloadDatabase, this.errData);
    }

    downloadDatabase = (data) => {
        const retrievedObject = localStorage.getItem('tubersi');
        var statusTubersi = JSON.parse(retrievedObject);
        let scores = data.val();
        let keys = Object.keys(scores);
        let allScore = [];
        for(let i = 0; i < keys.length; i++) {
               allScore.push(scores[keys[i]]);
        }
        this.props.loadDataBaseUsers(allScore);
    }

    errData(err) {
        console.log(err);
    }

    render() {
        return null;
    }
}