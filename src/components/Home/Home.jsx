import React from 'react'
import './Home.css'
// import Web from './web4.png';
// import CV from './cv_png.png';
import CV_link from '../../assests/files/rakesh_resume1.pdf';
import Lap from '../../assests/images/lap2.png'
export default function Home() {
  return (
    <section className='home' id='home'>
      <div className="container-fluid __grad">
        <h1 className='section__brand'>Home</h1>
        <div className="row">
          <div className="col-lg-6">
            <div className="d-flex justify-content-between  left__intro animate__animated animate__fadeInLeft">
              <div className="container-fluid ">
                <span className='brand__name'>Hello there!<span className='__emoji__hi'>👋</span> </span><br></br>
                <span className='brand__name'>I' Rakesh Dhariwal</span><br></br>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="d-flex justify-content-between align-items-lg-center right__intro animate__animated animate__fadeInRight">
              <div className="container-fluid">
                <img src={Lap} alt="fgfd" className="img-fluid img-laptop" />
                <a href={CV_link} className='download_cv_btn'>Download CV</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
