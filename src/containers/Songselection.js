import React, { Component } from 'react';
import { getSongs } from '../Redux/actioncreator'
import { connect } from 'react-redux'
import Song from '../components/Song'


class Songselection extends Component {
  componentDidMount() {
    this.props.getSongs()
  }

  render(){
    const songs = this.props.songs.map(song=><Song key={song.id} song={song} />)
    return(
      <div> {songs}</div>
    )
  }
}

const mapStateToProps = state => {
  return {
    songs:state.songs
  }

}


export default connect(mapStateToProps,{getSongs})(Songselection)
