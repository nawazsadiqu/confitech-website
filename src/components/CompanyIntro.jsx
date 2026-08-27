import { ArrowRight, ChartNoAxesCombined } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "../styles/companyIntro.css";

const CompanyIntro = () => {
  const reveal = {
    hidden: {
      opacity: 0,
      y: 28,
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

  const capabilities = [
    {
      number: "01",
      title: "Structured Cabling",
    },
    {
      number: "02",
      title: "Data Centres",
    },
    {
      number: "03",
      title: "CCTV & Security",
    },
    {
      number: "04",
      title: "IT Consulting",
    },
    {
      number: "05",
      title: "Cloud Support",
    },
  ];

  return (
    <section className="company-intro">

      {/* LARGE BACKGROUND WATERMARK */}
      <motion.div
        className="company-intro-watermark"
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 1.1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
      CONFITECH
    </motion.div>


      <div className="container company-intro-container">

        {/* ================================================= */}
        {/* LEFT SIDE                                         */}
        {/* ================================================= */}

        <motion.div
          className="company-intro-left"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
        >

          <span className="company-intro-label">
            ABOUT CONFITECH
          </span>


          <h2>
            Technology that
            <span>
              keeps business moving
              <b>.</b>
            </span>
          </h2>


          <div className="company-intro-green-line" />


          {/* STAT CARD */}

          <motion.div
            className="company-intro-stat-card"
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
              duration: 0.7,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <div className="company-intro-stat-icon">
              <ChartNoAxesCombined
                size={30}
                strokeWidth={1.8}
              />
            </div>


            <div className="company-intro-stat-number">
              05
            </div>


            <div className="company-intro-stat-divider" />


            <div className="company-intro-stat-content">

              <strong>
                Core service areas
              </strong>

              <p>
                One dependable technology partner.
              </p>

            </div>

          </motion.div>

        </motion.div>


        {/* ================================================= */}
        {/* RIGHT SIDE                                        */}
        {/* ================================================= */}

        <motion.div
          className="company-intro-right"
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
            amount: 0.25,
          }}
          transition={{
            duration: 0.75,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <p className="company-intro-lead">
            Confitech helps organisations build and operate the reliable
            technology foundations they depend on every day. From secure
            infrastructure and high-performance networks to modern data
            centres and resilient cloud platforms, we deliver solutions
            designed for today—and ready for tomorrow.
          </p>


          <p className="company-intro-description">
            Our team combines technical expertise with a consultative
            approach, ensuring every solution is aligned with business
            requirements, scalable for growth and supported with dependable
            service.
          </p>


          <Link
            to="/about"
            className="company-intro-link"
          >
            Discover Confitech

            <ArrowRight
              size={17}
              strokeWidth={2}
            />
          </Link>

        </motion.div>

      </div>


      {/* ================================================= */}
      {/* CAPABILITY STRIP                                  */}
      {/* ================================================= */}

      <div className="container">

        <motion.div
          className="company-capabilities"
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          {capabilities.map((item, index) => (
            <motion.div
              key={item.number}
              className="company-capability"
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0.08 * index,
              }}
            >

              <span className="company-capability-number">
                {item.number}
              </span>

              <strong>
                {item.title}
              </strong>

              <div className="company-capability-line" />

            </motion.div>
          ))}

        </motion.div>

      </div>

    </section>
  );
};

export default CompanyIntro;