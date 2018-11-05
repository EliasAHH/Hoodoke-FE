const initialState = {
  lines:[],
  playing: false,
  secondsElapsed:0,
  currentUser:null,
  authCurrentUser:{},
  songs:[],
  currentSong: null

}
const reducer = (state=initialState,action) => {
  switch (action.type) {
    case "REPLACE_LYRICS":
    console.log(action.payload)
      return {...state, lines: action.payload }

    case "TOGGLE_BUTTON":
      return {...state, playing:action.payload}

    case "INCREMENT_SECONDS":
      return {...state, secondsElapsed: state.secondsElapsed + 1}

    case "RESET":
      return {...state, secondsElapsed:0}

    case "LOG_IN_SIGN_UP":
      localStorage.setItem("token", action.payload.jwt)
      return {...state, currentUser:action.payload}

    case "GET_USER":
      return {...state, authCurrentUser:action.payload}

    case "CLEAR_USER":
      return {...state, authCurrentUser:{},currentUser:null}

    case "REPLACE_SONGS":
      return {...state, songs: action.payload}

    case "CURRENT_SONG_CHOSEN":
      return {...state, currentSong:action.payload}


    default:
    return state

  }

}

export default reducer
