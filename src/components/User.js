import React, { Component } from 'react';

class User extends Component {

  constructor(props){
    super(props);
    this.state = {}




  }

  // onClickHandler(){
  // console.log(this.props.firebase);
  //   const provider = new this.props.firebase.auth.GoogleAuthProvider();
  //   this.props.firebase.auth().signInWithPopup( provider );
  // }

  onClickHandlerSignIn = () => {
    console.log(this.props.firebase.username);
    const provider = new this.props.firebase.auth.GoogleAuthProvider();
    this.props.firebase.auth().signInWithPopup( provider );
  }

  onClickHandlerSignOut = () => {
    //console.log("signed out");
    //this.props.firebase.auth().signOut();
  }

  componentDidMount (){
    this.props.firebase.auth().onAuthStateChanged( user => {
      console.log("hello")
      console.log(user);
      this.props.setUser(user);
    });
  }

  render (){
    console.log(this.props.user)
    return (
      <div className = "User">
      <form>
      <input type="button" onClick = {this.onClickHandlerSignIn} value= "Sign In" ></input>
      <input type="button" onClick = {this.onClickHandlerSignOut} value= "Sign Out" ></input>

      You are: {this.props.user.displayName}
      </form>

      </div>
    );





  }

}

export default User;
