import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Typography from '@material-ui/core/Typography';

import { faBootstrap, faCss3Alt, faGithub, faHtml5, faJs, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import mongo from '../../images/mongodb-2-1175137.png';
import firebase from '../../images/google_firebase-2-512.png';
import netlify from '../../images/logoNetlify.png';
import heroku from '../../images/heroku-5-569467.png';


 




const ResumeDetail = () => {
    return (
        <div className="container">
            <nav style={{backgroundColor: "rgb(0, 34, 51)"}} class="navbar navbar-expand-lg navbar-light">
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
            <h2 style={{color: "rgb(0, 34, 51)"}} className="fw-bolder text-center mt-4 mb-5">Resume Detail</h2>
            <div className="row">
                <div className="">
                    <React.Fragment>
                        <Timeline align="alternate">
                            <TimelineItem>
                                <TimelineOppositeContent>
                                    <Typography color="textSecondary">
                                        <div className="">

                                        </div>
                                    </Typography>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot color="primary"/>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography>
                                    <div>
                                        <h4 className="text-dark">My <span className="text-secondary">self</span> </h4>
                                        <p>Hi, I'm Sa'ad from Chattogram, Bangladesh. A frontend web developer, and an IT professional with enough knowledge and proficiency in JavaScript, ReactJs, HTML , CSS and mobile responsive web development.</p>
                                    </div>
                                    </Typography>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent>
                                    <Typography>
                                        <div className="">
                                            <h4 className="text-secondary"><span className="text-dark">Academic</span> Education</h4>
                                            <p><span className="fw-bold">Higher Education</span> <br/>I have completed my higher education which is equal to "Masters in Islamic studies" from Madrasha board. <br/><span className="fw-bold">Secondary Education</span> <br/> my secondary educational background also belongs to Madrasha board</p>
                                        </div>
                                    </Typography>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot color="secondary"/>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography>
                                    <div><h3 style={{color: "rgb(83, 59, 120)"}} className="fw-bolder text-center mt-4 mb-3">Programming Skills</h3></div>
                                <div className="text-center">
                                    <span style={{color: "rgb(221, 75, 37)"}} className="badge bg-light p-3 fs-5 fw-bold shadow m-3"><FontAwesomeIcon icon={faHtml5} /> HTML5</span>
                                    <span style={{color: "rgb(4, 104, 185)"}} className="badge p-3 fs-5 fw-bold shadow m-3"><FontAwesomeIcon icon={faCss3Alt} /> CSS3</span>
                                    <span style={{color: "rgb(83, 59, 120)"}} className="badge p-3 fs-5 fw-bold shadow m-3"><FontAwesomeIcon icon={faBootstrap} ></FontAwesomeIcon> Bootstrap</span>
                                    <span style={{color: "rgb(251, 214, 1)"}} className="badge p-3 fs-5 fw-bold shadow m-3"><FontAwesomeIcon icon={faJs} ></FontAwesomeIcon> JavaScript</span>
                                    <span className="badge text-info p-3 fs-5 fw-bold shadow m-3"><FontAwesomeIcon icon={faReact} /> React</span>
                                    <span className="badge text-success p-3 fs-5 fw-bold shadow m-3"><FontAwesomeIcon icon={faNodeJs} /> NodeJs</span>
                                    <span className="badge text-success p-3 fs-5 fw-bold shadow m-3">
                                        <img style={{ height: "23px" }} src={mongo} alt="" />
                                    MongoDb</span>
                                    <span className="badge text-warning p-3 fs-5 fw-bold shadow m-3">ExpressJs</span>
                                    <span className="badge text-warning p-3 fs-5 fw-bold shadow m-3">
                                        <img style={{ height: "23px" }} src={firebase} alt="" />
                                    Firebase</span>
                                </div> 
                                    </Typography>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent>
                                    <Typography color="textSecondary">
                                    <div><h3 style={{color: "rgb(83, 59, 120)"}} className="fw-bolder text-center mt-4 mb-3">Tools</h3></div>
                                    <div className="text-center">
                                    <span className="badge bg-light p-3 fs-5 fw-bold text-secondary shadow"><FontAwesomeIcon icon={faGithub} /> Github</span>
                                    <span className="badge text-info p-3 fs-5 fw-bold shadow m-3">
                                        <img style={{ height: "23px" }} src={netlify} alt="" /> Netlify</span>
                                    <span className="p-3 fs-5 fw-bold mt-3 shadow">
                                        <img style={{ height: "23px" , color: "rgb(65, 0, 147)"}} src={heroku} alt="" /> Heroku</span>
                                    </div>
                                    </Typography>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot color="primary"/>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography>

                                    </Typography>
                                </TimelineContent>
                            </TimelineItem>
                            {/* <TimelineItem>
                                <TimelineOppositeContent>
                                    <Typography color="textSecondary">9:00 am</Typography>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot color="secondary"/>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography>Repeat</Typography>
                                </TimelineContent>
                            </TimelineItem> */}
                        </Timeline>
                    </React.Fragment>
                </div>
            </div>
        </div>
    );
};

export default ResumeDetail;