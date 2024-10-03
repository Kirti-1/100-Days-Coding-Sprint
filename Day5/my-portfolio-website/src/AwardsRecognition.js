import React from 'react';
import './AwardsRecognition.css'; // Make sure to create this CSS file
const awardsData = [
{
title: "Best Developer Award",
year: "2023",
icon: "fas fa-trophy",
description: "Awarded for outstanding performance in software development."
},
{
title: "Employee of the Month",
year: "2022",
icon: "fas fa-star",
description: "Recognized for exceptional contributions to team projects."
},
{
title: "Hackathon Winner",
year: "2021",
icon: "fas fa-flag-checkered",
description: "Led a team to victory in the annual coding hackathon."
},
{
title: "Outstanding Contribution to Open Source",
year: "2020",
icon: "fas fa-code-branch",
description: "Acknowledged for significant contributions to open-source projects."
},
{
title: "Top Performer of the Year",
year: "2019",
icon: "fas fa-medal",
description: "Recognized for consistent high performance and leadership."
}
];
const AwardsRecognition = () => {
return (
<div className="awards-container">
   <h2>Awards and Recognition</h2>
   <div className="awards-list">
      {awardsData.map((award, index) => (
      <div className="award" key={index}>
         <i className={award.icon}></i>
         <div className="award-details">
            <h3>{award.title}</h3>
            <p>{award.description}</p>
            <span>{award.year}</span>
         </div>
      </div>
      ))}
   </div>
</div>
);
};
export default AwardsRecognition;