export function formatDate (timestamp) {
  return new Date(timestamp).toLocaleDateString()
}

export function formatTime (timestamp) {
  const time = new Date(timestamp).toLocaleTimeString()
  const hours = time.substr(0,5)
  const clock = time.slice(-2)
  return `${hours} ${clock}`
}

// function generateUID () {
//   return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
// }

// export function formatQuestion ({ optionOneText, optionTwoText, author }) {
//   return {
//     author,
//     optionOne: {
//       votes: [],
//       text: optionOneText,
//     },
//     optionTwo: {
//       votes: [],
//       text: optionTwoText,
//     }
//   }
// }