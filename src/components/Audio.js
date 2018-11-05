import React, { Component } from 'react';
import soundfile from "../audio/firework-katy_perry.mp3"
import { connect } from "react-redux"
import { togglePlaying, incrementSeconds, resetSeconds } from "../Redux/actioncreator"



 class Music extends Component {

   componentDidMount() {
    this.song = new Audio(`../audio/firework-katy_perry`)
    this.song.preload = 'auto'
   }


  handleClick= (e) => {
    if (this.props.toggle === false) {
      this.song.play()
      this.incrementor = setInterval(() =>
      this.props.incrementSeconds()

     , 1000);
      console.log("SONG IS PLAYING")
    } else {
        this.song.pause()
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
    return (
      <div>
        <button onClick={this.handleClick}> Click me to start </button>
      </div>
    )
  }
}

const renderSongPath = (currentSong) => {
  return `../audio/${currentSong.song}-${currentSong.artist}`

}

const mapStateToProps = state => {
  return {
    toggle: state.playing,
    currentSong:state.currentSong
  }

}


export default connect(mapStateToProps,{togglePlaying,incrementSeconds,resetSeconds})(Music)
