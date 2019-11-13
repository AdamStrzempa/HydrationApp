export const RESET_REDUCER = 'RESET_REDUCER'
export const START_TIME = 'START_TIME'

export const setStartTime = payload => ({
  type: START_TIME,
  payload
})

export const resetReducer = () => ({
  type: RESET_REDUCER
})
