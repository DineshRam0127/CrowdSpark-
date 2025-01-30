import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.remove("no-scroll"); // Ensure scrolling is enabled on Home
  }, []);

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-content">
        {/* Hero Section with Video */}
        <section className="hero-section">
          <div className="video-overlay">
            <video autoPlay muted loop className="hero-video">
              <source src="/V1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="hero-text">
              <h1 className="hero-title">Welcome to CrowdSpark</h1>
              <p className="hero-description">
                Discover and support innovative ideas!
              </p>
              <button
                className="cta-button"
                onClick={() => navigate("/projects")}
              >
                Explore Projects
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features">
          <h2>Our Features</h2>
          <ul>
            <li>Detailed project descriptions</li>
            <li>Secure payment options</li>
            <li>Community support and feedback</li>
            <li>Real-time project updates</li>
            <li>Personalized project recommendations</li>
            <li>Easy project submission process</li>
          </ul>
        </section>

        {/* How It Works Section */}
        <section className="how-it-works">
          <h2>How It Works</h2>
          <div className="steps-container">
            <div className="step">
              <h3>1. Discover</h3>
              <p>Find projects that align with your interests.</p>
            </div>
            <div className="step">
              <h3>2. Support</h3>
              <p>Contribute to projects and make a difference.</p>
            </div>
            <div className="step">
              <h3>3. Track</h3>
              <p>Stay updated on the progress of your supported projects.</p>
            </div>
          </div>
        </section>

        {/* Latest Projects Section */}
        <section className="latest-projects">
          <h2>Latest Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Solar Energy Initiative</h3>
              <p>
                A groundbreaking solar energy solution aiming to reduce carbon
                footprints.
              </p>
              <button
                className="cta-button"
                onClick={() => navigate("/projects/solar-energy")}
              >
                Learn More
              </button>
            </div>
            <div className="project-card">
              <h3>Water Purification System</h3>
              <p>
                Providing clean and safe drinking water to rural communities.
              </p>
              <button
                className="cta-button"
                onClick={() => navigate("/projects/water-purification")}
              >
                Learn More
              </button>
            </div>
            <div className="project-card">
              <h3>Eco-Friendly Fashion</h3>
              <p>
                Sustainable clothing made from organic and recycled materials.
              </p>
              <button
                className="cta-button"
                onClick={() => navigate("/projects/eco-fashion")}
              >
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials">
          <h2>What Our Users Say</h2>
          <div className="testimonial-cards">
            <div className="testimonial">
              <p>
                "CrowdSpark has helped me bring my dream project to life. The
                community here is amazing!"
              </p>
              <h4>- Sarah M.</h4>
            </div>
            <div className="testimonial">
              <p>
                "As a supporter, I feel confident knowing my contributions are
                making a real impact."
              </p>
              <h4>- Tamil</h4>
            </div>
            <div className="testimonial">
              <p>
                "The user-friendly interface and features make CrowdSpark stand
                out from the rest."
              </p>
              <h4>- Yasvanth</h4>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 CrowdSpark. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
