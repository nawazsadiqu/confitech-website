import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import { Link } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-main">

          {/* BRAND */}

          <div className="footer-brand">

            <Link to="/" className="footer-logo">
              <img src="/images/confitech-logo.png" alt="Confitech" />
            </Link>

            <p>
              Integrated IT and communication solutions across
              networking, security, data centre infrastructure,
              audio visual systems and facilities automation.
            </p>

          </div>


          {/* COMPANY */}

          <div className="footer-column">

            <h4>Company</h4>

            <Link to="/about">About Confitech</Link>

            <Link to="/portfolio">Portfolio</Link>

            <Link to="/partners">Partners</Link>

            <Link to="/contact">Contact</Link>

          </div>


          {/* SERVICES */}

          <div className="footer-column">

            <h4>Services</h4>

            <Link to="/services">
              Networking Infrastructure
            </Link>

            <Link to="/services">
              Safety &amp; Security
            </Link>

            <Link to="/services">
              Data Centre Infrastructure
            </Link>

            <Link to="/services">
              Audio Visual &amp; CWE
            </Link>

            <Link to="/services">
              Building Management &amp; Automation
            </Link>

          </div>


          {/* CONTACT */}

          <div className="footer-column footer-contact">

            <h4>Contact</h4>

            <a
              href="https://maps.google.com/?q=Azaiba,Oman"
              target="_blank"
              rel="noreferrer"
            >
              <MapPin size={17} />

              <span>
                P.O. Box 2416, P.C 130
                <br />
                Azaiba, Sultanate of Oman
              </span>
            </a>

            <a href="tel:+96899443792">
              <Phone size={17} />
              <span>+968 9944 3792</span>
            </a>

            <a href="mailto:contact@confitech.co">
              <Mail size={17} />
              <span>contact@confitech.co</span>
            </a>

          </div>

        </div>


        {/* BOTTOM */}

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Confitech.
            All Rights Reserved.
          </p>

          <a href="#top">
            Back to top
            <ArrowUpRight size={15} />
          </a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;