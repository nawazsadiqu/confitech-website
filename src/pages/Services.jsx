import {
  Network,
  Server,
  ShieldCheck,
  BriefcaseBusiness,
  CloudCog,
  CheckCircle2,
} from "lucide-react";

import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesCTA from "../components/ServicesCTA";

import "../styles/servicesPage.css";


const services = [
  {
    number: "01",

    icon: Network,

    title: "Structured Cabling",

    intro:
      "Professional structured cabling, network cabling and connectivity infrastructure designed to support dependable business communications today and future network growth.",

    image:
      "/images/services/structured-cabling-light.png",

    imageAlt:
      "Structured network cabling infrastructure",

    features: [
      "Cat 5e, Cat 6 & Cat 6A Installation",
      "Network Cabling Systems & Design",
      "Data Centre & Infrastructure Cabling",
      "Telephone, LAN & Wireless Installation",
      "Testing, Certification & Documentation",
    ],
  },


  {
    number: "02",

    icon: Server,

    title: "Data Center Solutions",

    intro:
      "Data centre infrastructure products and solutions supporting secure, efficient and reliable environments for critical business technology.",

    image:
      "/images/services/data-center-light.png",

    imageAlt:
      "Modern data centre infrastructure",

    features: [
      "Raised Access Floors & Monitoring",
      "UPS Systems, Batteries & Power Distribution",
      "Racks, Cabinets & Cooling Solutions",
      "KVM Switches & Console Servers",
      "Copper, Fibre & Power Infrastructure",
    ],
  },


  {
    number: "03",

    icon: ShieldCheck,

    title: "CCTV & Access Control",

    intro:
      "Purpose-designed surveillance and access-control solutions combining CCTV, IP technologies and modern security systems for business environments.",

    image:
      "/images/services/security-light.png",

    imageAlt:
      "CCTV and access control infrastructure",

    features: [
      "CCTV & Video Surveillance Systems",
      "IP Camera Solutions",
      "Access Control Systems",
      "Biometric & Time-Attendance Solutions",
      "Security System Design & Implementation",
    ],
  },


  {
    number: "04",

    icon: BriefcaseBusiness,

    title: "Onshore IT Consulting",

    intro:
      "Practical IT consulting across networking, operating systems, information security and infrastructure for both short-term and long-term technology requirements.",

    image:
      "/images/services/it-consulting-light.png",

    imageAlt:
      "Professional enterprise IT consulting",

    features: [
      "Network Administration & Design",
      "Network Builds & Infrastructure Planning",
      "Data Migration & Technology Upgrades",
      "Disaster Planning & Recovery",
      "IT Strategy & Project Management",
    ],
  },


  {
    number: "05",

    icon: CloudCog,

    title: "Cloud Support Services",

    intro:
      "Remote Infrastructure Management and cloud-support services designed to monitor, manage and support critical IT environments across business operations.",

    image:
      "/images/services/cloud-support-light.png",

    imageAlt:
      "Cloud and remote infrastructure support",

    features: [
      "Remote Infrastructure Management",
      "Server, Database & Desktop Management",
      "Cloud Services, Office 365 & Exchange",
      "Server & Application Monitoring",
      "IT Service Desk & Professional Support",
    ],
  },
];


const Services = () => {
  return (
    <>
      <Navbar />


      <main>

        {/* ================================================= */}
        {/* SERVICES HERO                                     */}
        {/* ================================================= */}

        <section
          className="services-page-hero"
          id="top"
        >

          <div className="services-page-hero-glow" />

          <div className="services-page-hero-pattern" />


          <div className="container services-page-hero-container">

            {/* LEFT */}

            <motion.div
              className="services-page-hero-content"
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

              <span className="services-page-label">
                OUR SERVICES
              </span>


              <h1>
                Technology expertise for

                <span>
                  modern infrastructure
                  <b>.</b>
                </span>
              </h1>


              <p>
                From connectivity and data centres to security,
                consulting and cloud support, Confitech delivers
                practical technology solutions designed around
                real business requirements.
              </p>

            </motion.div>


            {/* RIGHT HERO VISUAL */}

            <motion.div
              className="services-page-hero-visual"
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
                duration: 0.9,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              <div className="services-page-hero-image-glow" />


              <img
                src="/images/services/services-hero.png"
                alt="Confitech technology infrastructure services"
              />

            </motion.div>

          </div>

        </section>



        {/* ================================================= */}
        {/* SERVICES                                         */}
        {/* ================================================= */}

        <section className="services-page-list-section">

          <div className="services-page-bg-glow" />


          <div className="container services-page-list">

            {services.map((service, index) => {

              const Icon = service.icon;


              return (

                <motion.article
                  className="services-page-row"
                  key={service.number}
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
                    amount: 0.13,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >

                  {/* ======================================= */}
                  {/* NUMBER / ICON                           */}
                  {/* ======================================= */}

                  <div className="services-page-meta">

                    <span className="services-page-number">
                      {service.number}
                    </span>


                    <div className="services-page-icon">
                      <Icon
                        size={30}
                        strokeWidth={1.7}
                      />
                    </div>

                  </div>



                  {/* ======================================= */}
                  {/* CONTENT                                 */}
                  {/* ======================================= */}

                  <div className="services-page-content">

                    <h2>
                      {service.title}
                    </h2>


                    <p className="services-page-intro">
                      {service.intro}
                    </p>


                    <ul className="services-page-features">

                      {service.features.map((feature) => (

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



                  {/* ======================================= */}
                  {/* IMAGE                                   */}
                  {/* ======================================= */}

                  <div className="services-page-image">

                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      loading="lazy"
                    />


                    <div className="services-page-image-overlay" />

                  </div>

                </motion.article>

              );
            })}

          </div>

        </section>

        <ServicesCTA />

      </main>


      <Footer />
    </>
  );
};


export default Services;