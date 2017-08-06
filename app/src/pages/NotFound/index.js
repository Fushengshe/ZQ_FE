import React, { Component } from 'react'
import './index.less'

class NotFound extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className="not-found">
        404
      </div>
    )
  }
}

export default NotFound