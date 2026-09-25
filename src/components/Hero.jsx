import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "../styles/hero.css";

const Hero = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 24,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const assemblyVariants = {
    hidden: {},

    visible: {
      transition: {
        delayChildren: 0.25,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="home-hero">

      {/* BACKGROUND */}
      <div className="home-hero-glow" />
      <div className="home-hero-pattern" />


      <div className="container home-hero-container">

        {/* ================================================= */}
        {/* LEFT CONTENT                                      */}
        {/* ================================================= */}

        <motion.div
          className="home-hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          <motion.span
            className="home-hero-eyebrow"
            variants={itemVariants}
          >
            INTEGRATED IT & COMMUNICATION SOLUTIONS
          </motion.span>


          <motion.h1 variants={itemVariants}>
            Smarter infrastructure
            <span className="hero-green-dot">.</span>

            <span className="hero-title-second">
              Stronger business
              <span className="hero-green-dot">.</span>
            </span>
          </motion.h1>


          <motion.p
  className="home-hero-description"
  variants={itemVariants}
>
  Confitech delivers integrated IT and communication solutions
  across networking infrastructure, safety and security, data
  centre infrastructure, audio visual systems and building
  management automation—engineered and supported locally.
</motion.p>


          <motion.div
            className="home-hero-actions"
            variants={itemVariants}
          >

            <Link
              to="/services"
              className="hero-primary-button"
            >
              Explore Solutions

              <ArrowRight
                size={18}
                strokeWidth={2}
              />
            </Link>


            <Link
              to="/contact"
              className="hero-secondary-button"
            >
              Talk to an Expert

              <ArrowRight
                size={18}
                strokeWidth={2}
              />
            </Link>

          </motion.div>

        </motion.div>


        {/* ================================================= */}
        {/* RIGHT VISUAL                                      */}
        {/* ================================================= */}

        <motion.div
          className="home-hero-visual"
          variants={assemblyVariants}
          initial="hidden"
          animate="visible"
        >

          {/* THIS WRAPPER IS IMPORTANT */}
          <div className="hero-assembly">


            {/* NETWORK */}

            <motion.img
              src="/images/hero/network-lines.png"
              alt=""
              className="hero-layer hero-network-lines"
              variants={{
                hidden: {
                  opacity: 0,
                  scale: 0.78,
                },

                visible: {
                  opacity: 1,
                  scale: 1,

                  transition: {
                    duration: 1.05,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
            />


            {/* CLOUD */}

            <motion.img
              src="/images/hero/cloud.png"
              alt=""
              className="hero-layer hero-cloud"
              variants={{
                hidden: {
                  opacity: 0,
                  y: -80,
                  scale: 0.68,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,

                  transition: {
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
            />


            {/* SERVERS */}

            <motion.img
              src="/images/hero/servers.png"
              alt=""
              className="hero-layer hero-servers"
              variants={{
                hidden: {
                  opacity: 0,
                  x: -100,
                  y: 20,
                  scale: 0.72,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1,

                  transition: {
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
            />


            {/* MONITOR */}

            <motion.img
              src="/images/hero/monitor.png"
              alt=""
              className="hero-layer hero-monitor"
              variants={{
                hidden: {
                  opacity: 0,
                  x: 100,
                  y: 20,
                  scale: 0.72,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1,

                  transition: {
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
            />


            {/* ANALYTICS */}

            <motion.img
              src="/images/hero/analytics.png"
              alt=""
              className="hero-layer hero-analytics"
              variants={{
                hidden: {
                  opacity: 0,
                  x: -70,
                  y: 70,
                  scale: 0.68,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1,

                  transition: {
                    duration: 0.85,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
            />


            {/* SECURITY */}

            <motion.img
              src="/images/hero/security.png"
              alt=""
              className="hero-layer hero-security"
              variants={{
                hidden: {
                  opacity: 0,
                  x: 50,
                  y: 80,
                  scale: 0.68,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1,

                  transition: {
                    duration: 0.85,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;