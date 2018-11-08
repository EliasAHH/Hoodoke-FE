import React, {Component} from 'react'
import SpeechRecognition from 'react-speech-recognition'
import Audio from './Audio'


class Speech extends Component {
  state = {
    toggle:false
  }

  render() {
    const { transcript, resetTranscript, browserSupportsSpeechRecognition, startListening, stopListening, finalTranscript, recognition } = this.props

    if (!browserSupportsSpeechRecognition) {
      return null
    }

    return (
      <div>
        <Audio startListen={startListening} endListen={stopListening} final={finalTranscript}/>
      </div>
    )
  }
}

const options = {
  autoStart: false
}


export default SpeechRecognition(options)(Speech)
