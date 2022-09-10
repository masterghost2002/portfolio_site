import React from 'react'
import './Skills.css'
export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container-fluid">
        <h1 className='section__brand'>Skills</h1>
        <div className="row">
          <div className="col-lg-6">
            <div className="container __leftContainer">
              <div className='container __leftheading'>Proficiency</div>
              <div className="progress  mt-4">
                <div className="progress-bar bg-success" role="progressbar" style={{ width: "87%", height: "30px" }} aria-valuenow="87" aria-valuemin="0" aria-valuemax="100"><span>C/C++</span></div>
              </div>
              <div className="progress  mt-4">
                <div className="progress-bar bg-info" role="progressbar" style={{ width: "70%" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"><span>JavaScript</span></div>
              </div>
              <div className="progress  mt-4">
                <div className="progress-bar bg-warning" role="progressbar" style={{ width: "63%" }} aria-valuenow="63" aria-valuemin="0" aria-valuemax="100"><span>MERN</span></div>
              </div>
              <div className="progress  mt-4">
                <div className="progress-bar bg-danger" role="progressbar" style={{ width: "33%" }} aria-valuenow="33" aria-valuemin="0" aria-valuemax="100"><span>Java</span></div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="container __rightContainer">
              <div className='container __leftheading'>What I do? 🤔</div>
                <ul>
                  <li>Problem solving, doing on daily basis (Leetcode).</li>
                  <li>MERN Development.</li>
                  <li>Exploring --> DevOps</li>
                </ul>
                <div className='container __leftheading'>Core 📖</div>
                <ul>
                  <li>DBMS (With Sql).</li>
                  <li>OOPS.</li>
                  <li>Operating System.</li>
                </ul>
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}
