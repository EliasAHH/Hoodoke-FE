const initialState = {
  lines:[]

}

const reducer = (state=initialState,action) => {
  switch (action.type) {
    case "REPLACE_LYRICS":
    console.log("YOU HIT THE REPLACE REDUCER")
      return {...state, lines: action.payload }


    default:
    return state

  }

}

export default reducer
