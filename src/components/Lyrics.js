import React, { Component } from 'react';
import { connect } from 'react-redux'
import { saveLyric } from '../Redux/actioncreator'
import '../stylesheet/player.css'


 class Lyrics extends Component {
   componentDidMount = () => {
     this.props.saveLyric(this.props.lyric.content)
   }

  render(){
    const { content, timestamp } = this.props.lyric
    return (
      <div id="lyrics">
        <p className="artist-name">{this.props.currentSong.artist_name}</p>
        <p className="song-name">{this.props.currentSong.song_name}</p>
        <p className="lyric"> {content} </p>

      </div>
    )
  }
}

export default connect(null,{ saveLyric })(Lyrics)
