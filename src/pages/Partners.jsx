import {
  ArrowRight,
  ArrowUpRight,
  Cloud,
  Cable,
  ShieldCheck,
  MonitorCog,
  MessageCircle,
} from "lucide-react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/partnersPage.css";


const partners = [
  {
    number: "01",
    name: "NTI",
    area: "ENVIRONMENT MONITORING",
    logo: "/images/partners/nti.png",
    description:
      "Environment monitoring and data acquisition solutions designed for critical infrastructure, facilities and technology environments.",
  },

  {
    number: "02",
    name: "Brand-Rex",
    area: "STRUCTURED CABLING",
    logo: "/images/partners/brand-rex.png",
    description:
      "High-performance structured cabling and connectivity solutions designed for reliable voice, data and network infrastructure.",
  },

  {
    number: "03",
    name: "Matrix Comsec",
    area: "SECURITY & TELECOM",
    logo: "/images/partners/matrix-comsec.png",
    description:
      "Integrated security, telecom and access-control solutions for modern enterprise and business environments.",
  },

  {
    number: "04",
    name: "Offamata",
    area: "ERP ON CLOUD",
    logo: "/images/partners/offamata.png",
    description:
      "Cloud-based ERP technology designed to help organisations streamline operations and improve business efficiency.",
  },
];


const capabilities = [
  {
    icon: MonitorCog,
    title: "Environment Monitoring",
  },

  {
    icon: Cable,
    title: "Structured Cabling",
  },

  {
    icon: ShieldCheck,
    title: "Security & Telecom",
  },

  {
    icon: Cloud,
    title: "ERP on Cloud",
  },
];


const Partners = () => {
  return (
    <>
      <Navbar />

      <main>

        {/* ================================================= */}
        {/* PARTNERS HEADER                                   */}
        {/* ================================================= */}

        <section
          className="partners-page-header"
          id="top"
        >

          <div className="container partners-page-header-container">

            {/* LEFT */}

            <motion.div
              className="partners-page-header-left"
              initial={{
                opacity: 0,
                y: 26,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              <span className="partners-page-label">
                TECHNOLOGY PARTNERS
              </span>


              <div className="partners-page-label-line" />


              <h1>
                Working with
                <span>
                  technology that
                </span>

                <span className="partners-page-green">
                  businesses can rely on
                  <b>.</b>
                </span>
              </h1>


              <div className="partners-page-heading-line" />

            </motion.div>


            {/* RIGHT */}

            <motion.div
              className="partners-page-header-right"
              initial={{
                opacity: 0,
                y: 26,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              <p>
                Confitech works with established technology brands
                and solution providers across infrastructure,
                monitoring, networking, security and enterprise systems.
              </p>


              <div className="partners-page-header-divider" />


              <div className="partners-page-partner-count">

                <strong>
                  04
                </strong>


                <div>

                  <span>
                    TECHNOLOGY PARTNERS
                  </span>

                  <p>
                    One integrated technology ecosystem.
                  </p>

                </div>

              </div>

            </motion.div>

          </div>

        </section>



        {/* ================================================= */}
        {/* CAPABILITY STRIP                                  */}
        {/* ================================================= */}

        <section className="partners-capabilities">

          <div className="container">

            <div className="partners-capabilities-grid">

              {capabilities.map((item, index) => {

                const Icon = item.icon;

                return (

                  <motion.div
                    className="partners-capability-item"
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
                      delay: index * 0.07,
                    }}
                  >

                    <div className="partners-capability-icon">

                      <Icon
                        size={24}
                        strokeWidth={1.7}
                      />

                    </div>


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
        {/* PARTNER LIST                                      */}
        {/* ================================================= */}

        <section className="partners-page-list-section">

          <div className="container">

            <div className="partners-page-list">

              {partners.map((partner, index) => (

                <motion.article
                  className="partners-page-row"
                  key={partner.name}
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
                    amount: 0.18,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >

                  {/* NUMBER */}

                  <div className="partners-page-number-wrap">

                    <span className="partners-page-number">
                      {partner.number}
                    </span>


                    <div className="partners-page-number-line" />

                  </div>


                  {/* DIVIDER */}

                  <div className="partners-page-row-divider" />


                  {/* LOGO */}

                  <div className="partners-page-logo">

                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      loading="lazy"
                    />

                  </div>


                  {/* CONTENT */}

                  <div className="partners-page-content">

                    <span className="partners-page-category">
                      {partner.area}
                    </span>


                    <h2>
                      {partner.name}
                    </h2>


                    <p>
                      {partner.description}
                    </p>

                  </div>


                  {/* ARROW */}

                  <Link
                    to="/products"
                    className="partners-page-arrow"
                    aria-label={`Explore ${partner.name}`}
                  >

                    <ArrowRight
                      size={20}
                      strokeWidth={1.8}
                    />

                  </Link>

                </motion.article>

              ))}

            </div>

                    </div>

        </section>



        {/* ================================================= */}
        {/* PARTNERSHIP CREDENTIAL                            */}
        {/* ================================================= */}

        <section className="partners-credentials-section">

          <div className="container">

            {/* HEADING */}

            <motion.div
              className="partners-credentials-heading"
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

              <span className="partners-page-label">
                PARTNERSHIPS &amp; CREDENTIALS
              </span>


              <h2>
                Recognised by
                <span>
                  trusted technology brands
                  <b>.</b>
                </span>
              </h2>


              <div className="partners-credential-heading-line" />


              <p>
                Partnership credentials supporting Confitech&apos;s
                technology and infrastructure capabilities.
              </p>

            </motion.div>



            {/* CERTIFICATE */}

            <motion.div
              className="partners-credential-card"
              initial={{
                opacity: 0,
                y: 24,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.65,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              {/* LEFT - ACTUAL CERTIFICATE */}

              <a
                href="/images/certifications/ruijie-business-partner.jpeg"
                target="_blank"
                rel="noreferrer"
                className="partners-credential-preview"
              >

                <img
                  src="/images/certifications/ruijie-business-partner.jpeg"
                  alt="Ruijie Networks Business Partner Certificate"
                />

              </a>



              {/* RIGHT - DETAILS */}

              <div className="partners-credential-content">

                <span className="partners-credential-type">
                  BUSINESS PARTNER CERTIFICATE
                </span>


                <h3>
                  Ruijie Networks
                </h3>


                <p>
                  Confident Technical Solutions and Trading Services LLC
                  is recognised as a Ruijie Networks Business Partner
                  in the Sultanate of Oman.
                </p>


                <div className="partners-credential-meta">

                  <div>

                    <span>
                      Partnership
                    </span>

                    <strong>
                      Business Partner
                    </strong>

                  </div>


                  <div>

                    <span>
                      Region
                    </span>

                    <strong>
                      Oman
                    </strong>

                  </div>

                </div>


                <a
                  href="/images/certifications/ruijie-business-partner.jpeg"
                  target="_blank"
                  rel="noreferrer"
                  className="partners-credential-button"
                >

                  View Certificate

                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.8}
                  />

                </a>

              </div>

            </motion.div>

          </div>

        </section>



        {/* ================================================= */}
        {/* COMPACT CTA                                       */}
        {/* ================================================= */}

        <section className="partners-page-cta">

          <div className="partners-page-cta-wave" />


          <div className="container partners-page-cta-inner">

            {/* LEFT ICON */}

            <div className="partners-page-cta-icon">

              <MessageCircle
                size={28}
                strokeWidth={1.8}
              />

            </div>


            {/* TEXT */}

            <div className="partners-page-cta-content">

              <h2>
                Have a project in mind?
              </h2>


              <p>
                Talk to Confitech about your infrastructure,
                networking, data centre or security requirements.
              </p>

            </div>


            {/* CTA BUTTON */}

            <Link
              to="/contact"
              className="partners-page-cta-button"
            >
              Get In Touch

              <ArrowUpRight
                size={16}
                strokeWidth={1.8}
              />
            </Link>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
};


export default Partners;