import React, { Component } from 'react';


export default class Lyrics extends Component {
  componentDidMount(){
    console.log("test");
  }

  componentDidUpdate() {
    console.log("UPDATED")
  }

  render(){
    const { content, timestamp } = this.props.lyric
    console.log(content)
    return (
      <div>
        <span>{}</span>{content}
      </div>
    )
  }
}
