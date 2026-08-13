function ContactPage() {
    return (
      <main>
        <section className="section contact-page">
  
          <div className="section-heading">
            <span>GET IN TOUCH</span>
  
            <h2>Contact Us</h2>
  
            <p>
              Have a business challenge or want to connect with
              Conundrum? Reach out to us through our official channels.
            </p>
          </div>
  
          <div className="about-content">
  
            <div className="about-main">
              <h3>Work With Conundrum</h3>
  
              <p>
                We work with businesses and organisations to solve
                real-world problems through structured thinking,
                research, and strategy.
              </p>
  
              <a
                href="mailto:consultingclub@iimranchi.ac.in"
                className="contact-link"
              >
                <svg
                  className="contact-svg"
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
  
                <span>consultingclub@iimranchi.ac.in</span>
              </a>
            </div>
  
  
            <div className="about-main">
              <h3>Connect With Us</h3>
  
              <p>
                Follow and connect with Conundrum through our official
                social media channels.
              </p>
  
              <div className="social-links">
  
                <a
                  href="https://www.instagram.com/conundrum_iimranchi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <svg
                    className="social-svg"
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
  
                  <span>Instagram</span>
                </a>
  
  
                <a
                  href="https://www.linkedin.com/in/consultingclub-iimranchi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <svg
                    className="social-svg"
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
  
                  <span>LinkedIn</span>
                </a>
  
              </div>
            </div>
  
          </div>
  
        </section>
      </main>
    );
  }
  
  export default ContactPage;