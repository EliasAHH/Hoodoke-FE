import React, { Component } from 'react';


export default class Lyrics extends Component {

  render(){
    const { content, timestamp } = this.props.lyric
    console.log(content)
    return (
      <div>
        {content}
      </div>
    )
  }
}
