const initialState = {
  lines:[],
  playing: false,
  secondsElapsed:0,
  currentUser:null,
  authCurrentUser:{},
  songs:[],
  currentSong: {}

}
const reducer = (state=initialState,action) => {
  switch (action.type) {
    case "REPLACE_LYRICS":
    console.log(action.payload)
    console.log("YOU HIT THE REPLACE REDUCER")
      return {...state, lines: action.payload }

    case "TOGGLE_BUTTON":
      console.log("YOU HIT THE TOGGLE BUTTON")
      return {...state, playing:action.payload}

    case "INCREMENT_SECONDS":
      console.log("YOU HIT THE INCREMENT REDUCER")
      return {...state, secondsElapsed: state.secondsElapsed + 1}

    case "LOG_IN_SIGN_UP":
      console.log("YOU HIT THE LOG IN SIGN UP REDUCER ")
      localStorage.setItem("token", action.payload.jwt)
      return {...state, currentUser:action.payload}

    case "GET_USER":
      console.log("YOU HIT THE GET USER REDUCER")
      return {...state, authCurrentUser:action.payload}

    case "CLEAR_USER":
      console.log("YOU HIT CLEAR USER")
      return {...state, authCurrentUser:{},currentUser:null}

    case "REPLACE_SONGS":
      console.log("YOU HIT THE REPALCE SONGS REDUCER")
      return {...state, songs: action.payload}

    case "CURRENT_SONG_CHOSEN":
      console.log("YOU HIT THE CURRENT SONG ")
      return {...state, currentSong:action.payload}


    default:
    return state

  }

}

export default reducer
