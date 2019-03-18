import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import TestComponent from './components/TestComponent';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyB6pdx3FGs-eXrMxNOaHny3HoItdYjWFLQ",
    authDomain: "bloc-chat-react-389c0.firebaseapp.com",
    databaseURL: "https://bloc-chat-react-389c0.firebaseio.com",
    projectId: "bloc-chat-react-389c0",
    storageBucket: "bloc-chat-react-389c0.appspot.com",
    messagingSenderId: "518982602301"
  };
  firebase.initializeApp(config);

  //  not sure about the following
//  <script src="https://www.gstatic.com/firebasejs/5.8.6/firebase.js"></script>

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         firebase: firebase,
         testValue1: 1

      };

    }  //end constructor


  render() {
    return (
      <div className="App">Bloc Chat
         <RoomList roomList={this.props}  />
      </div>

    );// close return
  }//close render
}//close component


export default App;

console.log(TestComponent.render);
console.log(firebase);
 var roomsRef = firebase.database().ref().child('_rooms');
 roomsRef.on('value', snap => console.log(snap.val()));

 var roomsRef2 = firebase.database().ref('_rooms');
 roomsRef2.on('child_added', snapshot => {
       const room = snapshot.val();
       room.key = snapshot.key;

     });
console.log(roomsRef2);
