import React from 'react'
import { bindActionCreators } from 'redux'
import { initStore, startClock, addCount } from '../store'
import withRedux from 'next-redux-wrapper'
import AddCount from '../components/AddCount'

import Layout from '../components/MyLayout.js'

class Index extends React.Component {
  static getInitialProps ({ store }) {
    store.dispatch(addCount())
  }
  render() {
    console.log(this)
    return (
      <Layout>
        <h1>This is the Index page.</h1>
        <AddCount />
      </Layout>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: bindActionCreators(addCount, dispatch)
  }
}

export default withRedux(initStore, null, mapDispatchToProps)(Index)
