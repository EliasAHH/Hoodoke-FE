import React from 'react';
import { connect } from 'react-redux'
import { fetchHighestScore, scoreSong } from '../Redux/actioncreator'
import '../stylesheet/scoreboard.css'

// making scoreboard a class  so that when I implement the highest score feature i'm able to  run component did mount on it  to gain acess and fetch the highest user
class Scoreboard extends React.Component {
    componentDidMount = () => {
      this.props.fetchHighestScore(this.props.currentSong.id)
    }

    highestScore =() => {
      if(this.props.highestScore !== null) {
        return <span id="high_score"> HighestScore:{this.props.highestScore} </span>
      } else {
        return <span id="high_score"> HighestScore: 0 </span>
      }
    }


    // What if instead of doing a component didMount i will use a component componentWillUnmount instead to try and save the score in the back end and then i will try and get the newest high score later. First focus on creating a relationship between user and song and scores to be easily accesible

    componentWillUnmount = () => {
      this.props.scoreSong(this.props.score,this.props.currentUser.id, this.props.currentSong.id)
    }
    render() {
    return ( <div>
      <span id="score"> {this.props.score} </span>
      {this.highestScore}
    </div> )

  }
}
const mapStateToProps = state => {
  return {
    score:state.score,
    currentUser: state.authCurrentUser,
    currentSong: state.currentSong
  }
}

export default connect(mapStateToProps, { fetchHighestScore, scoreSong })(Scoreboard)
