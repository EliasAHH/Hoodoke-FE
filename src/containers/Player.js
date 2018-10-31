import React, { Component } from 'react';
import Audio from '../components/Audio'
import Lyrics from '../components/Lyrics'
import { connect } from 'react-redux'
import { replaceLyrics } from '../Redux/actioncreator'
// import data from "../audio/Usher-Confessions_Part_2.lrc"
var Lrc = require('lrc-kit').Lrc


class JukeBox extends Component {

  componentDidMount = () => {
    let lrc = Lrc.parse(`[ar:Katy Perry]
[ti:Firework]
[al:Teenage Dream]
[00:08.60]Do you ever feel like a plastic bag
[00:12.45]Drifting throught the wind
[00:14.30]Wanting to start again
[00:15.98]
[00:16.36]Do you ever feel, feel so paper thin
[00:20.09]Like a house of cards
[00:22.13]One blow from caving in
[00:23.61]
[00:24.18]Do you ever feel already buried deep
[00:27.73]Six feet under scream
[00:29.52]But no one seems to hear a thing
[00:31.44]
[00:31.77]Do you know that there's still a chance for you
[00:35.42]Cause there's a spark in you
[00:37.72]
[00:38.16]You just gotta ignite the light
[00:42.26]And let it shine
[00:46.18]Just own the night
[00:49.83]Like the Fourth of July
[00:53.37]
[00:53.68]Cause baby you're a firework
[00:56.97]Come on show 'em what your worth
[01:01.14]Make 'em go "Oh, oh, oh!"
[01:04.81]As you shoot across the sky-y-y
[01:08.59]
[01:08.90]Baby you're a firework
[01:12.62]Come on let your colors burst
[01:16.48]Make 'em go "Oh, oh, oh!"
[01:20.08]You're gunna leave 'em fallin' down-own-own
[01:24.30]
[01:25.74]You don't have to feel like a waste of space
[01:29.65]You're original, cannot be replaced
[01:33.38]If you only knew what the future holds
[01:37.10]After a hurricane comes a rainbow
[01:40.76]
[01:41.14]Maybe you're reason why all the doors are closed
[01:44.80]So you can open one that leads you to the perfect road
[01:48.65]Like a lightning bolt, your heart will blow
[01:52.57]And when it's time, you'll know
[01:55.54]
[01:55.80]You just gotta ignite the light
[01:59.33]And let it shine
[02:03.31]Just own the night
[02:06.91]Like the Fourth of July
[02:10.14]
[02:10.39]Cause baby you're a firework
[02:14.24]Come on show 'em what your worth
[02:18.04]Make 'em go "Oh, oh, oh!"
[02:21.63]As you shoot across the sky-y-y
[02:25.54]
[02:25.86]Baby you're a firework
[02:29.64]Come on let your colors burst
[02:33.43]Make 'em go "Oh, oh, oh!"
[02:36.97]You're gunna leave 'em fallin' down-own-own
[02:41.26]
[02:42.19]Boom, boom, boom
[02:44.61]Even brighter than the moon, moon, moon
[02:48.40]It's always been inside of you, you, you
[02:52.32]And now it's time to let it through
[02:56.53]
[02:56.91]Cause baby you're a firework
[03:00.51]Come on show 'em what your worth
[03:04.37]Make 'em go "Oh, oh, oh!"
[03:07.78]As you shoot across the sky-y-y
[03:11.81]
[03:12.19]Baby you're a firework
[03:15.73]Come on let your colors burst
[03:19.64]Make 'em go "Oh, oh, oh!"
[03:23.24]You're gunna leave 'em goin "Oh, oh, oh!"
[03:27.22]
[03:29.01]Boom, boom, boom
[03:30.82]Even brighter than the moon, moon, moon
[03:36.17]Boom, boom, boom
[03:38.84]Even brighter than the moon, moon, moon`)

    this.props.replaceLyrics(lrc.lyrics)

  }
  render(){
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
