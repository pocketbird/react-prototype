export function formatTime(date) {
  const day     = date.getDay()
  const month   = date.getMonth()
  const year    = date.getFullYear()
  const hh      = date.getHours()
  let   hours   = hh
  const minutes = "0" + date.getMinutes()
  let   dd      = 'AM'

  if (hours >= 12) {
    hours = hh - 12
    dd = 'PM'
  }

  if (hours === 0) {
    hours = 12
  }

  // const formattedTime = month + '/' + day + '/' + year + ' @ ' + hours + ':' + minutes.substr(-2) + ' ' + dd
  const formattedTime = month + '/' + day + '/' + year

  return formattedTime
}
