import React, { Component } from 'react';


class RoomList extends Component {

   constructor(props){
     super(props);
     this.state = {
        rooms: []
   };
   this.roomsRef = this.props.firebase.database().ref('_rooms');
   }

   componentDidMount() {
     this.roomsRef.on('child_added', snapshot => {
     const room = snapshot.val();
     room.key = snapshot.key;
     
     this.setState({ rooms: this.state.rooms.concat( room ) })
       });
     }

  render() {
    return (
      <span>
        Available Chat Rooms:
      </span>
    );
  }
} //end class declaration

export default RoomList;
