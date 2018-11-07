import React, { Component } from 'react';
import { connect } from "react-redux"
import { togglePlaying, incrementSeconds, resetSeconds } from "../Redux/actioncreator"
import SpeechRecognition from 'react-speech-recognition'



 class Music extends Component {


  handleClick= (e) => {
    console.log("this is the listening boolenan ",this.props.listening, 'this is the start recognition function', this.props.startListening )
    let song = document.querySelector("#song")
    if (this.props.toggle === false) {
      song.play()
      this.incrementor = setInterval(() =>
      this.props.incrementSeconds()

     , 1000);
      console.log("SONG IS PLAYING")
    } else {
        song.pause()
        clearInterval(this.incrementor)
        console.log("SONG IS PAUSED")
    }
    let results = !this.props.toggle
    this.props.togglePlaying(results)

  }

  componentWillUnmount() {
    clearInterval(this.incrementor)
    this.props.resetSeconds()

  }
  render(){

    console.log(this.props)
    return (
      <div>
        <button onClick={this.handleClick}> Click me to start </button>
        <audio id="song" src={renderSongPath(this.props.currentSong)}/>
      </div>
    )
  }
}

const renderSongPath = (currentSong) => {
  return `/audio/${currentSong.song}-${currentSong.artist}.mp3`

}

const mapStateToProps = state => {
  return {
    toggle: state.playing,
    currentSong:state.currentSong
  }

}


export default connect(mapStateToProps,{togglePlaying,incrementSeconds,resetSeconds})(Music)
