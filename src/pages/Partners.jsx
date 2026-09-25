import {
  ArrowUpRight,
  Network,
  Server,
  ShieldCheck,
  DoorOpen,
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
    name: "CommScope",
    area: "BUSINESS ASSOCIATE",
    logo: "/images/partners/commscope.png",
    description:
      "Technology brand listed among Confitech's Business Associates in the current company profile.",
  },

  {
    number: "02",
    name: "Rittal",
    area: "BUSINESS ASSOCIATE",
    logo: "/images/partners/rittal.png",
    description:
      "Technology brand listed among Confitech's Business Associates in the current company profile.",
  },

  {
    number: "03",
    name: "Matrix",
    area: "BUSINESS ASSOCIATE",
    logo: "/images/partners/matrix-comsec.png",
    description:
      "Technology brand listed among Confitech's Business Associates in the current company profile.",
  },

  {
    number: "04",
    name: "A&T",
    area: "BUSINESS ASSOCIATE",
    logo: "/images/partners/a-t.png",
    description:
      "Technology brand listed among Confitech's Business Associates in the current company profile.",
  },

  {
    number: "05",
    name: "BFT",
    area: "BUSINESS ASSOCIATE",
    logo: "/images/partners/bft.png",
    description:
      "Technology brand listed among Confitech's Business Associates in the current company profile.",
  },

  {
    number: "06",
    name: "Optima",
    area: "BUSINESS ASSOCIATE",
    logo: "/images/partners/optima.png",
    description:
      "Technology brand listed among Confitech's Business Associates in the current company profile.",
  },

  {
    number: "07",
    name: "UNV",
    area: "BUSINESS ASSOCIATE",
    logo: "/images/partners/unv.png",
    description:
      "Technology brand listed among Confitech's Business Associates in the current company profile.",
  },

  {
    number: "08",
    name: "TP-Link",
    area: "BUSINESS ASSOCIATE",
    logo: "/images/partners/tp-link.png",
    description:
      "Technology brand listed among Confitech's Business Associates in the current company profile.",
  },

  {
    number: "09",
    name: "Ultima",
    area: "BUSINESS ASSOCIATE",
    logo: "/images/partners/ultima.png",
    description:
      "Technology brand listed among Confitech's Business Associates in the current company profile.",
  },

  {
    number: "10",
    name: "PLANET",
    area: "BUSINESS ASSOCIATE",
    logo: "/images/partners/planet.png",
    description:
      "Technology brand listed among Confitech's Business Associates in the current company profile.",
  },

  {
    number: "11",
    name: "APC",
    area: "BUSINESS ASSOCIATE",
    logo: "/images/partners/apc.png",
    description:
      "Technology brand listed among Confitech's Business Associates in the current company profile.",
  },
];


const capabilities = [
  {
    icon: Network,
    title: "Networking Infrastructure",
  },

  {
    icon: Server,
    title: "Data Centre Infrastructure",
  },

  {
    icon: ShieldCheck,
    title: "Safety & Security",
  },

  {
    icon: DoorOpen,
    title: "Access & Automation",
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
                BUSINESS ASSOCIATES
              </span>


              <div className="partners-page-label-line" />


              <h1>
                Working with
                <span>
                  established technology
                </span>

                <span className="partners-page-green">
                  brands &amp; associates
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
                Confitech&apos;s company profile lists established
                Business Associates supporting its technology,
                infrastructure, security and automation ecosystem.
              </p>


              <div className="partners-page-header-divider" />


              <div className="partners-page-partner-count">

                <strong>
                  11
                </strong>


                <div>

                  <span>
                    BUSINESS ASSOCIATES
                  </span>

                  <p>
                    Listed in the current company profile.
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

              {partners.map((partner, index) => {

                const isLastOdd =
                  partners.length % 2 !== 0 &&
                  index === partners.length - 1;


                return (

                  <motion.article
                    className={`partners-page-card ${isLastOdd
                        ? "is-last-odd"
                        : ""
                      }`}
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
                      delay: index * 0.05,
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

                  </motion.article>

                );
              })}

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
                BUSINESS ASSOCIATES &amp; CREDENTIALS
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
                Business associate relationships and partnership
                credentials supporting Confitech&apos;s technology capabilities.
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


                  <div>

                    <span>
                      Validity
                    </span>

                    <strong>
                      01 Jul - 31 Dec 2026
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