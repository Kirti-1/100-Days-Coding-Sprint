import React, { useEffect, useState } from 'react';
import './QualificationsRocket.css'; // Make sure to create this CSS file
const QualificationsRocket = () => {
const [rocketPosition, setRocketPosition] = useState(100); // Initial position of the rocket
const handleScroll = () => {
const scrollPosition = window.scrollY; // Get the current scroll position
setRocketPosition(100 + scrollPosition); // Update rocket position based on scroll
};
useEffect(() => {
window.addEventListener('scroll', handleScroll);
// Clean up the event listener on component unmount
return () => {
window.removeEventListener('scroll', handleScroll);
};
}, []);
return (
<div className="container">
   <div className="qualifications left">
      <div className="education">
         <h3>Bachelor of Science in Computer Science</h3>
         <p>
            <strong>University of California, Berkeley</strong> | <em>Graduated: May 2020</em>
         </p>
      </div>
      <div className="certifications">
         <h3>Certifications</h3>
         <ul>
            <li>
               Certified Kubernetes Administrator (CKA) | <em>Issued: January 2023</em>
            </li>
            <li>
               AWS Certified Solutions Architect – Associate | <em>Issued: June 2022</em>
            </li>
            <li>
               Scrum Master Certification | <em>Issued: September 2021</em>
            </li>
         </ul>
      </div>
   </div>
   <div className="line"></div>
   <div className="rocket" style={{ bottom: `${rocketPosition}px` }}>
   <i className="fas fa-rocket"></i>
</div>
<div className="qualifications right">
   <div className="additional-qualifications">
      <h3>Additional Qualifications</h3>
      <ul>
         <li>Completed training in Machine Learning and AI applications.</li>
         <li>
            Participated in various hackathons, winning 2nd place at the 2021 Global Hackathon.
         </li>
         <li>Proficient in multiple programming languages: Java, Python, JavaScript, C++.</li>
      </ul>
   </div>
</div>
</div>
);
};
export default QualificationsRocket;