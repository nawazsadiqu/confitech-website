import {
  Network,
  Server,
  ShieldCheck,
  CloudCog,
  BriefcaseBusiness,
  ArrowUpRight,
} from "lucide-react";

import { motion } from "framer-motion";


const services = [
  {
    number: "01",
    icon: Network,
    image: "/images/service-structured-cabling.png",
    title: "Structured Cabling",
    description:
      "Reliable structured cabling and network infrastructure designed for performance, scalability and long-term efficiency.",
  },

  {
    number: "02",
    icon: Server,
    image: "/images/hero-data-center.png",
    title: "Data Center Solutions",
    description:
      "Infrastructure and technology solutions for building dependable, secure and efficient data centre environments.",
  },

  {
    number: "03",
    icon: ShieldCheck,
    image: "/images/service-security.png",
    title: "CCTV & Access Control",
    description:
      "Integrated surveillance and access control solutions that help businesses protect people, premises and critical assets.",
  },

  {
    number: "04",
    icon: BriefcaseBusiness,
    image: "/images/service-it-consulting.png",
    title: "IT Consulting",
    description:
      "Professional consulting across networking, information security, operating systems and enterprise IT infrastructure.",
  },

  {
    number: "05",
    icon: CloudCog,
    image: "/images/service-cloud-support.png",
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

      <div className="container">

        {/* ============================= */}
        {/* HEADING                       */}
        {/* ============================= */}

        <div className="services-heading">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >

            <span className="section-label">
              OUR EXPERTISE
            </span>

            <h2>
              Technology solutions built around
              <span> your infrastructure.</span>
            </h2>

          </motion.div>


          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.55,
              delay: 0.1,
            }}
          >
            From connectivity and data centres to security and cloud support,
            Confitech provides practical technology solutions designed around
            real business requirements.
          </motion.p>

        </div>


        {/* ============================= */}
        {/* SERVICES GRID                 */}
        {/* ============================= */}

        <div className="services-grid">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (

              <motion.a
                href="/services"
                className="service-card"
                key={service.title}
                initial={{
                  opacity: 0,
                  y: 35,
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

                {/* IMAGE */}

                <div className="service-card-image">

                  <img
                    src={service.image}
                    alt={service.title}
                  />

                  <div className="service-image-overlay"></div>


                  <div className="service-card-top">

                    <div className="service-icon">
                      <Icon
                        size={23}
                        strokeWidth={1.8}
                      />
                    </div>

                    <span className="service-number">
                      {service.number}
                    </span>

                  </div>

                </div>


                {/* CONTENT */}

                <div className="service-card-body">

                  <div className="service-content">

                    <h3>
                      {service.title}
                    </h3>

                    <p>
                      {service.description}
                    </p>

                  </div>


                  <div className="service-card-link">

                    Explore Service

                    <ArrowUpRight size={18} />

                  </div>

                </div>

              </motion.a>

            );
          })}

        </div>

      </div>

    </section>
  );
};


export default ServicesSection;