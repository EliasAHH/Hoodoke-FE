import React, { Component } from 'react';
import Audio from '../components/Audio'
import Lyrics from '../components/Lyrics'
import { connect } from 'react-redux'
import { replaceLyrics } from '../Redux/actioncreator'
import data from "../audio/Usher-Confessions_Part_2.lrc"
var Lrc = require('lrc-kit').Lrc


class Player extends Component {

  componentDidMount = () => {
    let lrc = Lrc.parse(data)

    this.props.replaceLyrics(lrc.lyrics)

  }
  render(){
    const lyrics = this.props.myLyrics.map(lyric => <Lyrics key={lyric.timestamp} lyric={lyric}/>)
    return (
      <div>
        <Audio />
        {lyrics}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    myLyrics: state.lines
  }

}

const mapDispatchToProps = dispatch => {
  return {
    replaceLyrics: lyrics => dispatch(replaceLyrics(lyrics))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Player)
