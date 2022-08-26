import React from 'react'
import './Home.css'
import Web from './web4.png';
import CV from './cv_png.png';
import CV_link from './rakesh_resume1.pdf';
export default function Home() {
  return (
    <section className='home' id='home'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8 intro_left">
            <div className="row intro_left_inside">
              <div className="col-lg-5">
                <img src={Web} alt="dfsf" className="img img__web" />
              </div>
              <div className="col-lg-7">
                <span className='brand__name'>Hi! I Rakesh Dhariwal :)</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 intro_right">
            <img src={CV} alt="dfsf" className="img img__cv" />
            <a href={CV_link} className='cv__download-btn'>Download CV</a>
          </div>
        </div>
      </div>
    </section>
  )
}
