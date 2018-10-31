import React, { Component } from 'react';
import soundfile from "../audio/Firework-Katy_Perry.mp3"


export default class Song extends Component {
  handleClick= (e) => {
    let song = new Audio(soundfile)
    console.log(song)
    song.play()

  }
  render(){
    return (
      <div>
        <button onClick={this.handleClick}> Click me to start </button>
      </div>
    )
  }
}
