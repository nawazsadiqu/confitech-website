import {
  Network,
  Server,
  ShieldCheck,
  Layers3,
  QrCode,
  Monitor,
  DoorOpen,
  Building2,
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

    title: "Networking Infrastructure & Structured Cabling",

    intro:
      "Complete structured cabling and networking infrastructure solutions designed to support reliable voice, data, video and specialised communication systems across modern business environments.",

    image:
      "/images/services/structured-cabling-light.png",

    imageAlt:
      "Structured network cabling infrastructure",

    features: [
      "Structured Cabling Design & Installation",
      "Fibre Optic, Data Network & Ethernet Cabling",
      "Cat 5e, Cat 6 & Cat 6A Cabling Systems",
      "Audio/Visual, VoIP, Low Voltage, Coaxial & Telephone Cabling",
      "WLAN Network Installation, Patch Panel Termination & Wireless LAN Solutions",
    ],
  },


  {
    number: "02",

    icon: Server,

    title: "Data Centre Solutions",

    intro:
      "End-to-end data centre infrastructure solutions covering site preparation, cooling, power, connectivity, monitoring, safety and integrated security for reliable critical environments.",

    image:
      "/images/services/data-center-light.png",

    imageAlt:
      "Modern data centre infrastructure",

    features: [
      "IT & Telecom Precision Cooling, Enclosures & Containment Systems",
      "UPS, Power Distribution, PDU, Electrical Works & Standby Emergency Power",
      "Optical Fibre, High-Speed Copper & Data Centre Cabling",
      "Environment Monitoring & Data Center Infrastructure Management",
      "Site Preparation, Safety & Protection, Surveillance & Access Control",
    ],
  },


  {
    number: "03",

    icon: Layers3,

    title: "Raised Access Flooring",

    intro:
      "Complete supply and installation of raised access flooring systems for server rooms, office buildings and data centres, supporting organised and efficient infrastructure environments.",

    image:
      "/images/services/raised-access-floor-light.png",

    imageAlt:
      "Raised access flooring for data centre and server room",

    features: [
      "Wood Core Raised Access Floor",
      "Calcium Sulphate Raised Access Floor",
      "Air-Flow Raised Access Floor",
    ],
  },


  {
    number: "04",

    icon: ShieldCheck,

    title: "Safety & Security Solutions",

    intro:
      "Design, engineering, supply, installation, testing, commissioning and maintenance of physical infrastructure security and life-safety solutions for projects of different sizes and requirements.",

    image:
      "/images/services/security-light.png",

    imageAlt:
      "Safety security CCTV and access control infrastructure",

    features: [
      "IP / Analog CCTV & Solar-Powered Independent Wireless CCTV Systems",
      "Access Control Systems, Turnstiles, Gate Barriers & Motorized Gates",
      "Industrial CCTV Systems & Video Analytics",
      "Specialised Long-Range Surveillance CCTV Cameras",
      "Thermal & Laser-Based Surveillance Solutions",
    ],
  },


  {
    number: "05",

    icon: ShieldCheck,

    title: "Time-Attendance & Access Control",

    intro:
      "Centralised attendance and enterprise access-control solutions designed to manage users, locations, shifts, devices and secure areas with real-time monitoring and scalable control.",

    image:
      "/images/services/time-attendance-access-control-light.png",

    imageAlt:
      "Time attendance and enterprise access control system",

    features: [
      "Centralised Multi-Location Attendance, Live Tracking & Real-Time Monitoring",
      "User-Wise Attendance Processing, Multiple Shifts & Overnight Shift Management",
      "Exception Notifications, Scheduled Reports & Attendance Management",
      "User, Zone & Time-Based Access with Multispectral Biometric Fingerprint Control",
      "IP-Based Architecture, Multi-Device Monitoring & Fire Alarm Integration",
    ],
  },


  {
    number: "06",

    icon: QrCode,

    title: "AIDC, Barcode & RFID Solutions",

    intro:
      "Business-enabling Automatic Identification and Data Capture solutions using barcode, RFID and mobile-computing technologies for efficient data capture and operational workflows.",

    image:
      "/images/services/aidc-barcode-rfid-light.png",

    imageAlt:
      "Barcode RFID and mobile computing technology",

    features: [
      "Barcode-Based Data Capture",
      "Application-Specific Mobile Computing",
      "RFID Solutions",
      "Barcode-Based Printers & Accessories",
    ],
  },


  {
    number: "07",

    icon: Monitor,

    title: "Audio Visual & Collaborative Working Environment",

    intro:
      "Audio Visual system integration and installation solutions designed to enhance communication, collaboration, presentation and learning environments across organisations.",

    image:
      "/images/services/audio-visual-cwe-light.png",

    imageAlt:
      "Audio visual collaborative working environment",

    features: [
      "Projection, LCD, Display & Digital Media Signage Solutions",
      "Sound Reinforcement, Local Audio Conferencing & Public Address",
      "Network Audio & Video Conferencing",
      "Audio / Video Switching, Conversion & Distribution",
      "Smart Boards & Smart Classroom Solutions",
    ],
  },


  {
    number: "08",

    icon: DoorOpen,

    title: "Automatic Gate Motors & Road Barriers",

    intro:
      "Automation solutions for controlled vehicle and pedestrian access, including gate systems, barriers, bollards and automated door solutions for commercial and infrastructure environments.",

    image:
      "/images/services/gate-motors-road-barriers-light.png",

    imageAlt:
      "Automatic gate motor and road barrier system",

    features: [
      "Electromechanical Automation Systems for Swing Gates",
      "Sliding Gate Automation Systems",
      "Road Barriers, Parking & Traffic Bollards",
      "Automatic Sliding Glass Door, Revolving Door & Swinging Gate Systems",
    ],
  },


  {
    number: "09",

    icon: Building2,

    title: "Building Management & Facilities Automation",

    intro:
      "Building management and facilities automation form part of Confitech's integrated technology and communication solutions portfolio for modern infrastructure environments.",

    image:
      "/images/services/building-management-automation-light.png",

    imageAlt:
      "Building management and facilities automation",

    features: [
      "Building Management Solutions",
      "Facilities Automation",
      "Integrated Technology Infrastructure",
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
                Integrated solutions for

                <span>
                  modern infrastructure
                  <b>.</b>
                </span>
              </h1>


              <p>
                From networking infrastructure and data centres to
                safety, security, access control, audio visual systems
                and facilities automation, Confitech delivers integrated
                IT and communication solutions for modern business environments.
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
                alt="Confitech integrated technology infrastructure services"
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
