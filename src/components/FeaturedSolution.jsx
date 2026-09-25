import {
  ArrowUpRight,
  Network,
  Server,
  ShieldCheck,
  Headphones,
} from "lucide-react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "../styles/featuredSolution.css";

const capabilities = [
  {
    number: "01",
    icon: Network,
    title: "Networking Infrastructure",
    description:
      "Integrated networking infrastructure for voice, video, data and specialised systems, including structured cabling, fibre optic connectivity and wireless networks.",
  },
  {
    number: "02",
    icon: Server,
    title: "Data Centre Infrastructure",
    description:
      "End-to-end data centre infrastructure covering cooling, power, cabling, monitoring, safety, site preparation and integrated security.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Safety & Security Solutions",
    description:
      "Physical infrastructure security and life-safety solutions including CCTV, access control, gate barriers, video analytics and specialised surveillance systems.",
  },
];

const FeaturedSolution = () => {
  return (
    <section className="featured-solution">
      {/* BACKGROUND DECORATION */}
      <div className="featured-bg-lines" />
      <div className="featured-bg-dots" />

      <div className="container featured-container">
        {/* ================================================= */}
        {/* TOP SECTION                                       */}
        {/* ================================================= */}

        <div className="featured-top">
          {/* LEFT CONTENT */}

          <motion.div
            className="featured-intro"
            initial={{
              opacity: 0,
              y: 28,
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
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="featured-label">FEATURED SOLUTION</span>

            <div className="featured-green-line" />

            <h2>
              Infrastructure that
              <span>
                <b> powers</b> your business
              </span>
              <span>
                today and tomorrow
                <b>.</b>
              </span>
            </h2>

            <p>
              Confitech delivers integrated IT and communication
              infrastructure solutions designed to meet diverse business
              requirements, with advanced and cost-effective technologies
              engineered and supported locally.
            </p>
          </motion.div>

          {/* ================================================= */}
          {/* IMAGE COLLAGE                                     */}
          {/* ================================================= */}

          <motion.div
            className="featured-collage"
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="featured-collage-panel collage-one">
              <img
                src="/images/featured-data-center.png"
                alt="Data centre infrastructure"
              />
            </div>

            <div className="featured-collage-panel collage-two">
              <img
                src="/images/scalable-infrastructure.png"
                alt="Integrated technology infrastructure"
              />
            </div>

            <div className="featured-collage-panel collage-three">
              <img
                src="/images/reliable-connectivity.png"
                alt="Networking and structured connectivity"
              />
            </div>

            <div className="featured-collage-panel collage-four">
              <img
                src="/images/secure-environment.png"
                alt="Safety and security technology environment"
              />
            </div>
          </motion.div>
        </div>

        {/* ================================================= */}
        {/* CAPABILITY CARDS                                  */}
        {/* ================================================= */}

        <div className="featured-capabilities">
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className="featured-capability-card"
                key={item.number}
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
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="featured-card-top">
                  <div>
                    <span className="featured-card-number">{item.number}</span>
                    <div className="featured-card-number-line" />
                  </div>

                  <div className="featured-card-dots">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </div>

                <div className="featured-card-main">
                  <div className="featured-card-icon">
                    <Icon size={28} strokeWidth={1.7} />
                  </div>

                  <div className="featured-card-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* ================================================= */}
        {/* BOTTOM CTA                                        */}
        {/* ================================================= */}

        <motion.div
          className="featured-cta"
          initial={{
            opacity: 0,
            y: 22,
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
            duration: 0.65,
            delay: 0.1,
          }}
        >
          <div className="featured-cta-intro">
            <div className="featured-cta-icon">
              <Headphones size={27} strokeWidth={1.7} />
            </div>

            <div>
              <strong>Build a Stronger Foundation</strong>

              <p>
                Let&apos;s design infrastructure that moves your business
                forward with confidence.
              </p>
            </div>
          </div>

          <div className="featured-cta-divider" />

          <Link to="/services" className="featured-cta-button">
            Explore Our Solutions

            <span>
              <ArrowUpRight size={18} strokeWidth={2} />
            </span>
          </Link>

          <div className="featured-cta-divider" />

          <p className="featured-cta-note">
            Talk to our experts and find the right solution for your technology
            goals.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedSolution;