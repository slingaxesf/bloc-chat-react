import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';


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
      this.handleRoomClick = this.handleRoomClick.bind(this);
      this.state = {
         firebase: firebase,
         activeRoom: "1",
         testValue: ""
      };

    }  //end constructor


//  handleRoomClick(roomId){
  //   let clickedRoom = roomId;
  //   this.setState({activeRoom: clickedRoom});
  //   console.log(this.state.activeRoom);
//  }


  handleRoomClick(room){
  //const ii = index;
    this.setState({ activeRoom: room });  //this line causes Maximum Update  Depth Exceeded
    //console.log(room);

  }
  componentDidMount(){}


  componentWillUnmount(){}




  render() {
    console.log("App");
    return (

      <div className="App">Bloc Chat
         <div id='chatroom-column'>

               <ul>
                  <RoomList firebase={firebase}  activeRoom = {this.state.activeRoom} handleRoomClick={this.handleRoomClick} />
               </ul>

         </div>

         <div id='room-messages-column'>

            <ul>
               <MessageList firebase={firebase} activeRoom = {this.state.activeRoom} />
            </ul>

         </div>

      </div>
    );// close return
  }//close render
}//close component

export default App;
