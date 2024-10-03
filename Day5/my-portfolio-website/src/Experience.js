import React from 'react';
import './Experience.css'; // Make sure to create this CSS file
const Experience =  () => { return  (
<div>
   <section id="experience" style={{textAlign:'left', backgroundColor: '#D0EDEF'}}>
   <h2>Experience</h2>
   <div class="job">
      <h3>Software Development Engineer</h3>
      <p><strong>XYZ Tech Solutions</strong> – San Francisco, CA | <em>June 2021 – Present</em></p>
      <ul>
         <li>Led a team of 5 engineers to build and deploy a microservices-based architecture, reducing system downtime by 30%.</li>
         <li>Designed and implemented a RESTful API that processed over 10,000 requests per second, enhancing data flow efficiency.</li>
         <li>Optimized database queries, resulting in a 15% reduction in page load times for critical web applications.</li>
         <li>Collaborated with cross-functional teams using Agile methodologies to ensure timely project delivery.</li>
      </ul>
   </div>
   <div class="job">
      <h3>Backend Developer</h3>
      <p><strong>ABC Corp</strong> – Austin, TX | <em>March 2019 – May 2021</em></p>
      <ul>
         <li>Developed and maintained scalable server-side applications using Node.js and Express, improving performance by 20%.</li>
         <li>Implemented unit tests and integration tests using Mocha and Chai, ensuring 95% test coverage across the backend system.</li>
         <li>Worked with MongoDB to design database schemas, leading to a 40% increase in data retrieval speed.</li>
         <li>Automated deployment pipelines using Jenkins, resulting in a 50% reduction in deployment time.</li>
      </ul>
   </div>
   <div class="job">
      <h3>Junior Software Engineer</h3>
      <p><strong>DEF Inc.</strong> – New York, NY | <em>January 2017 – February 2019</em></p>
      <ul>
         <li>Assisted in the development of internal tools and applications using Python and Django, streamlining workflows for the QA team.</li>
         <li>Collaborated with senior engineers on code reviews and contributed to reducing bugs in production by 15%.</li>
         <li>Wrote detailed technical documentation for API integrations and internal processes, improving team collaboration.</li>
      </ul>
   </div>
   </section>
</div>
)
};
export default Experience;