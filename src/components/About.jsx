import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import "./About.css";

const About = () => {
  const navigate = useNavigate();

  const handleJoinUsClick = () => {
    navigate("/donation"); // Navigate to donation or home as required
  };

  return (
    <div className="about-page">
      <Navbar />
      <div className="about-container">
        <h1 className="about-title">Spark a New Era of Innovation with CrowdSpark</h1>
        <p className="about-subtitle">
          From dreams to reality — empowering creators and backers to shape the future through seamless crowdfunding experiences.
        </p>

        <div className="about-sections">
          <div className="about-card">
            <h2>Our Mission</h2>
            <p>
              To democratize funding by connecting creators with a global audience of backers passionate about supporting ideas that matter.
            </p>
          </div>

          <div className="about-card">
            <h2>Why CrowdSpark?</h2>
            <ul>
              <li>Fast and secure funding process</li>
              <li>Global community of innovative thinkers</li>
              <li>Powerful marketing and promotional tools</li>
              <li>Real-time campaign performance analytics</li>
            </ul>
          </div>

          <div className="about-card">
            <h2>How It Works</h2>
            <ol>
              <li>Creators submit their campaign and funding goals.</li>
              <li>Projects are shared globally with backers.</li>
              <li>Backers contribute and support their favorite campaigns.</li>
              <li>Creators bring their ideas to life and share success stories!</li>
            </ol>
          </div>

          <div className="about-card">
            <h2>Achievements</h2>
            <p>
              <strong>50,000+</strong> successful projects funded and counting.  
              <br />
              <strong>$100M+</strong> raised by creators worldwide.
              <br />
              Supported by <strong>100,000+</strong> passionate backers globally.
            </p>
          </div>

          <div className="about-card">
            <h2>Collaborations & Partnerships</h2>
            <p>
              We proudly partner with leading tech companies, creators, and
              organizations to deliver the best experience for creators and
              backers alike.  
              Join us to unlock limitless opportunities for innovation.
            </p>
          </div>
        </div>

        <div className="about-testimonials">
          <h2>What Our Community Says</h2>
          <div className="testimonial-card">
            <p>
              "CrowdSpark gave life to our dream project and connected us with a global audience that believes in our vision."
            </p>
            <span>- Alex T., Tech Entrepreneur</span>
          </div>
          <div className="testimonial-card">
            <p>
              "As a backer, it feels rewarding to support meaningful projects and watch them come to life."
            </p>
            <span>- Mia K., Project Backer</span>
          </div>
        </div>

        <button className="about-cta" onClick={handleJoinUsClick}>
          Join the Movement
        </button>
      </div>
    </div>
  );
};

export default About;
