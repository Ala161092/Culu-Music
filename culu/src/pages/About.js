import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const About = () => {
  return (
  <div className='contact-wrapper'>
      <div className='about-me-container'>
      <h2>about me.</h2>
      <p>I hope you have enjoyed browsing through the side and maybe even jas some inspiration, for that all import
          <br />
          <span>Which Movie or Show should I watch next?!</span>
      </p>
      <h3>This Project was build using:</h3>
      <div className='skills-container'>
      <i class="devicon-html5-plain-wordmark"></i>
      <i class="devicon-react-original-wordmark"></i>
      <i class="devicon-javascript-plain"></i>
      <i class="devicon-css3-plain-wordmark"></i>
      <i class="devicon-sass-original"></i>

      </div>
      </div>
      <div className='contact-container'>
      <h1>contact me.</h1>
        <a href='https://github.com/Ala161092'>
          <FaGithub />
          GitHub
        </a>
        <a href='https://www.linkedin.com/in/ala-rahman-879849222/'>
          <FaLinkedin />
          LinkedIn
        </a>

      </div>
  </div>
  )
};

export default About;
