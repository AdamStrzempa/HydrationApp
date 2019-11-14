import moment from 'moment'

const convertSeconds = secondsToEnd => {
  const duration = moment.duration(secondsToEnd, 'seconds')

  const seconds = duration.seconds()
  const minutes = duration.minutes()
  const hours = duration.hours()

  const sHours = hours < 10 ? `0${hours}:` : `${hours}:`
  const sMinutes = minutes < 10 ? `0${minutes}:` : `${minutes}:`
  const sSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`

  const newTime = sHours + sMinutes + sSeconds

  return newTime
}

export default convertSeconds
