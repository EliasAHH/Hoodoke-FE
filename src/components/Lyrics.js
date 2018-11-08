import React, { Component } from 'react';
import { connect } from 'react-redux'
import { saveLyric } from '../Redux/actioncreator'


 class Lyrics extends Component {
   componentDidMount = () => {
     this.props.saveLyric(this.props.lyric.content)
   }

  render(){
    const { content, timestamp } = this.props.lyric
    return (
      <div>
        {content}

      </div>
    )
  }
}

export default connect(null,{ saveLyric })(Lyrics)
