import React, { Component } from 'react';
import Speech from '../components/Speech'
import Lyrics from '../components/Lyrics'
import { connect } from 'react-redux'
import { loadLyrics } from '../Redux/actioncreator'
import here from "../lrc/here_without_you-3_doors_down.lrc"
import wreck from "../lrc/wrecking_ball-miley_cyrus.lrc"
import backstreet from "../lrc/i_want_it_that_way-backstreet_boys.lrc"
import firework from '../lrc/firework-katy_perry.lrc'


class JukeBox extends Component {

  componentDidMount = () => {
    this.props.loadLyrics(this.props.currentSong)
    console.log(this.props.currentSong)
    console.log(backstreet)
    console.log(wreck)
    }

    renderLyrics = () => {
         for (let i=0; i< this.props.myLyrics.length -1 ;i++) {
          if(this.props.myLyrics[i].timestamp < this.props.currentTime && this.props.myLyrics[i+1].timestamp > this.props.currentTime){
            return <Lyrics  key={this.props.myLyrics[i].timestamp} lyric={this.props.myLyrics[i]} />
            }
        }
    }

    render(){
      console.log(this.props.currentTime)
      return (
        <div>
          <Speech />
          {this.renderLyrics()}
        </div>
      )
    }
  }


  const mapStateToProps = state => {
    return {
      myLyrics: state.lines,
      currentTime: state.secondsElapsed,
      currentSong: state.currentSong
    }
  }







export default connect(mapStateToProps,{ loadLyrics })(JukeBox)
