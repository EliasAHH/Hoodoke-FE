import React, { Component } from 'react';


export default class Lyrics extends Component {

  render(){
    const { content, timestamp } = this.props.lyric
    return (
      <div>
        {timestamp}
        {content}
      </div>
    )
  }
}
