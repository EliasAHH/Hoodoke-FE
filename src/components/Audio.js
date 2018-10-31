import React, { Component } from 'react';
import soundfile from "../audio/Firework-Katy_Perry.mp3"
import { connect } from "react-redux"
import { togglePlaying } from "../Redux/actioncreator"


const song = new Audio(soundfile)

const formattedSeconds = (sec) =>
  Math.floor(sec / 60) +
    ':' +
  ('0' + sec % 60).slice(-2)


 class Songs extends Component {
  state ={
    secondsElapsed: 0,
    lastClearedIncrementer: null
  }

  handleClick= (e) => {
    this.incrementor = null
    this.incrementer = setInterval( () =>
      this.setState({
        secondsElapsed: this.state.secondsElapsed + 1
      })
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
    this.setState({
      lastClearedIncrementer: this.incrementer
    });
  }
  render(){
    return (
      <div>
        <h1> {formattedSeconds(this.state.secondsElapsed)} </h1>
        <button onClick={this.handleStop}> STOP </button>
        <button onClick={this.handleClick}> Click me to start </button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    toggle: state.playing
  }

}

const mapDispatchToProps = dispatch => {
  return {
    togglePlaying: toggle => dispatch(togglePlaying(toggle))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Songs)
