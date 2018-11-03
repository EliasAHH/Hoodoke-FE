import React, { Component } from 'react';
import { storeSong } from '../Redux/actioncreator'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class Song extends Component {
  handleClick = event => {
    this.props.storeSong(this.props.song)

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
