import React, {Component} from 'react'
import SpeechRecognition from 'react-speech-recognition'


class Speech extends Component {
  state = {
    toggle:false
  }

  render() {
    const { transcript, resetTranscript, browserSupportsSpeechRecognition, startListening, stopListening, finalTranscript } = this.props

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
        console.log("in the true block", finalTranscript)
      }
      else{
        stopListening()
        console.log("in the else block", finalTranscript)
      }

    }

    const componentWillUnmount = () => {
      stopListening()
      resetTranscript()
      console.log(finalTranscript)
    }
    console.log(finalTranscript)

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
