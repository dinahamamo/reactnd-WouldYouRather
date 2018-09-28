export function formatDate (timestamp) {
  return new Date(timestamp).toLocaleDateString()
}

export function formatTime (timestamp) {
  const time = new Date(timestamp).toLocaleTimeString()
  const hours = time.substr(0,5)
  const clock = time.slice(-2)
  return `${hours} ${clock}`
}