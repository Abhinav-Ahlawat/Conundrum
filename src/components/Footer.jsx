import logo2 from "../assets/logo2.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <div className="footer-logo">
            <img
              src={logo2}
              alt="Conundrum - The Consulting Club, IIM Ranchi"
            />
          </div>

          <p>
            The official consulting club of IIM Ranchi,
            focused on structured thinking, strategy,
            and real-world business impact.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/events">Events</a>
          <a href="/resources">Resources</a>
          <a href="/contact">Contact Us</a>
        </div>

        <div className="footer-contact">
          <h3>Connect With Us</h3>

          <div className="footer-social-links">

            {/* Email */}
            <a
              href="mailto:consultingclub@iimranchi.ac.in"
              className="footer-social-icon"
              aria-label="Email Conundrum"
              title="Email"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3"
                  y="5"
                  width="18"
                  height="14"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M3 7L12 13L21 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/consultingclub-iimranchi/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
              aria-label="Conundrum LinkedIn"
              title="LinkedIn"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M7 10V17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle
                  cx="7"
                  cy="7"
                  r="1"
                  fill="currentColor"
                />
                <path
                  d="M11 17V10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M11 13.5C11 11.57 12.12 10 14 10C15.88 10 17 11.57 17 13.5V17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/conundrum_iimranchi/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
              aria-label="Conundrum Instagram"
              title="Instagram"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                />
              </svg>
            </a>

          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Conundrum, IIM Ranchi. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;