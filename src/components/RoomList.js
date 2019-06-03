import React, { Component } from 'react';

class RoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [] ,
      newRoom: ""
    };
    this.roomsRef = this.props.firebase.database().ref('rooms');
  }
  handleChange(e) {
      this.setState({ newRoom: e.target.value });
      //console.log (e.target.value);
    }

    handleSubmit(e) {
       e.preventDefault();
       if(!this.state.newRoom){return}
       this.createRoom(this.state.newRoom);
       this.setState({ newRoom:  ''});
    }

  createRoom (newRoomName) {
   this.roomsRef.push({
     name: newRoomName
   });
  }
  handleRoomClick(room){
  //console.log(room.key);
  let i = room.key;
  console.log(i);
  this.props.handleRoomClick(i);
  }

  componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat( room ) })
    });

  }

  componentWillUnmount(){
  }

//comment
  render() {
    console.log("RoomList");
    let rooms  = this.state.rooms.map( (room, index) => {
      return <li key={index} onClick={ () => this.props.handleRoomClick(room)}>{room.name}</li>
    });

    return (
      <React.Fragment>
      {rooms}

      {/*
      {this.state.rooms.map( (room, index) => {
        return <li key={index}>{room.name}</li>
      })}
      */}
      <form onSubmit={ (e) => this.handleSubmit(e) }>
         <input type="text" value= {this.state.newRoom} onChange={ (e) => this.handleChange(e) } />
            <input type="submit" />
      </form>
      </React.Fragment>
    );
  }


//onClick = {() => this.props.handleRoomClick(55)
} //end class declaration

export default RoomList;
