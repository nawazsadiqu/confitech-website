import {
  Network,
  Server,
  ShieldCheck,
  Monitor,
  Building2,
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
    title: "Networking Infrastructure",
    description:
      "Integrated networking infrastructure for voice, video, data and specialised systems, including structured cabling, fibre optic connectivity and wireless networks.",
  },

  {
    number: "02",
    icon: Server,
    image: "/images/services/data-center-light.png",
    title: "Data Centre Infrastructure",
    description:
      "End-to-end data centre infrastructure covering cooling, power, cabling, monitoring, site preparation, safety and integrated security systems.",
  },

  {
    number: "03",
    icon: ShieldCheck,
    image: "/images/services/security-light.png",
    title: "Safety & Security",
    description:
      "Integrated physical security and life-safety solutions including CCTV, access control, gate barriers, video analytics and specialised surveillance systems.",
  },

  {
    number: "04",
    icon: Monitor,
    image: "/images/services/audio-visual-cwe-light.png",
    title: "Audio Visual & CWE",
    description:
      "Audio visual and collaborative working solutions including conferencing, projection, digital signage, sound systems and smart classroom technologies.",
  },

  {
    number: "05",
    icon: Building2,
    image: "/images/services/building-management-automation-light.png",
    title: "Building Management & Automation",
    description:
      "Integrated building management and facilities automation solutions designed for modern commercial and technology environments.",
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
              From networking infrastructure and data centres to safety,
              security, audio visual systems and facilities automation,
              Confitech delivers integrated IT and communication solutions
              engineered around real business requirements.
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