import React, { Component } from 'react';

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
    this.messagesRef = this.props.firebase.database().ref('messages');
  }

  componentDidMount() {
    this.messagesRef.on('child_added', snapshot => {
      const message = snapshot.val();
      message.key = snapshot.key;
      this.setState({ messages: this.state.messages.concat( message ) })
    });
  }

  filterRoomId (messages){

     console.log (this.props.activeRoom);
     console.log(messages);

  }
//coomment
  render() {
    let messages  = this.state.messages.map( (message, index) => {
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
