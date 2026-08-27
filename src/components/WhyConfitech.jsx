import {
  Network,
  ShieldCheck,
  Handshake,
  Settings,
} from "lucide-react";

import { motion } from "framer-motion";

import "../styles/whyConfitech.css";


const reasons = [
  {
    number: "01",
    icon: Network,
    title: "Technical Expertise",
    description:
      "Practical expertise across networking, infrastructure, security and enterprise technology environments.",
  },

  {
    number: "02",
    icon: Settings,
    title: "End-to-End Solutions",
    description:
      "From planning and implementation to support, Confitech helps manage the complete technology lifecycle.",
  },

  {
    number: "03",
    icon: Handshake,
    title: "Trusted Partnerships",
    description:
      "Technology solutions supported by established products, brands and solution partners.",
  },

  {
    number: "04",
    icon: ShieldCheck,
    title: "Reliable Support",
    description:
      "Solutions designed around reliability, business continuity and long-term operational requirements.",
  },
];


const WhyConfitech = () => {
  return (
    <section className="why-section">

      {/* BACKGROUND DECORATION */}
      <div className="why-bg-lines" />
      <div className="why-bg-dots" />


      <div className="container why-container">

        {/* ================================================= */}
        {/* HEADER                                            */}
        {/* ================================================= */}

        <div className="why-heading">

          {/* LEFT */}

          <motion.div
            className="why-heading-left"
            initial={{
              opacity: 0,
              y: 25,
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
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <span className="why-label">
              WHY CONFITECH
            </span>


            <div className="why-heading-line" />


            <h2>
              Technology expertise
              <span>
                you can <b>rely on.</b>
              </span>
            </h2>

          </motion.div>


          {/* RIGHT */}

          <motion.div
            className="why-heading-right"
            initial={{
              opacity: 0,
              y: 25,
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
              duration: 0.65,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <div className="why-heading-divider" />

            <p>
              We focus on practical, dependable technology
              solutions that help businesses create secure,
              connected and efficient infrastructure.
            </p>

          </motion.div>

        </div>


        {/* ================================================= */}
        {/* TIMELINE                                          */}
        {/* ================================================= */}

        <div className="why-timeline">

          {/* MAIN DESKTOP LINE */}

          <motion.div
            className="why-timeline-line"
            initial={{
              scaleX: 0,
            }}
            whileInView={{
              scaleX: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          />


          <div className="why-timeline-grid">

            {reasons.map((reason, index) => {

              const Icon = reason.icon;

              return (

                <motion.article
                  className="why-timeline-item"
                  key={reason.number}
                  initial={{
                    opacity: 0,
                    y: 25,
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
                    duration: 0.55,
                    delay: 0.1 + index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >

                  {/* DOT */}

                  <div className="why-timeline-dot">
                    <span />
                  </div>


                  {/* NUMBER */}

                  <div className="why-number">
                    {reason.number}
                  </div>


                  <div className="why-number-line" />


                  {/* ICON */}

                  <div className="why-icon">
                    <Icon
                      size={31}
                      strokeWidth={1.7}
                    />
                  </div>


                  {/* CONTENT */}

                  <div className="why-item-content">

                    <h3>
                      {reason.title}
                    </h3>


                    <div className="why-title-line" />


                    <p>
                      {reason.description}
                    </p>

                  </div>

                </motion.article>

              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
};


export default WhyConfitech;