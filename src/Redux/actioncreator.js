var Lrc = require('lrc-kit').Lrc

const replaceLyrics = lyrics => {
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

export const handleSubmit = (user) => {
  return dispatch => {
    fetch("http://localhost:3001/auth", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(response =>
      dispatch({type:"LOG_IN_SIGN_UP", payload:response}))
    }
  }

  export const handleSignup = (user) => {
    return dispatch => {
      fetch('http://localhost:3001/users', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then(response => response.json())
      .then(response =>
        dispatch({type:"LOG_IN_SIGN_UP",payload:response}))
      }

  }

export const loadLyrics = (song) => {
  return dispatch => {
    fetch(song.path)
      .then((r) => r.text())
      .then(text  => {
        let lrc = Lrc.parse(text)
        dispatch({type:"REPLACE_LYRICS", payload:lrc.lyrics})
      })

  }
}

export const fetchUser = (token) => {
  return dispatch => {
    fetch("http://localhost:3001/current_user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: token
      }
    })
    .then(response => response.json())
    .then(response =>
      dispatch({type:"GET_USER", payload:response}))
  }
}

export const removeCurrentUser = () => {
  return dispatch => {
    dispatch({type:"CLEAR_USER"})
  }
}


export const getSongs = () => {
  return dispatch => {
    fetch("http://localhost:3001/songs")
    .then(response => response.json())
    .then(songs => dispatch({type:"REPLACE_SONGS", payload:songs}))
  }
}

export const storeSong = song => {
  return dispatch => {
    dispatch({type:"CURRENT_SONG_CHOSEN",payload:song})
  }

}
