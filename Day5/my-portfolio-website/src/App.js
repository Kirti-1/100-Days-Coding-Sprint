import './App.css';
import QualificationsRocket from './QualificationsRocket';
import AwardsRecognition from './AwardsRecognition';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
function App() {
return (
<div className="App">
   {/* Header position containing all my information */}
   <div id="header" style={{backgroundColor: '#E1F6F2'}}>
   <h1>Kirti Arora</h1>
   <h3>Senior Software Engineer</h3>
   <ul style={{ display: 'flex', flexDirection: 'row', listStyleType: 'none', padding: 0 ,'justifyContent':'center'}}>
   <li style={{ marginRight: '10px' }}><a href="#">LinkedIn</a></li>
   <li style={{ marginRight: '10px' }}><a href="#">Contact</a></li>
   <li style={{ marginRight: '10px' }}><a href="#">GitHub</a></li>
   <li style={{ marginRight: '10px' }}><a href="#">Codeforces</a></li>
   <li style={{ marginRight: '10px' }}><a href="#">LeetCode</a></li>
   </ul>
</div>
{/* body section containing - skills, Experience, projects, qualification, awards  */}
<div id="body">
   {/* make skills section more concise as per your skills */}
   <Skills/>
   <Experience/>
   <Projects/>
   <QualificationsRocket />
   <AwardsRecognition/>
</div>
</div>
);
}
export default App;