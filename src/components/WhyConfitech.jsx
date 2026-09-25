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
    title: "Integrated Solutions",
    description:
      "Integrated IT and communication solutions covering networking, security, data centre infrastructure, audio visual systems and facilities automation.",
  },

  {
    number: "02",
    icon: Settings,
    title: "Engineered & Supported Locally",
    description:
      "Advanced and cost-effective technology solutions engineered and supported locally to meet practical business and infrastructure requirements.",
  },

  {
    number: "03",
    icon: Handshake,
    title: "Client Focus & Accountability",
    description:
      "A customer-focused approach built around commitment, accountability, transparency and delivering requirements with quality, on time and within budget.",
  },

  {
    number: "04",
    icon: ShieldCheck,
    title: "Established Technology Associates",
    description:
      "Confitech works with established technology brands and business associates across networking, data centre, security and automation solutions.",
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
              Confitech combines technology expertise, integrated
              solutions and local support to deliver advanced,
              cost-effective infrastructure for diverse business
              and industry requirements.
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