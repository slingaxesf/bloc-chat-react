import React, { Component } from 'react';

class User extends Component {

   constructor(props){
      super(props);
      this.state = {}




   }

   onClickHandler(){
     console.log(this.props.firebase);
     const provider = new this.props.firebase.auth.GoogleAuthProvider();
     this.props.firebase.auth().signInWithPopup( provider );
   }

   render (){

     return (
       <div className = "User">
          <form>
            <input type="button" onClick = {this.onClickHandler} value= "Sign In" ></input>
          </form>
       </div>
     );





   }

}

export default User;
