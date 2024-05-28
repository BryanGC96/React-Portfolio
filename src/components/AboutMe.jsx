import React from 'react';

const AboutMe = () => {
  return (
    <section>
      <h1>About Me</h1>
      <img src="/src/assets/profileDevPic.jpg" alt="Image of the developer 'Bryan Gomez'" />
      <p className="aboutMeText">
        My name is Bryan Gomez, and I was born on the 25th of May 1996; I am 28 years old and I have a degree
        in Administration/Gastronomy/Chef. I worked in my profession for some years, but I decided to expand my
        knowledge and invest my time in studying full-stack web development so I can work in this field.
      </p>
      <ul className="aboutMeList">
        <li>I speak Spanish, English, French, and I'm learning Japanese.</li>
        <li>I like to learn about different cultures.</li>
        <li>I like music (playing it and listening to it).</li>
        <li>I like learning about new technologies.</li>
        <li>My hobbies are playing video games, music, cooking, and hiking/climbing.</li>
      </ul>
    </section>
  );
};

export default AboutMe;
