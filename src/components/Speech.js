import React, {Component} from 'react'
import SpeechRecognition from 'react-speech-recognition'


class Speech extends Component {
  render() {
    const { transcript, resetTranscript, browserSupportsSpeechRecognition, startListening, stopListening, finalTranscript } = this.props

    if (!browserSupportsSpeechRecognition) {
      return null
    }

    const handleClick = () => {
      startListening()
      console.log(finalTranscript)

    }

    const componentWillUnmount = () => {
      stopListening()
      console.log(finalTranscript)
    }

    return (
      <div>
        <button onClick={handleClick}>Reset</button>
      </div>
    )
  }
}

const options = {
  autoStart: false
}


export default SpeechRecognition(options)(Speech)
