import react from 'react';

import './Skills.css';

const Skills = () => {
    return (<div>
        <section id="skills" style={{ textAlign: 'left', backgroundColor: '#E0D4E7' }}>
      <h2>Technical Skills</h2>
      <h3>Programming Languages</h3>
      <ul>
         <li><strong>Proficient in:</strong> Java, Python, C++</li>
         <li><strong>Familiar with:</strong> JavaScript, Go, C#</li>
      </ul>
      <h3>Web Development</h3>
      <ul>
         <li><strong>Frontend:</strong> HTML, CSS, JavaScript, React</li>
         <li><strong>Backend:</strong> Node.js, Django, Spring Boot</li>
         <li><strong>API Design:</strong> REST, GraphQL</li>
      </ul>
      <h3>Databases</h3>
      <ul>
         <li><strong>SQL:</strong> MySQL, PostgreSQL</li>
         <li><strong>NoSQL:</strong> MongoDB</li>
      </ul>
      <h3>Cloud & DevOps</h3>
      <ul>
         <li><strong>Cloud Platforms:</strong> AWS, Google Cloud</li>
         <li><strong>Tools:</strong> Docker, Kubernetes, Jenkins</li>
         <li><strong>CI/CD:</strong> GitHub Actions, Travis CI</li>
      </ul>
      <h3>Version Control & Collaboration</h3>
      <ul>
         <li>Git, GitHub, Bitbucket</li>
         <li>Agile (Scrum, Kanban) project management: Jira, Confluence</li>
      </ul>
      <h3>Testing & Debugging</h3>
      <ul>
         <li><strong>Unit Testing:</strong> JUnit, PyTest</li>
         <li>Integration Testing, Selenium, Postman</li>
      </ul>
      <h2>Soft Skills</h2>
      <ul>
         <li>Strong problem-solving and debugging abilities</li>
         <li>Excellent written and verbal communication</li>
         <li>Team-oriented, collaborative mindset</li>
         <li>Adaptive to new technologies and tools</li>
         <li>Effective time management, able to meet deadlines</li>
      </ul>
      </section>
    </div>)
};

export default Skills;