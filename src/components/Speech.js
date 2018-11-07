import React, {Component} from 'react'
import SpeechRecognition from 'react-speech-recognition'


class Speech extends Component {
  state = {
    toggle:false
  }

  render() {
    const { transcript, resetTranscript, browserSupportsSpeechRecognition, startListening, stopListening, finalTranscript, recognition } = this.props

    if (!browserSupportsSpeechRecognition) {
      return null
    }

    const handleClick = () => {
      let listening = !this.state.toggle
      this.setState({
      toggle:listening
    },listenSpeech)
    }

    const listenSpeech = () => {
      if(this.state.toggle === true ) {
        startListening()
        console.log("in the true block", transcript,finalTranscript)
      }
      else{
        stopListening()
        resetTranscript()
        console.log("in the else block", finalTranscript)
      }

    }

    const componentWillUnmount = () => {
      stopListening()
      resetTranscript()
    }

    return (
      <div>
        <button onClick={handleClick}>Reset</button>
        <span>{finalTranscript}</span>
      </div>
    )
  }
}

const options = {
  autoStart: false
}


export default SpeechRecognition(options)(Speech)
