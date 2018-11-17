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
      if(this.props.transcript !== "" && this.props.savedLyric !== "" &&         this.props.savedLyric.includes(this.props.transcript.toLowerCase()) ) {
        // what if in here i check to see if they match? and if they do i post it to the board but then i restart the final transcript right after so that it listens to the next line and it stops the whole problem of not being able to asnwer everything at the same time.  keep it mind that if we do this we might need to alter what's on the bottom over there so check that.
        this.props.reset()
        this.props.updateScoreBoard()

     } else {
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

  handleRedirect = () => {
    this.props.history.push('/songs')
  }

  componentWillUnmount() {
    clearInterval(this.incrementor)
    this.props.reset()
    this.props.togglePlaying(false)
    this.props.resetSeconds()
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
