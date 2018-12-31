import React, { Component } from 'react';
import { connect } from "react-redux"
import { togglePlaying, incrementSeconds, resetSeconds, updateScoreBoard } from "../Redux/actioncreator"
import { withRouter } from 'react-router-dom'
import "../stylesheet/player.css"


 class Music extends Component {

   state ={
     toggle:false
   }

   componentDidUpdate = (prevProps, prevState, snapshot) => {
     // console.log("UPDATED")

      console.log("I said: ", this.props.transcript)
      // this is where we check to see the matching lyrics .
      if(this.props.transcript !== "" && this.props.savedLyric !== "" &&         this.props.savedLyric.includes(this.props.transcript.toLowerCase()) ) {

        // i ran into an issue earlier with the Web Speech Api that the transcript could only hold up to so many characters so to fix that i would check to see  if the lyrics matched on the screen with the transcript and if it did then we would reset the transcript ( so that the transcript wont get cloged up) and then update scroreboard.
        this.props.reset()
        this.props.updateScoreBoard()

     } else {

       // again so that the transcript doesn't get cloged up we would do a settimeout and let that match up or not .
       setTimeout(()=>{
         this.props.reset()
       },700)
     }
   }


  handleClick= (e) => {
    let song = document.querySelector("#song")
    let listening = !this.state.toggle
    this.setState({
    toggle:listening
  },this.listenSpeech)

    if (this.props.toggle === false) {
      // set a toggle to start the song and stop the song but also start a timer and stop the timer .
      song.play()
      this.incrementor = setInterval(() =>
      // determines the time of the current song in miliseconds.
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
    // using the same logic we check to see whether or not the song is playing so that our speech can start listening or not.

    if(this.state.toggle === true ) {
      this.props.startListen()
      console.log("in the true block")
    }
    else{
      console.log("in the else block")
      this.props.endListen()
    }

  }

  handleRedirect = () => {
    // incase person wants to change songs we handle a redirect.
    this.props.history.push('/songs')
  }

  componentWillUnmount() {
    // if the user leaves the jukebox  then we want to reset a couple of things. First we restart the timer to 0.
    clearInterval(this.incrementor)
    // then we reset the transcript so it's a fresh slate for the next song.
    this.props.reset()
    // automatically make the toggle false so that the next song starts at false
    this.props.togglePlaying(false)
    // makes the score 0
    this.props.resetSeconds()
    // makes sure that the computer is no longer listening to your speech.
    this.props.endListen()




  }
  render(){
    return (
      <div id="button-div">
        <button onClick={this.handleClick} id="songButton"> Start </button>
        <button onClick={this.handleRedirect} id="redirect"> SongSelection </button>
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


export default withRouter(connect(mapStateToProps,{togglePlaying,incrementSeconds,resetSeconds,updateScoreBoard})(Music))
