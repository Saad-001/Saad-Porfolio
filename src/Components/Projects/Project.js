import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Project.css';



const Project = ({ data }) => {
    
    return (
        <div class="card mb-4" style={{width:"18rem", backgroundColor: "rgb(0, 34, 51)"}}>
            <img src={data.img} class="card-img-top image mt-2 img-fluid" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title text-white">{data.name}</h5>
                    <p class="card-text text-white">{data.description}</p>
                    <div className="justify-content-between">
                        <a href={data.siteUrl} class="btn btn-primary me-2"><FontAwesomeIcon icon={faEye}/> Live site</a>
                        <a href={data.codeUrl} class="btn btn-primary"><FontAwesomeIcon icon={faCode}/> Code</a>
                    </div>
                </div>
        </div>
    );
};

export default Project;