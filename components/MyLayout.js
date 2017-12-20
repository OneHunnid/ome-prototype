import React from 'react'
import { connect } from 'react-redux'

import stylesheet from 'styles/index.scss'
import Header from '../components/Header'
import HelpPanel from '../components/HelpPanel'

export default class MyLayout extends React.Component {
  render() {
    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        {this.props.children}
      </div>
    )
  }
}
