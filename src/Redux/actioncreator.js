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
