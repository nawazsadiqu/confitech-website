import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

const FinalCTA = () => {
  return (
    <section className="final-cta">

      <div className="container">

        <motion.div
          className="final-cta-wrapper"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >

          <div className="cta-decoration cta-decoration-one"></div>
          <div className="cta-decoration cta-decoration-two"></div>

          <div className="final-cta-content">

            <span className="cta-label">
              LET'S WORK TOGETHER
            </span>

            <h2>
              Ready to build a better
              <span> technology environment?</span>
            </h2>

            <p>
              Talk to Confitech about your networking, data centre,
              security, infrastructure and technology requirements.
            </p>

            <div className="final-cta-actions">

              <a href="/contact" className="cta-primary-button">
                Discuss Your Requirement
                <ArrowUpRight size={18} />
              </a>

              <a
                href="mailto:contact@confitech.co"
                className="cta-contact-link"
              >
                <Mail size={18} />
                contact@confitech.co
              </a>

            </div>

          </div>


          <div className="cta-side">

            <div className="cta-side-card">

              <div className="cta-phone-icon">
                <Phone size={25} />
              </div>

              <span>Talk to our team</span>

              <a href="tel:+96824613022">
                +968 24613022
              </a>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default FinalCTA;