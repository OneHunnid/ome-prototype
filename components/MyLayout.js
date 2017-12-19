import React from 'react'
import stylesheet from 'styles/index.scss'

class Layout extends React.Component {
  render() {
    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        {this.props.children}
      </div>
    )
  }
}

export default Layout
