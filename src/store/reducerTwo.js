export const FIELD = 'FIELD';


const defaultState = {}

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FIELD:
      return { ...state, state:  action.payload }
    default:
      return state
  }
}