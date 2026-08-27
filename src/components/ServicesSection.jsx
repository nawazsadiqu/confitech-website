import {
  Network,
  Server,
  ShieldCheck,
  CloudCog,
  BriefcaseBusiness,
  ArrowUpRight,
} from "lucide-react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "../styles/services.css";


const services = [
  {
    number: "01",
    icon: Network,
    image: "/images/services/structured-cabling-light.png",
    title: "Structured Cabling",
    description:
      "Reliable structured cabling and network infrastructure designed for performance, scalability and long-term efficiency.",
  },

  {
    number: "02",
    icon: Server,
    image: "/images/services/data-center-light.png",
    title: "Data Center Solutions",
    description:
      "Infrastructure and technology solutions for building dependable, secure and efficient data centre environments.",
  },

  {
    number: "03",
    icon: ShieldCheck,
    image: "/images/services/security-light.png",
    title: "CCTV & Access Control",
    description:
      "Integrated surveillance and access control solutions that help businesses protect people, premises and critical assets.",
  },

  {
    number: "04",
    icon: BriefcaseBusiness,
    image: "/images/services/it-consulting-light.png",
    title: "IT Consulting",
    description:
      "Professional consulting across networking, information security, operating systems and enterprise IT infrastructure.",
  },

  {
    number: "05",
    icon: CloudCog,
    image: "/images/services/cloud-support-light.png",
    title: "Cloud Support Services",
    description:
      "Reliable remote infrastructure management and cloud support services designed to keep your technology operating smoothly.",
  },
];


const ServicesSection = () => {
  return (
    <section
      className="services-section"
      id="services"
    >
      {/* BACKGROUND TECH DECORATION */}
      <div className="services-background-lines" />


      <div className="container services-container">

        {/* ================================================= */}
        {/* HEADING                                           */}
        {/* ================================================= */}

        <div className="services-heading">

          <motion.div
            className="services-heading-left"
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
              amount: 0.3,
            }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <span className="services-label">
              OUR EXPERTISE
            </span>


            <h2>
              Technology solutions built around
              <span>
                your infrastructure
                <b>.</b>
              </span>
            </h2>


            <div className="services-heading-line" />

          </motion.div>


          <motion.div
            className="services-heading-right"
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
              amount: 0.3,
            }}
            transition={{
              duration: 0.65,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <p>
              From connectivity and data centres to security and cloud
              support, Confitech provides practical technology solutions
              designed around real business requirements.
            </p>

          </motion.div>

        </div>


        {/* ================================================= */}
        {/* SERVICE CARDS                                     */}
        {/* ================================================= */}

        <div className="services-grid">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (

              <motion.article
                className="service-card"
                key={service.title}
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
                  duration: 0.55,
                  delay: index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >

                {/* IMAGE */}

                <div className="service-card-image">

                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                  />

                  <div className="service-card-image-fade" />

                </div>


                {/* ICON + NUMBER */}

                <div className="service-card-meta">

                  <div className="service-icon">
                    <Icon
                      size={24}
                      strokeWidth={1.7}
                    />
                  </div>


                  <span className="service-number">
                    {service.number}
                  </span>

                </div>


                {/* CONTENT */}

                <div className="service-card-content">

                  <h3>
                    {service.title}
                  </h3>


                  <p>
                    {service.description}
                  </p>


                  <Link
                    to="/services"
                    className="service-card-link"
                  >
                    Explore Service

                    <ArrowUpRight
                      size={16}
                      strokeWidth={2}
                    />
                  </Link>

                </div>

              </motion.article>

            );
          })}

        </div>

      </div>
    </section>
  );
};


export default ServicesSection;