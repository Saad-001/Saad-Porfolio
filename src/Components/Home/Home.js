import React from 'react';
import profilePic from '../../images/profilePic.jpg';
import Typewriter from 'typewriter-effect';
import Background from '../../images/wave-haikei.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import hello from '../../images/handwaving.gif';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import info from '../../images/info.png';


const Home = () => {
    return (
        <div className="">
            <nav style={{backgroundColor: "rgb(0, 34, 51)"}} class="navbar container navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/"> <span className="text-white ms-5 fs-3 fw-bold">Md</span> <span className="fw-bold fs-3 text-white"> Sa'ad</span> </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse ms-5" id="navbarNav">
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
            <div className="container">
                {/* removed */}
                <div style={{ backgroundImage: `url(${Background})`, backgroundSize: "cover" }} className="row p-3 pb-5">
                    <div className="col-md-5 ps-5">
                        <div className="">
                            <img style={{ height: "300px", borderRadius: "5px", border: "5px solid white" }} className="img-fluid mt-5" src={profilePic} alt="" />
                        </div>
                    </div>
                    <div className="col-md-7 text-center mt-4 mb-4">
                        <h1 className="text-white fw-bold mt-5">Hello...<img style={{ height: "80px" }} src={hello} alt="" /></h1>
                        <span className="text-white fs-1 fw-bold">"I'm Sa'ad"</span>
                        <h2 className="text-white fw-bold">
                            <Typewriter
                                options={{
                                    strings: ['Frontend Web Developer', 'Welcome to my portfolio'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h2>
                        <div className="mt-5">
                           <a href="https://www.facebook.com/mohammad.sayem.3572/" target="_blank" rel="noreferrer"><FontAwesomeIcon cursor="pointer" className="fs-2 text-white me-3" icon={faFacebook} /></a>

                           <a href="https://www.linkedin.com/in/md-sa-ad-a88843210/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="fs-2 text-white me-3" cursor="pointer" icon={faLinkedin}/></a>

                           <a href="https://github.com/Saad-001/" target="_blank" rel="noreferrer"><FontAwesomeIcon cursor="pointer" className="fs-2 text-white" icon={faGithub} /></a>
                        </div>
                    </div>
                </div>

                <div className="row p-5">
                    <div className="col-md-6 mt-2 pe-5">
                        <h2 className="fw-bold mb-4">About <span style={{ color: "rgb(15, 64, 134)" }}>Me</span></h2>
                        <div className="mb-4">
                            <p>Hi, I'm Sa'ad. A frontend web developer, and a self-motivated IT professional with enough knowledge and proficiency in JavaScript, ReactJs, HTML , CSS and mobile responsive web development, as well as strong skills and ability in writing clean and efficient code.</p>
                        </div>
                        <a href="https://drive.google.com/uc?export=download&id=1gADX_EGXkG4gI_a1ZawNVQNv5dKvG-ov" style={{ backgroundColor: "rgb(15, 64, 134)", color: "white" }} className="btn"><FontAwesomeIcon icon={faDownload} /> Get Resume</a>
                    </div>
                    <div className="col-md-6 mt-3">
                        <img className="img-fluid" src={info} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;