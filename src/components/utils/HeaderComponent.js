import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

class HeaderComponent extends PureComponent {
  render () {
    return (
      <nav className="navbar main-navbar">
        <div className="container">
          <Link className="navbar-brand" to="#">MasjidUmmat</Link>
          <div className="navbar-menu ml-auto mr-5">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="#">Menu 1</Link>
              </li>
              <li className="nav-item">
                <Link to="#">Menu 2</Link>
              </li>
              <li className="nav-item">
                <Link to="#">Menu 3</Link>
              </li>
              <li className="nav-item">
                <Link to="#">Menu 4</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-menu">
            <Link to="#" className="btn btn-main">Masuk</Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default HeaderComponent
