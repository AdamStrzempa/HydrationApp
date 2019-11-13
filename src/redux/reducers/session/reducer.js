import { START_TIME } from './actions'

const initialState = () => ({
  startTime: null
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

    default:
      return state
  }
}
