import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addCount } from '../store'

class AddCount extends React.Component {
  constructor(props) {
    super(props)
    this.__add = this.__add.bind(this)
  }
  __add() {
    this.props.addCount()
  }
  render () {
    const { count } = this.props
    return (
      <div>
        <style jsx>{`
          div {
            padding: 0 0 20px 0;
          }
      `}</style>
        <h1>AddCount: <span>{count}</span></h1>
        <button onClick={this.__add}>Add To Count</button>
      </div>
    )
  }
}

const mapStateToProps = ({ count }) => ({ count })

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: bindActionCreators(addCount, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCount)
