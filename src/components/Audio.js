import React, { Component } from 'react';
import soundfile from "../audio/Usher-Confessions_Part_2.mp3"
import { connect } from "react-redux"
import { playing } from "../Redux/actioncreator"


class Audio extends Component {
  handleClick= (e) => {
    let song = new Audio(soundfile)
    if (this.props.playing === false) {
      song.play()
    } else{
        song.pause()
    }
    let results = !this.props.playing
    this.props.playing(results)

  }
  render(){
    return (
      <div>
        <button onClick={this.handleClick}> Click me to start </button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    playing: state.playing
  }
}

const mapDispatchToProps = dispatch => {
  return {
    playing: toggle => dispatch(playing(toggle))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Audio)
