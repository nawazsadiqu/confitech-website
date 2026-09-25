import {
  Network,
  ShieldCheck,
  Settings,
  Handshake,
  Server,
  UsersRound,
  ArrowUpRight,
} from "lucide-react";

import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FinalCTA from "../components/FinalCTA";

import "../styles/about.css";


const approachItems = [
  {
    icon: Handshake,
    title: "Client Focus",
    description:
      "Our clients are our partners, and their interests and needs are our utmost priority. We are intensely focused on providing the best solutions for their needs.",
  },

  {
    icon: ShieldCheck,
    title: "Commitment & Accountability",
    description:
      "We are reliable and consistent with our clients and partners, and committed to delivering their requirements with passion and diligence, excellent quality, on time and budget.",
  },

  {
    icon: ShieldCheck,
    title: "Integrity & Transparency",
    description:
      "We strongly believe that integrity and transparency are key. We communicate honestly and humbly and always seek to do what is fair.",
  },

  {
    icon: UsersRound,
    title: "People & Teamwork",
    description:
      "We believe our team and stakeholders are the foundation of our business. We encourage our people to work positively, learn, grow and deliver on commitments.",
  },

  {
    icon: Settings,
    title: "Excellence",
    description:
      "We discover and define, measure and analyse, create and optimize, and continuously monitor and control our work to deliver better outcomes.",
  },

  {
    icon: Network,
    title: "Innovation & Change",
    description:
      "We are an experienced and committed team that stimulates innovation in the way we do business and embraces constructive change for our clients and stakeholders.",
  },
];


const capabilities = [
  {
    icon: Network,
    title: "Networking Infrastructure",
  },

  {
    icon: ShieldCheck,
    title: "Safety & Security",
  },

  {
    icon: Server,
    title: "Data Centre Infrastructure",
  },

  {
    icon: UsersRound,
    title: "Audio Visual & CWE",
  },

  {
    icon: Settings,
    title: "Building Management & Facilities Automation",
  },
];


const About = () => {
  return (
    <>
      <Navbar />

      <main>

        {/* ================================================= */}
        {/* ABOUT HERO                                        */}
        {/* ================================================= */}

        <section className="about-hero" id="top">

          <div className="about-hero-glow" />
          <div className="about-hero-pattern" />


          <div className="container about-hero-container">

            {/* LEFT */}

            <motion.div
              className="about-hero-content"
              initial={{
                opacity: 0,
                y: 28,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              <span className="about-label">
                ABOUT CONFITECH
              </span>


              <h1>
                Technology built
                <span>around</span>

                <span className="about-hero-highlight">
                  business needs
                  <b>.</b>
                </span>
              </h1>


              <p>
                Confitech is an IT and Communications Solutions Provider
                and Systems Integrator established in 2013, delivering
                integrated solutions across networking infrastructure,
                safety and security, data centres, audio visual systems
                and building automation.
              </p>

            </motion.div>


            {/* RIGHT IMAGE */}

            <motion.div
              className="about-hero-visual"
              initial={{
                opacity: 0,
                x: 35,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.95,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              <div className="about-hero-visual-glow" />

              <motion.img
                src="/images/about/about-hero-infrastructure.png"
                alt="Confitech technology infrastructure"
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

            </motion.div>

          </div>

        </section>


        {/* ================================================= */}
        {/* WHO WE ARE                                        */}
        {/* ================================================= */}

        <section className="about-story">

          <div className="about-story-glow" />


          <div className="container about-story-container">

            {/* LEFT */}

            <motion.div
              className="about-story-heading"
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

              <span className="about-section-label">
                WHO WE ARE
              </span>


              <h2>
                Connecting businesses
                <span>
                  with dependable
                </span>
                <span>
                  technology
                  <b>.</b>
                </span>
              </h2>


              <div className="about-green-line" />

            </motion.div>


            {/* RIGHT */}

            <motion.div
              className="about-story-content"
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
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              <p className="about-story-lead">
                Confitech (Confident Technical Solutions and Trading Services LLC.)
                is a technology-based IT and Communications Solutions Provider
                and Systems Integrator established in 2013.
              </p>


              <p>
                We provide integrated IT and communication solutions to industries
                including Energy, Utilities, Trading, Logistics, Telecommunications,
                Hospitality, Government, Banking and Finance, Industrial and Health Care.
              </p>


              <p>
                Confitech is committed to its customers and aims to provide advanced
                and cost-effective technology solutions that are engineered and
                supported locally.
              </p>


              {/* PROOF STRIP */}

              <div className="about-proof">

                <div className="about-proof-block">

                  <div className="about-proof-icon">
                    <UsersRound
                      size={25}
                      strokeWidth={1.7}
                    />
                  </div>


                  <div className="about-proof-number">
                    05
                  </div>


                  <div className="about-proof-text">
                    <span>
                      Core Solution Areas
                    </span>
                  </div>

                </div>


                <div className="about-proof-divider" />


                <div className="about-proof-block about-proof-partner">

                  <div className="about-proof-icon">
                    <Handshake
                      size={25}
                      strokeWidth={1.7}
                    />
                  </div>


                  <strong>
                    Established
                    <span>
                      2013
                    </span>
                  </strong>

                </div>

              </div>

            </motion.div>

          </div>

        </section>


        {/* ================================================= */}
        {/* OUR VALUES                                        */}
        {/* ================================================= */}

        <section className="about-approach">

          <div className="container about-approach-container">

            {/* LEFT */}

            <motion.div
              className="about-approach-heading"
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

              <span className="about-section-label">
                OUR VALUES
              </span>


              <h2>
                Values that guide
                <span>
                  how we work
                  <b>.</b>
                </span>
              </h2>


              <div className="about-green-line" />

            </motion.div>


            {/* RIGHT OPEN LIST */}

            <div className="about-approach-list">

              {approachItems.map((item, index) => {

                const Icon = item.icon;

                return (

                  <motion.div
                    className="about-approach-row"
                    key={item.title}
                    initial={{
                      opacity: 0,
                      y: 18,
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
                      duration: 0.5,
                      delay: index * 0.07,
                    }}
                  >

                    <div className="about-approach-icon">
                      <Icon
                        size={23}
                        strokeWidth={1.7}
                      />
                    </div>


                    <h3>
                      {item.title}
                    </h3>


                    <div className="about-approach-divider" />


                    <p>
                      {item.description}
                    </p>

                  </motion.div>

                );
              })}

            </div>

          </div>

        </section>


        {/* ================================================= */}
        {/* SERVICE CAPABILITY STRIP                          */}
        {/* ================================================= */}

        <section className="about-capabilities">

          <div className="container">

            <div className="about-capabilities-grid">

              {capabilities.map((item, index) => {

                const Icon = item.icon;

                return (

                  <motion.div
                    className="about-capability"
                    key={item.title}
                    initial={{
                      opacity: 0,
                      y: 12,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.06,
                    }}
                  >

                    <Icon
                      size={23}
                      strokeWidth={1.7}
                    />

                    <span>
                      {item.title}
                    </span>

                  </motion.div>

                );
              })}

            </div>

          </div>

        </section>



        {/* ================================================= */}
        {/* TECHNICAL CERTIFICATION                           */}
        {/* ================================================= */}

        <section className="about-certifications">

          <div className="container">

            <motion.div
              className="about-certifications-heading"
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
                amount: 0.25,
              }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              <span className="about-section-label">
                TECHNICAL CERTIFICATIONS
              </span>


              <h2>
                Expertise supported by
                <span>
                  recognised credentials
                  <b>.</b>
                </span>
              </h2>


              <div className="about-green-line" />

            </motion.div>



            <motion.div
              className="about-certificate-row"
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
                duration: 0.6,
                delay: 0.08,
              }}
            >

              {/* NUMBER */}

              <span className="about-certificate-number">
                01
              </span>


              {/* CERTIFICATE */}

              <div className="about-certificate-content">

                <span>
                  FORTINET TRAINING INSTITUTE
                </span>


                <h3>
                  Fortinet Certified Fundamentals
                  in Cybersecurity
                </h3>

              </div>


              {/* LINK */}

              <a
                href="/certificates/fortinet-cybersecurity-certificate.pdf"
                target="_blank"
                rel="noreferrer"
                className="about-certificate-link"
              >
                View Certificate

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.8}
                />
              </a>

            </motion.div>

          </div>

        </section>



        {/* EXISTING FINAL CTA */}

        <FinalCTA />

      </main>

      <Footer />
    </>
  );
};


export default About;