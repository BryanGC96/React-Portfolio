import React from 'react';

const Resume = () => {
  return (
    <section style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Resume</h1>
      {/* Indicates the download action, and the name that will be given to the file. */}
      <a href="./src/assets/CV updated.pdf" download="Bryan_Gomez_Resume.pdf"> 
        <button style={{ marginBottom: '20px', padding: '10px 20px', fontSize: '20px', color:'#646cffaa' }}>
          Download Resume
        </button>
      </a>
      <div>
        <h2>Proficiencies</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ marginBottom: '10px' }}>- HTML & CSS</li>
          <li style={{ marginBottom: '10px' }}>- JavaScript</li>
          <li style={{ marginBottom: '10px' }}>- React</li>
          <li style={{ marginBottom: '10px' }}>- Node.js</li>
          <li style={{ marginBottom: '10px' }}>- Express.js</li>
          <li style={{ marginBottom: '10px' }}>- MongoDB</li>
          <li style={{ marginBottom: '10px' }}>- SQL</li>
          <li style={{ marginBottom: '10px' }}>- Git & GitHub</li>
        </ul>
      </div>
    </section>
  );
};

export default Resume;
