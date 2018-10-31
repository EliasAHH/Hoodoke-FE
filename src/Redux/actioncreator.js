export const replaceLyrics = lyrics => {
  return {
    type:"REPLACE_LYRICS", payload:lyrics
  }
}

export const playing = toggle => {
  return {
    type:"TOGGLE_BUTTON", payload:toggle
  }

}
