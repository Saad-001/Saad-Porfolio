import React from 'react';
import emailjs from 'emailjs-com';
import background from '../../images/wave-haikei.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons';

const About = () => {

    function sendEmail(e) {
        e.preventDefault();
        console.log(e.target)
        emailjs.sendForm('service_in8nyqn', 'template_jrvyycl', e.target, 'user_TkAu7rO8r3Izp8T8q2r2P')
            .then((result) => {
                console.log(result);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <div className="container-fluid">
            <nav style={{ backgroundColor: "rgb(0, 34, 51)" }} class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/"> <span className="text-white ms-3 fs-3 fw-bold">Md</span> <span className="fw-bold fs-3 text-white"> Sa'ad</span> </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse ms-3" id="navbarNav">
                        <ul class="navbar-nav ms-auto me-5">
                            <li class="nav-item">
                                <a class="nav-link active fw-bold text-white" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link fw-bold text-white" href="/resume">Resume</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link fw-bold text-white" href="/projects">Projects</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link fw-bold text-white" href="/about" tabindex="-1" aria-disabled="true">Contact Me</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div style={{backgroundImage: `url(${background})`, width: "100%", backgroundSize: "cover", height: "100vh"}}>
                <div className="text-center mb-4">
                    <h2 className="p-2 d-inline-block fw-bold text-white mt-3">Contact Me</h2>
                </div>
                <form className="contact-form container" onSubmit={sendEmail}>
                    <input type="hidden" name="contact_number" />
                    <label className="text-white">Name</label>
                    <input className="mb-3 form-control" type="text" name="user_name" />
                    <label className=" text-white">Email</label>
                    <input className="mb-3 form-control" type="email" name="user_email" />
                    <label className=" text-white">Message</label>
                    <textarea className="form-control" name="message" />
                    <input className="btn btn-danger mt-4" type="submit" value="Send Message"/>
                </form>
            </div>
        </div>
    );
};

export default About;