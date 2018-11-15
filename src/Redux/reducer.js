const initialState = {
  lines:[],
  playing: false,
  secondsElapsed:0,
  currentUser:null,
  authCurrentUser:{},
  songs:[],
  currentSong: {},
  savedLyric: "",
  score: 0,
  error:null,
  newSearch: null,
  highestScore: null

}
const reducer = (state=initialState,action) => {
  switch (action.type) {
    case "REPLACE_LYRICS":
    console.log(action.payload)
      return {...state, lines: action.payload }

    case "TOGGLE_BUTTON":
      return {...state, playing:action.payload}

    case "INCREMENT_SECONDS":
      return {...state, secondsElapsed: state.secondsElapsed + 0.1}

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

    case "SAVE_LYRIC":
      console.log("DID I HIT THE SAVE LYRIC REDUCER?")
      return {...state, savedLyric:action.payload}

    case "UPDATE_LYRIC":
      console.log("UPDATING LYRIC")
      return {...state,score:state.score + 25 }

    case "SEARCH_TERM":
      let newArray = state.songs.filter(song => song.artist_name.toLowerCase().includes(action.payload.toLowerCase()) || song.song_name.toLowerCase().includes(action.payload.toLowerCase()))
      return {...state, newSearch:newArray}

    case "EMPTY_SEARCH":
    return {...state, newSearch:null}

    // case "HIGHEST_SCORE":
    // console.log(action.payload)
    // debugger
    //
    // return {...state,highestScore:action.payload}




    default:
    return state

  }

}

export default reducer
