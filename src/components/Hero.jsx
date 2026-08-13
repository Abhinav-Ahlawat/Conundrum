import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        <div className="hero-text">
          <p className="hero-eyebrow">
            THE CONSULTING CLUB · IIM RANCHI
          </p>

          <h1>
            Helping Businesses
            <span> Unlock Their Next Move.</span>
          </h1>

          <p className="hero-description">
            Conundrum is the official consulting club of IIM Ranchi,
            bringing together student consultants with diverse academic
            and professional backgrounds to solve real-world business
            problems through structured thinking and strategy.
          </p>

          <div className="hero-buttons">
            <Link to="/about" className="btn btn-primary">
              Explore Conundrum
              <ArrowRight size={18} />
            </Link>

            <Link to="/contact" className="btn btn-secondary">
              Work With Us
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src={logo}
            alt="Conundrum - The Consulting Club, IIM Ranchi"
            className="hero-logo"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;