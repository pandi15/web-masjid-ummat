import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

import Layout from 'components/Layout'
import mosqueImage from '../../assets/images/mosque.svg'

class Home extends PureComponent {
  render () {
    return (
      <>
        <Layout>
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
                      <Link to="#" className="btn btn-main">Bergabung Sekarang</Link>
                    </div>
                  </div>
                  <div className="col-8 header-image">
                    <img src={mosqueImage} alt="Masjid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </>
    )
  }
}

export default Home
