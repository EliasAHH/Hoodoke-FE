var Lrc = require('lrc-kit').Lrc

export const replaceLyrics = lyrics => {
  return {
    type:"REPLACE_LYRICS", payload:lyrics
  }
}

export const togglePlaying = toggle => {
  return {
    type:"TOGGLE_BUTTON", payload:toggle
  }

}

export const incrementSeconds =  seconds => {
  return {
    type: "INCREMENT_SECONDS", payload: seconds
  }

}

export const loadLyrics = () => {
  return dispatch => {
    fetch("/static/media/Firework-Katy_Perry.4628bad3.lrc")
      .then((r) => r.text())
      .then(text  => {
        let lrc = Lrc.parse(text)
        dispatch({type:"REPLACE_LYRICS", payload:lrc.lyrics})
      })

  }
}
