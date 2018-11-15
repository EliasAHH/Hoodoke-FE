import React from 'react';
import { connect } from 'react-redux'
import { fetchHighestScore } from '../Redux/actioncreator'
import '../stylesheet/scoreboard.css'

// making scoreboard a class  so that when I implement the highest score feature i'm able to  run component did mount on it  to gain acess and fetch the highest user
class Scoreboard extends React.Component {
    // componentDidMount = () => {
    //   if(this.props.currentSong) {
    //     this.props.fetchHighestScore(this.props.currentUser.id)
    //   }
    // }
    // highestScore =() => {
    //   if(this.props.highestScore !== null) {
    //     return <span id="high_score"> HighestScore:{this.props.highestScore} </span>
    //   } else {
    //     return <span id="high_score"> HighestScore: 0 </span>
    //   }
    // }
    render() {
    return ( <div>
      <span id="score"> {this.props.score} </span>
      {this.highestScore}
    </div> )

  }
}
const mapStateToProps = state => {
  return {
    score:state.score
  }
}

export default connect(mapStateToProps)(Scoreboard)
