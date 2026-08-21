import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
  className="premium-hero"
  id="top"
  onMouseMove={(e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x =
      ((e.clientX - rect.left) / rect.width) * 100;

    const y =
      ((e.clientY - rect.top) / rect.height) * 100;

    e.currentTarget.style.setProperty(
      "--mouse-x",
      `${x}%`
    );

    e.currentTarget.style.setProperty(
      "--mouse-y",
      `${y}%`
    );
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.setProperty(
      "--mouse-x",
      "50%"
    );

    e.currentTarget.style.setProperty(
      "--mouse-y",
      "50%"
    );
  }}
>

      {/* VIDEO BACKGROUND */}
      <div className="premium-hero-image">
        <img
          src="/images/hero-data-center.png"
          alt="Confitech technology infrastructure"
        />
      </div>


      {/* DARK OVERLAY */}
      <div className="premium-hero-overlay"></div>

      {/* SUBTLE GREEN GLOW */}
      <div className="premium-hero-glow"></div>


      <div className="container premium-hero-container">

        <motion.div
          className="premium-hero-content"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div className="premium-hero-eyebrow">
            <span></span>

            NETWORKING / DATA CENTRES / SECURITY
          </div>


          <h1 className="mobile-hero-title">
            <span>Built to</span>
            <span>Connect.</span>
            <span>Engineered to</span>
            <span>Perform.</span>
          </h1>


          <div className="premium-hero-divider"></div>


          <p>
            Delivering dependable IT infrastructure, networking,
            data centre, security and technology solutions designed
            to support modern businesses.
          </p>


          <div className="premium-hero-actions">

            <a href="/contact" className="premium-hero-button">
              Get in Touch
              <ArrowUpRight size={18} />
            </a>

            <a href="/services" className="premium-hero-text-link">
              Explore Solutions
              <ArrowUpRight size={17} />
            </a>

          </div>

        </motion.div>


        {/* SMALL BOTTOM INFORMATION */}

        <motion.div
          className="premium-hero-bottom"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >

          <div className="premium-hero-service">
            <span>01</span>
            <div>
              <small>EXPERTISE</small>
              <strong>IT Infrastructure</strong>
            </div>
          </div>

          <div className="premium-hero-service">
            <span>02</span>
            <div>
              <small>SOLUTIONS</small>
              <strong>Data Centres</strong>
            </div>
          </div>

          <div className="premium-hero-service">
            <span>03</span>
            <div>
              <small>SECURITY</small>
              <strong>CCTV & Access Control</strong>
            </div>
          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;