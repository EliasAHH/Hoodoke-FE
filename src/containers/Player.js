import React, { Component } from 'react';
import Audio from '../components/Audio'
import Lyrics from '../components/Lyrics'
import { connect } from 'react-redux'
import { replaceLyrics } from '../Redux/actioncreator'
import data from "../audio/3_doors_down-here_without_you.lrc"
var Lrc = require('lrc-kit').Lrc


class JukeBox extends Component {

  componentDidMount = () => {
    fetch("/static/media/Firework-Katy_Perry.4628bad3.lrc")
      .then((r) => r.text())
      .then(text  => {
        let lrc = Lrc.parse(text)
        console.log(lrc.info)
        this.props.replaceLyrics(lrc.lyrics)
      })
  }





  render(){
    console.log(data)
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

export default connect(mapStateToProps,mapDispatchToProps)(JukeBox)
