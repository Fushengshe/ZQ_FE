
import { browserHistory, hashHistory } from 'react-router'

export default (path) => {
  if (path) {
    process.env.NODE_ENV === 'development'
      ? hashHistory.push(path)
      : hashHistory.push(path)
  } else {
    throw new Error('Path cannot be null!')
  }
}