import React from 'react'
import emailjs from 'emailjs-com';
import Github from '../../assests/social/github-logo.png'
import Hackerrank from '../../assests/social/hackerrank.png'
import Instagram from '../../assests/social/instagram.png'
import Leetcode from '../../assests/social/leetcode.png'
import Linkedin from '../../assests/social/linkedin.png'

import './Contact.css'
export default function Contact() {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_portfolio', 'template_rr2ve1e', e.target, '2L3iGLFweDHBxyW0w')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }
    return (
        <section className='contact' id='contact'>
            <h1 className='section__brand'>Contact</h1>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <h2 className='mailsection__'>Send a Mail</h2>
                        <form onSubmit={sendEmail} className="contact_us">
                            <div className="mb-1">
                                <label for="fullname" className='form-label text-muted'>Full Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="John Vick" name='fullname' />
                                <label for="fullname" className='form-label text-muted' >Subject</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="John Vick" name='subject' />
                                <label for="exampleFormControlInput1" class="form-label text-muted" >Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name='emailAddress' />
                            </div>
                            <div className="mb-1">
                                <label for="exampleFormControlTextarea1" class="form-label text-muted" >Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="2" name='message'></textarea>
                            </div>
                            <button type='submit' className='btn btn-send'>Send</button>
                        </form>
                    </div>
                    <div className="col-lg-6">
                        <h2 className='aboutsection__'>About Me</h2>
                        <div className="container about__">
                            <div className="container text-center">
                                <span className='__emoji__hi __emoji__hi2'>
                                    ✌️
                                </span>
                            </div>
                            <span>
                                "20 | Rakesh Dhariwal | MERN Stack | Problem Solving
                            </span>
                        </div>
                        <h2 className='social__'>Social</h2>
                        <div className="container-fluid social__icons">
                            <a href='https://github.com/masterghost2002/'>
                                <img src={Github} alt="leetcode" className='s_icons' />
                            </a>
                            <a href='hub.com/masterghost2002'>
                                <img src={Instagram} alt="leetcode" className='s_icons' />
                            </a>
                            <a href='https://www.linkedin.com/in/rakeshdhariwal61/'>
                                <img src={Linkedin} alt="leetcode" className='s_icons' />
                            </a>
                            <a href='https://leetcode.com/rakeshdhariwal61/'>
                                <img src={Leetcode} alt="leetcode" className='s_icons' />
                            </a>
                            <a href='https://www.hackerrank.com/rakeshdhariwal61'>
                                <img src={Hackerrank} alt="leetcode" className='s_icons' />
                            </a>
                        </div>
                        <div className="container-fluid last__note__ text-muted">
                            Made with ❤️ by Rakesh Dhariwal
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
