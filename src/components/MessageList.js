import React, { Component } from 'react';

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      activeRoomMessages: []
    };
    this.checkRoomId = this.checkRoomId.bind(this);
    this.filterRoomId = this.filterRoomId.bind(this);
    this.messagesRef = this.props.firebase.database().ref('messages');
  }

  componentDidMount() {
    this.messagesRef.on('child_added', snapshot => {
      const message = snapshot.val();
      message.key = snapshot.key;
      this.setState({ messages: this.state.messages.concat( message ) })
    });

  }

  componentWillUnmount(){



  }

  checkRoomId(message){
    console.log(12);
    return message.roomId == this.props.activeRoom.key;
  }

  filterRoomId (){
     console.log(this.props.activeRoom);
     let newArray = [];
     newArray = this.state.messages.filter(this.checkRoomId);
     return newArray;
  }
//comment
  render() {
    console.log("MessageList");

    let messages  = this.filterRoomId().map( (message, index) => {
      return <li key={index}>{message.username}{message.roomId}{message.sentAt}{message.content}</li>
    });

    return (
      <div>
      {messages}

      {/*
      {this.state.rooms.map( (room, index) => {
        return <li key={index}>{room.name}</li>
      })}
      */}

      </div>
    );
  }

} //end class declaration

export default MessageList;
