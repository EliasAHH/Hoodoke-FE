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

const LogInSignUp = (response) => {
  return {
    type:"LOG_IN_SIGN_UP", payload:response
  }
}

export const handleSubmit = (user) => {
  return dispatch => {
    return fetch("http://localhost:3001/auth", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(response => {
      if(!response.error) {
      dispatch({type:"LOG_IN_SIGN_UP", payload:response})
    } else {
      alert(response.error)
      throw new Error(response.error)
  }
})
  }
}

  export const handleSignup = (user) => {
    return dispatch => {
      return fetch('http://localhost:3001/users', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then(response => response.json())
      .then(response => {
        if(!response.error) {
          dispatch({type:"LOG_IN_SIGN_UP", payload:response})
        }else{
          response.error.map(error => alert(error))
          throw new Error(response.error)
        }
      })
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

export const resetSeconds = () => {
  return dispatch => {
    dispatch({type:"RESET"})
  }

}

export const saveLyric = lyric => {
  return dispatch => {
    dispatch({type:"SAVE_LYRIC", payload:lyric})
  }
}

export const updateScoreBoard = () => {
  return dispatch => {
    dispatch({type:"UPDATE_LYRIC"})
  }

}


export const searchThis = (searchTerm) => {
  return dispatch => {
    if(searchTerm !== "") {
      dispatch({type:"SEARCH_TERM", payload:searchTerm})
    } else {
      dispatch({type:"EMPTY_SEARCH"})
    }
  }
}


export const saveScore = (user,song,score) => {
  return dispatch  => {
    fetch("http://localhost:3001/scores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    body: JSON.stringify({user_id:user, song_id:song,score:score})
  })

  }
  .then(r=> r.json())
  .then(getTickets)
}

function getTickets(data) {
  console.log(data)
}

export const scoreSong = (score, user, song) => {
  return dispatch => {
    fetch('http://localhost:3001/scores', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({score:score, user_id:user,song_id:song})
    })
  }
}

export const fetchHighestScore = (songId) => {
  return dispatch => {
    fetch(`http://localhost:3001/songs/${songId}`)
    .then(response => response.json())
    .then(response => dispatch({
      type:"HIGHEST_SCORE", payload:response
    }))
  }
}

export const resetScore = () => {
  return dispatch => {
    dispatch({
      type:"RESET_SCORE"
    })
  }
}
