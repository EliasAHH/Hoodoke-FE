const initialState = {
  lines:[],
  playing: false,
  secondsElapsed:0.00

}

const reducer = (state=initialState,action) => {
  switch (action.type) {
    case "REPLACE_LYRICS":
    console.log("YOU HIT THE REPLACE REDUCER")
      return {...state, lines: action.payload }

    case "TOGGLE_BUTTON":
      console.log("YOU HIT THE TOGGLE BUTTON")
      return {...state, playing:action.payload}

    case "INCREMENT_SECONDS":
      console.log("YOU HIT THE INCREMENT REDUCER")
      return {...state, secondsElapsed: state.secondsElapsed + 1}


    default:
    return state

  }

}

export default reducer
