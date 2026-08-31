  import {
    Network,
    ShieldCheck,
    Settings,
    Handshake,
    Server,
    Cloud,
    UsersRound,
    Cable,
    ArrowUpRight,
  } from "lucide-react";

  import { motion } from "framer-motion";

  import Navbar from "../components/Navbar";
  import Footer from "../components/Footer";
  import FinalCTA from "../components/FinalCTA";

  import "../styles/about.css";


  const approachItems = [
    {
      icon: Settings,
      title: "Technology Expertise",
      description:
        "Deep knowledge across infrastructure, networking, security, cloud and enterprise technologies.",
    },

    {
      icon: Network,
      title: "Practical Solutions",
      description:
        "Solutions designed around real business needs with a focus on usability, reliability and long-term value.",
    },

    {
      icon: Server,
      title: "Reliable Infrastructure",
      description:
        "Quality infrastructure and proven technology practices designed for performance, uptime and security.",
    },

    {
      icon: Handshake,
      title: "Customer Focus",
      description:
        "A collaborative approach with responsive support and long-term technology partnership.",
    },
  ];


  const capabilities = [
    {
      icon: Cable,
      title: "Structured Cabling",
    },

    {
      icon: Server,
      title: "Data Centres",
    },

    {
      icon: ShieldCheck,
      title: "Security",
    },

    {
      icon: UsersRound,
      title: "Consulting",
    },

    {
      icon: Cloud,
      title: "Cloud Support",
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
                  Confitech delivers dependable technology infrastructure
                  and enterprise solutions for businesses across networking,
                  data centres, security, consulting and cloud support.
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
                  Confitech is a technology solutions company delivering
                  infrastructure, networking, security and enterprise
                  solutions that help organisations operate with confidence.
                </p>


                <p>
                  We combine technical expertise with a practical
                  understanding of business requirements to design and
                  deliver solutions focused on reliability, security,
                  performance and long-term scalability.
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
                        Core Service Areas
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
                      One dependable
                      <span>
                        technology partner.
                      </span>
                    </strong>

                  </div>

                </div>

              </motion.div>

            </div>

          </section>


          {/* ================================================= */}
          {/* OUR APPROACH                                      */}
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
                  OUR APPROACH
                </span>


                <h2>
                  Built on expertise.
                  <span>
                    Focused on reliability
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