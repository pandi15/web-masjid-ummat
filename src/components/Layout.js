import React, { PureComponent } from 'react'

import HeaderComponent from './utils/HeaderComponent'

class Layout extends PureComponent {
  render () {
    const { children } = this.props
    return (
      <>
        <HeaderComponent />
        { children }
      </>
    )
  }
}

export default Layout
