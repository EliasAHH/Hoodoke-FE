import React, { Component } from 'react';
import soundfile from "../audio/Firework-Katy_Perry.mp3"
import { connect } from "react-redux"
import { togglePlaying, incrementSeconds } from "../Redux/actioncreator"


const song = new Audio(soundfile)
song.preload = 'auto'


 class Music extends Component {


  handleClick= (e) => {
    this.incrementor = null
    if (this.props.toggle === false) {
      song.play()
      this.incrementor = setInterval(() =>
      this.props.incrementSeconds()

     , 1000);
      console.log("SONG IS PLAYING")
    } else {
        song.pause()
        clearInterval(this.incrementer)
        console.log("SONG IS PAUSED")
    }
    let results = !this.props.toggle
    this.props.togglePlaying(results)

  }

    handleStop = e => {
      clearInterval(this.incrementer);
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
    toggle: state.playing,
    secondsElapsed: state.secondsElapsed
  }

}

const mapDispatchToProps = dispatch => {
  return {
    togglePlaying: toggle => dispatch(togglePlaying(toggle)),
    incrementSeconds: () => dispatch(incrementSeconds())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Music)
