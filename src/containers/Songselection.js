import React, { Component } from 'react';
import { getSongs } from '../Redux/actioncreator'
import { connect } from 'react-redux'
import Song from '../components/Song'
import '../stylesheet/songselection.css'
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react'



class Songselection extends Component {
  componentDidMount() {
    this.props.getSongs()
  }

  render(){
    const songs = this.props.songs.map(song=><Song key={song.id} song={song} />)
    return(
      <div text id="SongContainer">
        {songs}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    songs:state.songs
  }

}


export default connect(mapStateToProps,{getSongs})(Songselection)
