import React, { Component } from 'react';
import { storeSong } from '../Redux/actioncreator'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import '../stylesheet/songselection.css'

class Song extends Component {
  handleClick = event => {
    this.props.storeSong(this.props.song)
    this.props.history.push(`jukebox/${this.props.song.artist}`)

  }


  render(){
    const { artist_name, song_name } = this.props.song

    return(
        <li onClick={this.handleClick} className="song">
          {artist_name} - {song_name}
        </li>

    )
  }
}

export default withRouter(connect(null,{ storeSong })(Song))
