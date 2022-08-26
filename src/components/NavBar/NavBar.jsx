import React from 'react'
import './NavBar.css'
// import UserIcon from '../../img/user-icon.png'
export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="brand">
                    <a href="www.google.com" className="navbar-brand">Home</a>
                </div>
                <div className="navbar-nav-item">
                    <a href="#home" className="nav-item nav-link">
                        <i class='bx bx-home-alt'></i>
                        <span>Home</span>
                    </a>
                    <a href="#skills" className="nav-item nav-link">
                        <i class='bx bx-code-alt'></i>
                        <span>Skills</span>
                    </a>
                    <a href="www.google.com" className="nav-item nav-link">
                        <i class='bx bx-briefcase-alt'></i>
                        <span>Projects</span>
                    </a>
                    <a href="www.google.com" className="nav-item nav-link">
                        <i class='bx bx-message-square-dots'></i>
                        <span>Contact</span>
                    </a>
                </div>
            </div>
        </nav>
    )
}