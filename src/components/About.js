import React from "react";
import Skills from "./Skills"; 


const About = () => {
  return (
    <section className="about" id="about">
      <h2>About Me</h2>
      <p>
        Hello, I'm a passionate student currently pursuing a degree in{" "}
        <strong>Information Technology</strong>. As I delve deeper into the world of
        programming, I'm learning to create innovative solutions using technologies such as{" "}
        <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>,{" "}
        <strong>ReactJS</strong>, <strong>PHP</strong>, and <strong>Python with Django</strong>. 
        My goal is to develop a strong foundation in web development, continuously improve my coding skills, 
        and ultimately become a full-stack developer.
      </p>
      <p>
        I'm particularly interested in <strong>full-stack development</strong> and enjoy working on both the 
        front-end and back-end of applications. With ReactJS, I focus on building dynamic, user-friendly web applications, 
        while with Python and Django, I explore back-end development, building robust and scalable web services.
      </p>
      <p>
        In addition to coding, I enjoy exploring new technologies and am always looking for opportunities to 
        collaborate with other developers and contribute to open-source projects.
      </p>
      
      
      <div className="goals">
        <h3>My Goals</h3>
        <ul>
          <li>Build dynamic web applications using the MERN stack (MongoDB, Express, React, Node.js)</li>
          <li>Master Python with Django for back-end web development</li>
          <li>Contribute to open-source projects and gain experience in collaborative environments</li>
          <li>Explore cloud computing platforms (AWS, Heroku) for deploying scalable applications</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
