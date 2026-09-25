import {
  ArrowRight,
  CheckCircle2,
  Award,
  BarChart3,
  Headphones,
  Layers3,
  MessageCircle,
  MonitorCog,
  ShieldCheck,
  Cable,
} from "lucide-react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/productsPage.css";


/* ===================================================== */
/* PRODUCTS                                              */
/* ===================================================== */

const products = [
  {
    number: "01",

    brand: "NTI",

    logo: "/images/products/logos/nti.png",

    title: "Environment Monitoring",

    description:
      "Environment monitoring solutions supporting critical infrastructure, data centre environments and integrated infrastructure management.",

    image:
      "/images/products/nti-environment-monitoring.png",

    imageAlt:
      "NTI environment monitoring equipment",

    features: [
      "Environment Monitoring Systems",
      "Data Centre Infrastructure Monitoring",
      "Critical Environment Monitoring",
      "Centralised Monitoring & Alerting",
      "Infrastructure Management Support",
    ],
  },


  {
    number: "02",

    brand: "Matrix Comsec",

    logo: "/images/products/logos/matrix-comsec.png",

    title: "Time-Attendance & Access Control Solutions",

    description:
      "Centralised time-attendance and enterprise access-control solutions designed for real-time monitoring, workforce management and secure multi-location access.",

    image:
      "/images/products/matrix-security-telecom.png",

    imageAlt:
      "Matrix Comsec time-attendance and access control products",

    features: [
      "Centralised Multi-Location Time-Attendance",
      "Real-Time Monitoring & Live Attendance Tracking",
      "Multi-Shift & Overnight Shift Management",
      "Biometric, User, Zone & Time-Based Access Control",
      "Centralised Device Monitoring & Fire Alarm Integration",
    ],
  },


  {
    number: "03",

    brand: "Brand-Rex",

    logo: "/images/products/logos/brand-rex.png",

    title: "Structured Cabling Solutions",

    description:
      "Structured cabling and connectivity solutions supporting dependable voice, data and network infrastructure across modern business environments.",

    image:
      "/images/products/brand-rex-cabling.png",

    imageAlt:
      "Brand-Rex structured cabling products",

    features: [
      "Cat 5e, Cat 6 & Cat 6A Cabling Systems",
      "Data Network & Ethernet Cabling",
      "Fibre Optic Cabling",
      "Patch Panel Termination",
      "Network Infrastructure Connectivity",
    ],
  },
];


/* ===================================================== */
/* PRODUCT AREAS                                         */
/* ===================================================== */

const productAreas = [
  {
    icon: MonitorCog,
    title: "Environment Monitoring",
  },

  {
    icon: ShieldCheck,
    title: "Time-Attendance & Access Control",
  },

  {
    icon: Cable,
    title: "Structured Cabling",
  },
];


/* ===================================================== */
/* BENEFITS                                              */
/* ===================================================== */

const benefits = [
  {
    icon: Award,

    title: "Integrated Solutions",

    text:
      "Integrated IT and communication solutions designed around diverse business requirements.",
  },

  {
    icon: BarChart3,

    title: "Advanced & Cost-Effective",

    text:
      "Technology solutions focused on advanced capability and cost-effective implementation.",
  },

  {
    icon: Headphones,

    title: "Locally Supported",

    text:
      "Solutions engineered and supported locally for dependable service and continuity.",
  },

  {
    icon: Layers3,

    title: "Committed Delivery",

    text:
      "A focus on quality, accountability and delivering requirements with diligence.",
  },
];


const Products = () => {
  return (
    <>
      <Navbar />


      <main>

        {/* ================================================= */}
        {/* NEW EDITORIAL PRODUCTS HEADER                     */}
        {/* ================================================= */}

        <section
          className="products-editorial-hero"
          id="top"
        >

          <div className="container products-editorial-container">

            <motion.div
              className="products-editorial-content"
              initial={{
                opacity: 0,
                y: 25,
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

              {/* LABEL */}

              <span className="products-editorial-label">
                PRODUCTS &amp; SOLUTIONS
              </span>


              {/* HEADING */}

              <h1>
                Technology built to solve

                <span>
                  real business challenges
                  <b>.</b>
                </span>
              </h1>


              {/* ACCENT LINE */}

              <div className="products-editorial-line" />


              {/* DESCRIPTION */}

              <p className="products-editorial-description">
                Explore technology solutions across environment monitoring,
                time-attendance, access control and structured network
                infrastructure, supporting reliable and integrated
                business environments.
              </p>


              {/* SOLUTION COUNT */}

              <motion.div
                className="products-editorial-count"
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.25,
                }}
              >

                <strong>
                  03
                </strong>


                <div>

                  <span>
                    SOLUTION AREAS
                  </span>


                  <p>
                    Technologies selected around real infrastructure needs.
                  </p>

                </div>

              </motion.div>

            </motion.div>

          </div>



          {/* ================================================= */}
          {/* PRODUCT AREA STRIP                                */}
          {/* ================================================= */}

          <motion.div
            className="products-editorial-areas"
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.65,
              delay: 0.32,
            }}
          >

            <div className="container products-editorial-areas-grid">

              {productAreas.map((area, index) => {

                const Icon = area.icon;

                return (

                  <motion.div
                    className="products-editorial-area"
                    key={area.title}
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.45,
                      delay:
                        0.38 +
                        index * 0.07,
                    }}
                  >

                    <div className="products-editorial-area-icon">

                      <Icon
                        size={22}
                        strokeWidth={1.7}
                      />

                    </div>


                    <span>
                      {area.title}
                    </span>

                  </motion.div>

                );
              })}

            </div>

          </motion.div>

        </section>



        {/* ================================================= */}
        {/* PRODUCTS INTRO                                    */}
        {/* ================================================= */}

        <section className="products-solutions-section">

          <div className="products-solutions-bg" />


          <div className="container products-solutions-container">

            <motion.div
              className="products-solutions-heading"
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
                amount: 0.25,
              }}
              transition={{
                duration: 0.65,
              }}
            >

              <span>
                FEATURED TECHNOLOGIES
              </span>


              <h2>
                Trusted technologies.
                <b> Proven performance.</b>
              </h2>


              <div className="products-solutions-heading-line" />


              <p>
                Confitech delivers technology solutions across environment
                monitoring, access control and structured network infrastructure
                for modern business environments.
              </p>

            </motion.div>



            {/* ================================================= */}
            {/* PRODUCT ROWS                                      */}
            {/* ================================================= */}

            <div className="products-solutions-list">

              {products.map((product, index) => (

                <motion.article
                  className="products-solution-row"
                  key={product.title}
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
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >

                  {/* NUMBER */}

                  <span className="products-solution-number">
                    {product.number}
                  </span>


                  {/* CONTENT */}

                  <div className="products-solution-content">

                    <div className="products-brand-logo">

                      <img
                        src={product.logo}
                        alt={product.brand}
                      />

                    </div>


                    <h3>
                      {product.title}
                    </h3>


                    <p className="products-solution-description">
                      {product.description}
                    </p>


                    <ul className="products-solution-features">

                      {product.features.map((feature) => (

                        <li key={feature}>

                          <CheckCircle2
                            size={14}
                            strokeWidth={2}
                          />


                          <span>
                            {feature}
                          </span>

                        </li>

                      ))}

                    </ul>

                  </div>



                  {/* IMAGE */}

                  <div className="products-solution-visual">

                    <div className="products-solution-green-glow" />


                    <img
                      src={product.image}
                      alt={product.imageAlt}
                      loading="lazy"
                    />

                  </div>



                  {/* ARROW */}

                  <Link
                    to="/contact"
                    className="products-solution-arrow"
                    aria-label={`Enquire about ${product.title}`}
                  >

                    <ArrowRight
                      size={20}
                      strokeWidth={1.8}
                    />

                  </Link>

                </motion.article>

              ))}

            </div>



            {/* ================================================= */}
            {/* BENEFITS                                          */}
            {/* ================================================= */}

            <div className="products-benefits">

              {benefits.map((benefit, index) => {

                const Icon =
                  benefit.icon;


                return (

                  <motion.div
                    className="products-benefit"
                    key={benefit.title}
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
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.07,
                    }}
                  >

                    <div className="products-benefit-icon">

                      <Icon
                        size={23}
                        strokeWidth={1.7}
                      />

                    </div>


                    <div>

                      <h4>
                        {benefit.title}
                      </h4>


                      <p>
                        {benefit.text}
                      </p>

                    </div>

                  </motion.div>

                );
              })}

            </div>

          </div>

        </section>



        {/* ================================================= */}
        {/* PRODUCTS CTA                                      */}
        {/* ================================================= */}

        <section className="products-page-cta">

          <div className="products-page-cta-dots" />
          <div className="products-page-cta-wave" />


          <div className="container products-page-cta-container">

            <motion.div
              className="products-page-cta-inner"
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
                duration: 0.65,
              }}
            >

              {/* ICON */}

              <div className="products-page-cta-icon">

                <MessageCircle
                  size={27}
                  strokeWidth={1.8}
                />

              </div>


              {/* TITLE */}

              <div className="products-page-cta-title">

                <h2>
                  Need help choosing the

                  <span>
                    right solution for
                    <b> your business?</b>
                  </span>
                </h2>

              </div>


              {/* DIVIDER */}

              <div className="products-page-cta-divider" />


              {/* ACTION */}

              <div className="products-page-cta-action">

                <p>
                  Our team is here to understand your needs
                  and recommend the right technology.
                </p>


                <Link
                  to="/contact"
                  className="products-page-cta-button"
                >
                  Get In Touch

                  <ArrowRight
                    size={15}
                    strokeWidth={2}
                  />

                </Link>

              </div>

            </motion.div>

          </div>

        </section>

      </main>


      <Footer />

    </>
  );
};


export default Products;
