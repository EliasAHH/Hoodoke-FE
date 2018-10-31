import React, { Component } from 'react';
import { nelly } from '../lrcHelper/nelly'


export default class Lyrics extends Component {

  render(){
    const { content, timestamp } = this.props.lyric
    return (
      <div>
        {content}
      </div>
    )
  }
}
