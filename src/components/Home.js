import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchUser } from '../Redux/actioncreator'
import Navbar from './Navbar'
class Home extends Component {

  // componentDidMount = () => {
  //   if(localStorage.getItem("token")) {
  //     this.props.fetchUser(localStorage.token)
  //   } else if(!localStorage.getItem("token") && this.props.currentUser != null ) {
  //     console.log(this.props.currentUser)
  //   }
  // }

  render(){
    return(
      <div>
        Welcome To Hoodoke!
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     currentUser: state.currentUser
//   }
//
// }


export default Home
