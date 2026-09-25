import {
  ArrowUpRight,
} from "lucide-react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "../styles/partners.css";


const partners = [
  {
    number: "01",
    name: "CommScope",
    category: "BUSINESS ASSOCIATE",
    description:
      "Technology brand listed among Confitech's Business Associates in the current company profile.",
    logo: "/images/partners/commscope.png",
  },

  {
    number: "02",
    name: "Rittal",
    category: "BUSINESS ASSOCIATE",
    description:
      "Technology brand listed among Confitech's Business Associates in the current company profile.",
    logo: "/images/partners/rittal.png",
  },

  {
    number: "03",
    name: "Matrix",
    category: "BUSINESS ASSOCIATE",
    description:
      "Technology brand listed among Confitech's Business Associates in the current company profile.",
    logo: "/images/partners/matrix-comsec.png",
  },

  {
    number: "04",
    name: "APC",
    category: "BUSINESS ASSOCIATE",
    description:
      "Technology brand listed among Confitech's Business Associates in the current company profile.",
    logo: "/images/partners/apc.png",
  },
];


const PartnersSection = () => {
  return (
    <section className="partners-section">

      {/* BACKGROUND DECORATION */}

      <div className="partners-bg-lines" />
      <div className="partners-bg-dots" />


      <div className="container partners-container">

        {/* ================================================= */}
        {/* HEADER                                            */}
        {/* ================================================= */}

        <div className="partners-heading">

          {/* LEFT */}

          <motion.div
            className="partners-heading-left"
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

            <span className="partners-label">
              BUSINESS ASSOCIATES
            </span>


            <div className="partners-heading-line" />


            <h2>
              Working with
              <span>
                <b>established technology</b>
              </span>
              <span>
                brands &amp; associates.
              </span>
            </h2>

          </motion.div>


          {/* RIGHT */}

          <motion.div
            className="partners-heading-right"
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

            <div className="partners-heading-divider" />


            <div>

              <p>
                A selected preview of Confitech&apos;s current Business
                Associates. Explore the full partners page to view all
                active technology brands listed in the current profile.
              </p>


              <Link
                to="/partners"
                className="partners-view-link"
              >
                View All Associates

                <span>
                  <ArrowUpRight
                    size={16}
                    strokeWidth={2}
                  />
                </span>
              </Link>

            </div>

          </motion.div>

        </div>


        {/* ================================================= */}
        {/* PARTNER PREVIEW GRID                              */}
        {/* ================================================= */}

        <motion.div
          className="partners-list"
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
            amount: 0.15,
          }}
          transition={{
            duration: 0.65,
          }}
        >

          {partners.map((partner, index) => (

            <motion.article
              className="partner-row"
              key={partner.name}
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
                delay: index * 0.08,
              }}
            >

              {/* NUMBER */}

              <div className="partner-number-wrap">

                <span className="partner-number">
                  {partner.number}
                </span>

                <div className="partner-number-line" />

              </div>


              {/* LOGO */}

              <div className="partner-logo">

                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  loading="lazy"
                />

              </div>


              {/* CONTENT */}

              <div className="partner-content">

                <span className="partner-category">
                  {partner.category}
                </span>


                <h3>
                  {partner.name}
                </h3>


                <p>
                  {partner.description}
                </p>

              </div>

            </motion.article>

          ))}

        </motion.div>

      </div>

    </section>
  );
};


export default PartnersSection;