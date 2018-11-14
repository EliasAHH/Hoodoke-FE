import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchUser } from '../Redux/actioncreator'
import Navbar from './Navbar'
import {  Link, withRouter } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css';
import { Segment, Divider } from 'semantic-ui-react'
import '../stylesheet/home.css'


class Home extends Component {

  render(){
    return(
      <div id="home">
        <h1>Hoodoke </h1>
        {/* <Segment padded> */}
              {/* <Link to="/login"> Login </Link> */}
           {/* <Divider horizontal>Or</Divider> */}
             {/* <Link to="/signup"> Signup </Link> */}

        {/* </Segment> */}
      </div>
    )
  }
}


export default Home
