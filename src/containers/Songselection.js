import React, { Component, Fragment } from 'react';
import { getSongs } from '../Redux/actioncreator'
import { connect } from 'react-redux'
import Song from '../components/Song'
import '../stylesheet/songselection.css'
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react'
import Search from '../components/Search'

class Songselection extends Component {
  componentDidMount() {
    this.props.getSongs()
  }

  songs = () => {
    if(this.props.newSearch === null) {
      return this.props.songs.map(song =><Song key={song.id} song={song} />)
    } else {
      return this.props.newSearch.map(song => <Song key={song.id} song={song} />)
    }
  }

  render(){
    console.log(this.props.newSearch)
    return(
    <Fragment>
      <Search />
      <ul text id="SongContainer">
        {this.songs()}
      </ul>
    </Fragment >
    )
  }
}

const mapStateToProps = state => {
  return {
    songs:state.songs,
    newSearch: state.newSearch
  }

}


export default connect(mapStateToProps,{getSongs})(Songselection)
