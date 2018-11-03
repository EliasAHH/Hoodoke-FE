import React, { Component } from 'react';
import Audio from '../components/Audio'
import Lyrics from '../components/Lyrics'
import { connect } from 'react-redux'
import { loadLyrics } from '../Redux/actioncreator'
import data from "../audio/3_doors_down-here_without_you.lrc"


class JukeBox extends Component {

  componentDidMount = () => {
    this.props.loadLyrics()
    console.log(data)
    }

    renderLyrics = () => {
         for (let i=0; i<this.props.myLyrics.length;i++) {
          if(this.props.myLyrics[i].timestamp < this.props.currentTime && this.props.myLyrics[i+1].timestamp > this.props.currentTime){

            return <Lyrics  key={this.props.myLyrics[i].timestamp} lyric={this.props.myLyrics[i]} />
          }
        }
    }

    render(){
      console.log(this.props.currentTime)
      return (
        <div>
          <Audio />
          {this.renderLyrics()}
        </div>
      )
    }
  }


  const mapStateToProps = state => {
    return {
      myLyrics: state.lines,
      currentTime: state.secondsElapsed
    }
  }







export default connect(mapStateToProps,{ loadLyrics })(JukeBox)
