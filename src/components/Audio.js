import React, { Component } from 'react';
import { connect } from "react-redux"
import { togglePlaying, incrementSeconds, resetSeconds, updateScoreBoard } from "../Redux/actioncreator"
import SpeechRecognition from 'react-speech-recognition'



 class Music extends Component {

   state ={
     toggle:false
   }

   componentDidUpdate = () => {
     console.log("hi")
     if(this.props.final !== "" && this.props.savedLyric !== "" && this.props.final.includes(this.props.savedLyric) ) {
       console.log("THIS IS FINAL", this.props.final,"THIS IS SAVEDLYRIC",this.props.savedLyric)
       this.props.updateScoreBoard()
     }
   }


  handleClick= (e) => {
    let song = document.querySelector("#song")
    let listening = !this.state.toggle
    this.setState({
    toggle:listening
  },this.listenSpeech)

    if (this.props.toggle === false) {
      song.play()
      this.incrementor = setInterval(() =>
      this.props.incrementSeconds()

     , 100);
      console.log("SONG IS PLAYING")
    } else {
        song.pause()
        clearInterval(this.incrementor)
        console.log("SONG IS PAUSED")
    }
    let results = !this.props.toggle
    this.props.togglePlaying(results)

  }


  listenSpeech = () => {
    if(this.state.toggle === true ) {
      this.props.startListen()
      console.log("in the true block")
    }
    else{
      console.log("in the else block")
      this.props.endListen()
    }

  }

  componentWillUnmount() {
    clearInterval(this.incrementor)
    this.props.togglePlaying(false)
    this.props.resetSeconds()
    this.props.endListen()

  }
  render(){
    console.log("transcript", this.props.transcript)
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
    currentSong:state.currentSong,
    savedLyric: state.savedLyric
  }

}


export default connect(mapStateToProps,{togglePlaying,incrementSeconds,resetSeconds,updateScoreBoard})(Music)
