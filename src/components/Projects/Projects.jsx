import './Projects.css';
import Projectcard from './Projectcard';
import React from 'react'
import Project__data from '../../assests/files/project_data.json';
export default function Projects() {
    return (
        <section className='__projects' id='projects'>
            <div className="container-fluid">
                <h1 className='section__brand'>Projects</h1>
                <div className="row justify-content-between">
                    {Project__data.map((element) => {
                        return <div className="col-md-2 col-lg-3 mb-3 animate__animated animate__zoomIn" key={element.id}>
                            <Projectcard
                                title={element.Title}
                                tech_used={element.Tech__used}
                                desc={element.Description}
                                source_code={element.Source_code}
                                live_link={element.Live_site}
                            />
                        </div>
                    })}
                </div>
            </div>

        </section>
    )
}
