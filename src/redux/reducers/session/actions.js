export const RESET_REDUCER = 'RESET_REDUCER'
export const START_TIME = 'START_TIME'
export const ADD_HYDRATION = 'ADD_HYDRATION'
export const SET_FIRST_HYDRATION = 'SET_FIRST_HYDRATION'

export const setStartTime = payload => ({
  type: START_TIME,
  payload
})

export const addHydration = payload => ({
  type: ADD_HYDRATION,
  payload
})

export const setFirstHydration = payload => ({
  type: SET_FIRST_HYDRATION,
  payload
})

export const resetReducer = () => ({
  type: RESET_REDUCER
})
