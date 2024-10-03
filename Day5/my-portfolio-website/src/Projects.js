import React from "react";
import './Projects.css';

const Projects = () => {
    return (
        <div>
            <section id="projects" style={{textAlign:'left', backgroundColor: '#D8E2DC'}}>
<h2>Projects</h2>

<div class="project">
  <img src="path-to-thumbnail1.jpg" alt="Project 1 Thumbnail" class="thumbnail"/>
  <div class="project-info" >
    <h3>Project Title 1</h3>
    <p><strong>Technologies:</strong> JavaScript, React, Node.js</p>
    <p>Developed a full-stack web application for real-time chat functionality. Integrated WebSocket for fast, bi-directional communication, and optimized the backend for handling up to 5,000 concurrent users.</p>
    <a href="https://github.com/username/project1" target="_blank">View on GitHub</a>
  </div>
</div>

<div class="project">
  <img src="path-to-thumbnail2.jpg" alt="Project 2 Thumbnail" class="thumbnail"/>
  <div class="project-info">
    <h3>Project Title 2</h3>
    <p><strong>Technologies:</strong> Python, Django, MySQL</p>
    <p>Created a scalable e-commerce platform that supports payment processing and order tracking. The system improved the overall sales experience and decreased checkout times by 30%.</p>
    <a href="https://github.com/username/project2" target="_blank">View on GitHub</a>
  </div>
</div>

<div class="project">
  <img src="path-to-thumbnail3.jpg" alt="Project 3 Thumbnail" class="thumbnail"/>
  <div class="project-info">
    <h3>Project Title 3</h3>
    <p><strong>Technologies:</strong> AWS, Lambda, DynamoDB</p>
    <p>Developed a serverless solution using AWS Lambda to automate data processing pipelines, reducing data processing time by 40% and minimizing operational costs.</p>
    <a href="https://github.com/username/project3" target="_blank">View on GitHub</a>
  </div>
</div>
</section>
        </div>
    )
};

export default Projects;
