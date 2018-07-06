/* eslint-disable */
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
        this.databaseUsers = firebase.database().ref('users');
        this.databaseChat = firebase.database().ref('chat');
    }

    componentDidMount() {
        this.props.setReferenceFirebase(firebase);
        this.databaseUsers.on("value", this.downloadDatabase, this.errData);
        this.databaseChat.on("value", this.downloadDataChat, this.errData);
    }

    downloadDatabase = (data) => {
        let scores = data.val();
        let keys = Object.keys(scores);
        let allScore = [];
        for(let i = 0; i < keys.length; i++) {
                if(!scores[keys[i]].id) {
                    this.databaseUsers.child(keys[i]).child('id').set(keys[i]);
                }
               allScore.push(scores[keys[i]]);
        }
        this.setActuallyUser(allScore);
        this.props.loadDataBaseUsers(allScore);
    }

    downloadDataChat = (data) => {
        let scores = data.val();
        let keys = Object.keys(scores);
        let allScore = [];
        for(let i = 0; i < keys.length; i++) {
           allScore.push(scores[keys[i]]);
        }
       this.props.loadDataBaseChat(allScore);
    }

    errData(err) {
        console.log(err);
    }

    setActuallyUser = (allScore) => {
        const retrievedObject = localStorage.getItem('tubersi');
        var statusTubersi = JSON.parse(retrievedObject);
        if(statusTubersi) {
            this.props.setActuallyUser(
                allScore.find((user) => {
                  return user.email === statusTubersi.email; 
                })
              )
        }
    }

    render() {
        return null;
    }
}