import React from 'react'
export default function Projectcard(props) {
    return (
        <div className="card">
            <div className="card-body card__header">
                <h5 className="card-title">{props.title}</h5>
                <h6 className="card-subtitle mb-2">{props.tech_used}</h6>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item text-muted">{props.desc}</li>
            </ul>
            <div className="d-flex card-body __bottom_card justify-content-between">
                <a href={props.source_code} className="card-link">Source Code</a>
                <a href={props.live_link} className="card-link">Live Site</a>
            </div>
        </div>
    )
}
