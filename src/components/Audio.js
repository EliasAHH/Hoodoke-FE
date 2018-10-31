import React, { Component } from 'react';
import soundfile from "../audio/Firework-Katy_Perry.mp3"
import { connect } from "react-redux"
import { togglePlaying, incrementSeconds } from "../Redux/actioncreator"


const song = new Audio(soundfile)
song.preload = 'auto'

const formattedSeconds = (sec) =>
  Math.floor(sec / 60) +
    ':' +
  ('0' + sec % 60).slice(-2)


 class Songs extends Component {


  handleClick= (e) => {
    this.incrementor = null
     this.incrementor= setInterval(() =>
     this.props.incrementSeconds()

    , 1000);

    if (this.props.toggle === false) {
      song.play()
    } else {
        song.pause()
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
        <h1> {formattedSeconds(this.props.secondsElapsed)} </h1>
        <button onClick={this.handleStop}> STOP </button>
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

export default connect(mapStateToProps,mapDispatchToProps)(Songs)
