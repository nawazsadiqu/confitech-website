import {
  ArrowUpRight,
  Mail,
  Phone,
} from "lucide-react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "../styles/finalCta.css";


const FinalCTA = () => {
  return (
    <section className="final-cta">

      <div className="container">

        <motion.div
          className="final-cta-wrapper"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          {/* DECORATION */}
          <div className="final-cta-lines" />
          <div className="final-cta-dots final-cta-dots-left" />
          <div className="final-cta-dots final-cta-dots-right" />


          {/* ================================================= */}
          {/* LEFT CONTENT                                      */}
          {/* ================================================= */}

          <div className="final-cta-content">

            <span className="final-cta-label">
              LET&apos;S WORK TOGETHER
            </span>


            <div className="final-cta-label-line" />


            <h2>
              Ready to build a better
              <span>
                technology environment
                <b>?</b>
              </span>
            </h2>


            <p className="final-cta-description">
              Talk to Confitech about your networking infrastructure,
              safety and security, data centre infrastructure, audio visual
              systems and building management requirements.
            </p>


            <div className="final-cta-actions">

              <Link
                to="/contact"
                className="final-cta-primary"
              >
                Discuss Your Requirement

                <span>
                  <ArrowUpRight
                    size={18}
                    strokeWidth={2}
                  />
                </span>
              </Link>


              <a
                href="mailto:contact@confitech.co"
                className="final-cta-email"
              >
                <Mail
                  size={18}
                  strokeWidth={1.8}
                />

                <span>
                  contact@confitech.co
                </span>
              </a>

            </div>

          </div>


          {/* ================================================= */}
          {/* DIVIDER                                           */}
          {/* ================================================= */}

          <div className="final-cta-divider" />


          {/* ================================================= */}
          {/* RIGHT PHONE PANEL                                  */}
          {/* ================================================= */}

          <motion.div
            className="final-cta-contact"
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.7,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <div className="final-cta-phone-icon">
              <Phone
                size={30}
                strokeWidth={1.7}
              />
            </div>


            <span className="final-cta-contact-label">
              Talk to our team
            </span>


            <div className="final-cta-phone-line" />


            <a
              href="tel:+96899443792"
              className="final-cta-phone"
            >
              +968 9944 3792
            </a>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
};


export default FinalCTA;