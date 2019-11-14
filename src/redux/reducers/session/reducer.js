import { START_TIME, ADD_HYDRATION } from './actions'

const initialState = () => ({
  startTime: null,
  currentHydration: 0
})

const keepDataState = currentState => ({})

export const resetState = state => ({
  ...initialState(),
  ...keepDataState(state)
})

export default function reducer(state = initialState(), action) {
  switch (action.type) {
    case START_TIME:
      return { ...state, startTime: action.payload }
    case ADD_HYDRATION:
      return { ...state, currentHydration: action.payload }

    default:
      return state
  }
}
