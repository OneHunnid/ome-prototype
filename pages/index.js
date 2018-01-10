import React from 'react'
import { bindActionCreators } from 'redux'
import { initStore, addCount, setMembershipType } from '../store'
import withRedux from 'next-redux-wrapper'

import stylesheet from 'styles/index.scss'
import Header from '../components/Header'
import HelpPanel from '../components/HelpPanel'
import SectionMembership from '../components/section/SectionMembership'
import SectionGeneral from '../components/section/SectionGeneral'
import SectionRoyalties from '../components/section/SectionRoyalties'
import SectionRequiredDocuments from '../components/section/SectionRequiredDocuments'
import SectionCreateAccount from '../components/section/SectionCreateAccount'
import SectionPayment from '../components/section/SectionPayment'


class Index extends React.Component {
  static getInitialProps ({ store }) {
    store.dispatch(setMembershipType())
  }
  render() {
    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <Header />
        <HelpPanel />

        <div className="main-wrapper">
          <div className="app">
            <SectionMembership />
            <SectionGeneral />
            <SectionRoyalties />
            <SectionRequiredDocuments />
            <SectionCreateAccount />
            <SectionPayment />

            <div className="app__section section-review curtain-call">
              <div className="indicator">7</div>
              <div className="app__section__title">Review & Submit</div>
              <div className="button-group button-group--no-bottom-margin">
                <div className="button button--continue">Submit Application</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setMembershipType: bindActionCreators(setMembershipType, dispatch),
  }
}

export default withRedux(initStore, null, mapDispatchToProps)(Index)
