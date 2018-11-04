import React, { Component } from 'react';
import soundfile from "../audio/firework-katy_perry.mp3"
import { connect } from "react-redux"
import { togglePlaying, incrementSeconds } from "../Redux/actioncreator"

let song;
let incrementor;


 class Music extends Component {

   componentDidMount () {
     song = new Audio(renderSongPath(this.props.currentSong))
     console.log(song)
     song.preload = 'auto'
   }


  handleClick= (e) => {
    if (this.props.toggle === false) {
      song.play()
      setInterval(() =>
      this.props.incrementSeconds()

     , 1000);
      console.log("SONG IS PLAYING")
    } else {
        song.pause()
        clearInterval(incrementor)
        console.log("SONG IS PAUSED")
    }
    let results = !this.props.toggle
    this.props.togglePlaying(results)

  }

  componentWillUnmount() {
    clearInterval(incrementor)
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

const mapDispatchToProps = dispatch => {
  return {
    togglePlaying: toggle => dispatch(togglePlaying(toggle)),
    incrementSeconds: () => dispatch(incrementSeconds())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Music)
