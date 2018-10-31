const initialState = {
  lines:[],
  playing: false

}

const reducer = (state=initialState,action) => {
  switch (action.type) {
    case "REPLACE_LYRICS":
    console.log("YOU HIT THE REPLACE REDUCER")
      return {...state, lines: action.payload }

    case "TOGGLE_BUTTON":
      console.log("YOU HIT THE TOGGLE BUTTON")
      return {...state, playing:action.payload}


    default:
    return state

  }

}

export default reducer
