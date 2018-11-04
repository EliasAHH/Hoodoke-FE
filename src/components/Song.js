import React, { Component } from 'react';
import { storeSong } from '../Redux/actioncreator'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class Song extends Component {
  handleClick = event => {
    // console.log(this.props.song)
    this.props.storeSong(this.props.song)
    this.props.history.push(`jukebox/${this.props.song.artist}`)

  }
  render(){
    const { artist_name, song_name } = this.props.song
    return(
      <div onClick={this.handleClick}>
        Artist Name : {artist_name} Song Name: {song_name}
      </div>

    )
  }
}

export default withRouter(connect(null,{ storeSong })(Song))
