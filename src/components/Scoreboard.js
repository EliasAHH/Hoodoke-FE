import React from 'react';
import { connect } from 'react-redux'

const Scoreboard  =  (props) => {
  return <span> {props.score} </span>

}
const mapStateToProps = state => {
  return {
    score:state.score
  }
}

export default connect(mapStateToProps)(Scoreboard)
