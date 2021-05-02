import React from 'react';
import Project from './Project';
import ultra from '../../images/ultra.png';
import quick from '../../images/quickShop.png';
import league from '../../images/league.png';
import safe from '../../images/safe.png';
import penguin from '../../images/penguin.png';

const projectsData = [
    {   
        key: 1,
        img: ultra,
        name: "Ultra-Net",
        description: "This is a complete website for providing internet services. Where people can buy or book a service as there preference, users also can give a review.",
        siteUrl: "https://ultra-net-f2cfa.web.app/",
        codeUrl: "https://github.com/Saad-001/Ultra-net-client-side"
    },
    {   
        key: 2,
        img: quick,
        name: "Quick Shop",
        description: "An e-commerce website. Where people can buy there regular necessary products",
        siteUrl: "https://full-stack-assignment-9ad12.web.app/",
        codeUrl: "https://github.com/Saad-001/Quick-shop-client-side"
    },
    {   
        key: 3,
        img: league,
        name: "English Premier League",
        description: "I have used English Premier League's api for this project. In this project i displayed multiple teams and there details info of this club through cards",
        siteUrl: "https://quizzical-albattani-e6b6e2.netlify.app/",
        codeUrl: "https://github.com/Porgramming-Hero-web-course/react-router-Saad-001"
    },
    {   
        key: 4,
        img: safe,
        name: "Safe Ride",
        description: "This is a ride sharing site. people can hire bike, car, bus or a train for going there destination safely using this site",
        siteUrl: "https://assignment-nine-f0aca.web.app/",
        codeUrl: "https://github.com/Porgramming-Hero-web-course/react-auth-Saad-001"
    },
    {   
        key: 5,
        img: penguin,
        name: "Penguin Fashion",
        description: "A well designed static e-commerce website",
        siteUrl: "https://saad-001.github.io/second-assignment/",
        codeUrl: "https://github.com/Saad-001/second-assignment"
    }
]
const Projects = () => {
    return (
       <section className="container">
           <nav style={{backgroundColor: "rgb(0, 34, 51)"}} class="navbar  navbar-expand-lg navbar-light">
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
           <h2 style={{color: "rgb(15, 64, 134)"}} className="mb-5 text-center fw-bold mt-5">My Projects</h2>
            <div className="row justify-content-around">
            {
                projectsData.map(data => <Project key={data.key} data={data}></Project>)
            }
        </div>
       </section>
    );
};

export default Projects;