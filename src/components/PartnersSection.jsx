import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "../styles/partners.css";


const partners = [
  {
    number: "01",
    name: "NTI",
    category: "Environment Monitoring",
    description:
      "Environmental monitoring technologies for critical infrastructure and data centre environments.",
    logo: "/images/partners/nti.png",
  },

  {
    number: "02",
    name: "Brand-Rex",
    category: "Structured Cabling",
    description:
      "Professional structured cabling and connectivity solutions for reliable network infrastructure.",
    logo: "/images/partners/brand-rex.png",
  },

  {
    number: "03",
    name: "Matrix Comsec",
    category: "Security & Telecom",
    description:
      "Integrated security, access control and telecom solutions for modern organisations.",
    logo: "/images/partners/matrix-comsec.png",
  },

  {
    number: "04",
    name: "Offamata",
    category: "ERP on Cloud",
    description:
      "Cloud-based ERP technology designed to simplify and support business operations.",
    logo: "/images/partners/offamata.png",
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
              TECHNOLOGY &amp; SOLUTION BRANDS
            </span>


            <div className="partners-heading-line" />


            <h2>
              Solutions backed by
              <span>
                <b>trusted technologies.</b>
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
                Confitech works with established technology
                products and solution providers across
                infrastructure, monitoring, networking and security.
              </p>


              <Link
                to="/partners"
                className="partners-view-link"
              >
                Explore Technologies

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
        {/* PARTNER LIST                                      */}
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

            <motion.div
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


              {/* DIVIDER */}

              <div className="partner-row-divider" />


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


              {/* ACTION */}

              <Link
                to="/partners"
                className="partner-arrow"
                aria-label={`Explore ${partner.name}`}
              >
                <ArrowUpRight
                  size={20}
                  strokeWidth={1.8}
                />
              </Link>

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>
  );
};


export default PartnersSection;