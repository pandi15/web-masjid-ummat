import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

import mosqueImage from '../../assets/images/mosque.svg'

class Home extends PureComponent {
  render () {
    return (
      <>
        <nav className="navbar main-navbar">
          <div className="container">
            <Link className="navbar-brand" to="#">MasjidUmmat</Link>
            <div className="navbar-menu ml-auto mr-5">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link href="#">Menu 1</Link>
                </li>
                <li className="nav-item">
                  <Link href="#">Menu 2</Link>
                </li>
                <li className="nav-item">
                  <Link href="#">Menu 3</Link>
                </li>
                <li className="nav-item">
                  <Link href="#">Menu 4</Link>
                </li>
              </ul>
            </div>
            <div className="navbar-menu">
              <Link href="#" className="btn btn-main">Masuk</Link>
            </div>
          </div>
        </nav>

        <div className="header">
          <div className="header-content">
            <div className="container">
              <div className="row">
                <div className="col-4">
                  <div className="header-text main-text">
                    <div className="title">Segera Hadir Aplikasi MasjidUmmat</div>
                    <div className="description">Satukan ummat dengan memakmurkan masjid, kelola dan bagikan berbagai kegiatan mesjid kita dengan mudah, temukan berbagai kegiatan mesjid dengan mudah</div>
                  </div>
                  <div className="mt-5">
                    <Link href="#" className="btn btn-main">Bergabung Sekarang</Link>
                  </div>
                </div>
                <div className="col-8 header-image">
                  <img src={mosqueImage} alt="Masjid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Home
