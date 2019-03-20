import React, { Component } from 'react';

class RoomList extends Component {
   constructor(props) {
      super(props);
      this.state = {
         rooms: []
     };
   this.roomsRef = this.props.firebase.database().ref('rooms');
   }

   componentDidMount() {
     this.roomsRef.on('child_added', snapshot => {
     const room = snapshot.val();
     room.key = snapshot.key;
     this.setState({ rooms: this.state.rooms.concat( room ) })
    });
    console.log(this.state.rooms && this.state.rooms.length && this.state.rooms[0].key);
   }

   componentWillUnmount(){



   }
   render() {
     console.log(this.state.rooms && this.state.rooms.length && this.state.rooms[0].key);
      //return <li>{console.log(this.state.rooms && this.state.rooms.length && this.state.rooms[0].key)}hello from RoomList</li>;
       //return <li>hello there from RoomList</li>;
       return <li>{this.state.rooms[0].key}</li>;
   }
} //end class declaration

export default RoomList;
