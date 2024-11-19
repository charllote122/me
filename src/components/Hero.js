import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Sofia 👋</h1>
        <p>
          I'm a passionate student exploring the world of <strong>Web Development</strong> and <strong>Programming</strong>.
        </p>
        <p>
          I'm learning technologies like <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>ReactJS</strong>, <strong>PHP</strong>, and <strong>Python</strong>.
        </p>
        <a href="#about" className="btn">Learn More About Me</a>
      </div>
      <div className="hero-icon">
        {/* Simple icon or placeholder */}
        <span>👩‍💻</span> {/* Represents a developer or student */}
      </div>
    </section>
  );
};

export default Hero;
