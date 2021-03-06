import React, {Component} from 'react'
import SpeechRecognition from 'react-speech-recognition'
import Audio from './Audio'

class Speech extends Component {
  render() {

    const { recognition,transcript, resetTranscript, browserSupportsSpeechRecognition, startListening, stopListening, finalTranscript } = this.props


    if (!browserSupportsSpeechRecognition) {
     return null
   }


    return (
      <div id="audio">
        <Audio startListen={startListening} endListen={stopListening} final={finalTranscript} transcript={transcript} reset={resetTranscript} recognition={recognition}/>
      </div>
    )
  }
}
const options = {
  autoStart: false
}
 export default SpeechRecognition(options)(Speech)
