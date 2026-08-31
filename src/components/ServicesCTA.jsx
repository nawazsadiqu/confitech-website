import {
  MessageCircle,
  ArrowRight,
} from "lucide-react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "../styles/servicesCta.css";


const ServicesCTA = () => {
  return (
    <section className="services-cta">

      {/* DECORATION */}
      <div className="services-cta-dots" />
      <div className="services-cta-wave" />


      <div className="container services-cta-container">

        <motion.div
          className="services-cta-inner"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          {/* ICON */}

          <div className="services-cta-icon">
            <MessageCircle
              size={28}
              strokeWidth={1.8}
            />
          </div>


          {/* MAIN MESSAGE */}

          <div className="services-cta-title">

            <h2>
              Let&apos;s build a stronger
              <span>
                technology foundation for
              </span>

              <span className="services-cta-green">
                your business.
              </span>
            </h2>

          </div>


          {/* DIVIDER */}

          <div className="services-cta-divider" />


          {/* RIGHT */}

          <div className="services-cta-action">

            <p>
              Talk to our experts and discover the right
              solution for your business needs.
            </p>


            <Link
              to="/contact"
              className="services-cta-button"
            >
              Get In Touch

              <ArrowRight
                size={15}
                strokeWidth={2}
              />
            </Link>

          </div>

        </motion.div>

      </div>

    </section>
  );
};


export default ServicesCTA;