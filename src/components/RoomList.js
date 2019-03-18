import React, { Component } from 'react';


class RoomList extends Component {

   constructor(props){
     super(props);
     this.state = {
       testValue: 0,
        rooms: []
     };

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
