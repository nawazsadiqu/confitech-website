import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Cable,
  CheckCircle2,
  Network,
  Server,
  Camera,
  Fingerprint,
  ShieldCheck,
  Wifi,
  HardDrive,
} from "lucide-react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/portfolioPage.css";


const projects = [
  {
    number: "01",
    title: "Oman Medical Simulation Centre",
    subtitle: "Al Khoud",
    category: "STRUCTURED CABLING & FIBRE",
    icon: Cable,
    description:
      "Structured cabling and fibre-optic infrastructure delivered for the Oman Medical Simulation Centre in Al Khoud, connecting the data centre with three IDFs.",
    metrics: [
      {
        value: "850",
        label: "CAT6 Outlets",
      },
      {
        value: "03",
        label: "IDFs",
      },
      {
        value: "12",
        label: "Core MM Fibre",
      },
    ],
    scope: [
      "850 Cat6 Outlets",
      "OM2 50/125 Multimode Fibre",
      "12-Core MM Fibre Connectivity",
      "Data Centre to Three IDFs",
    ],
  },

  {
    number: "02",
    title: "ABB Oman - Oman Cement",
    subtitle: "SCADA Upgradation Project",
    category: "SCADA FIBRE CONNECTIVITY",
    icon: Network,
    description:
      "Fibre-optic connectivity work supporting the Oman Cement SCADA upgradation project for ABB Oman.",
    metrics: [],
    scope: [
      "Fibre Connectivity Between SCADA Devices",
      "Fibre Optic Splicing",
      "Fibre Testing",
      "SCADA Device Connectivity",
    ],
  },

  {
    number: "03",
    title: "Borusan Logistics",
    subtitle: "Al Ghubra",
    category: "OFFICE IT INFRASTRUCTURE",
    icon: Building2,
    description:
      "Complete office IT infrastructure implementation for Borusan Logistics in Al Ghubra, covering structured cabling, electrical points and UPS power distribution.",
    metrics: [],
    scope: [
      "Cat6 Data Outlets",
      "Electrical Points",
      "10KVA UPS",
      "UPS Power Distribution",
    ],
  },

  {
    number: "04",
    title: "National Training Institute",
    subtitle: "Ghala Training Centre",
    category: "CAT6A STRUCTURED CABLING",
    icon: Cable,
    description:
      "Cat6A structured cabling implementation for the National Training Institute at its Ghala Training Centre.",
    metrics: [],
    scope: [
      "Cat6A Structured Cabling",
      "Training Centre Network Infrastructure",
    ],
  },

  {
    number: "05",
    title: "MEDC - Head Quarter Building",
    subtitle: "",
    category: "PROJECT MANAGEMENT & CABLING",
    icon: Network,
    description:
      "Project management for the complete Cat6A structured cabling and data-centre connectivity works at the MEDC Head Quarter Building.",
    metrics: [],
    scope: [
      "Project Management",
      "Cat6A Structured Cabling",
      "Data Centre Connectivity",
    ],
  },

  {
    number: "06",
    title: "ACWA Power",
    subtitle: "Barka",
    category: "STRUCTURED CABLING & FIBRE",
    icon: Cable,
    description:
      "Structured cabling projects and fibre connectivity works delivered for ACWA Power in Barka.",
    metrics: [],
    scope: [
      "Structured Cabling",
      "Fibre Connectivity",
    ],
  },

  {
    number: "07",
    title: "ABB Oman - Mukhaizna",
    subtitle: "Oil & Gas Project",
    category: "FIBRE OPTIC INFRASTRUCTURE",
    icon: Network,
    description:
      "Supply of Corning fibre-optic cables and accessories for ABB Oman's Mukhaizna Oil & Gas project.",
    metrics: [],
    scope: [
      "Corning Fibre Optic Cables",
      "Fibre Optic Accessories",
      "Oil & Gas Project Infrastructure",
    ],
  },

  {
    number: "08",
    title: "DHL Warehouse",
    subtitle: "Barka",
    category: "CABLING & WIRELESS",
    icon: Wifi,
    description:
      "Structured cabling and wireless infrastructure delivered for the DHL Warehouse in Barka, including wireless connectivity for RFID handheld readers.",
    metrics: [],
    scope: [
      "Structured Cabling",
      "Wireless Solution",
      "RFID Handheld Reader Connectivity",
    ],
  },

  {
    number: "09",
    title: "KPMG Oman",
    subtitle: "",
    category: "DATA CENTRE INFRASTRUCTURE",
    icon: Server,
    description:
      "IT and data-centre infrastructure works for KPMG Oman covering structured cabling, raised access flooring, UPS and environment monitoring.",
    metrics: [],
    scope: [
      "Cat6 Structured Cabling",
      "Data Centre Raised Access Flooring",
      "UPS",
      "Environment Monitoring",
    ],
  },

  {
    number: "10",
    title: "MADAYN / PEIE",
    subtitle: "Nizwa",
    category: "STRUCTURED CABLING",
    icon: Cable,
    description:
      "Structured cabling works delivered for the Public Establishment for Industrial Estate / MADAYN in Nizwa.",
    metrics: [],
    scope: [
      "Structured Cabling",
      "Network Infrastructure Connectivity",
    ],
  },

  {
    number: "11",
    title: "COMO",
    subtitle: "Rusayl",
    category: "FACILITIES MANAGEMENT",
    icon: Building2,
    description:
      "Facilities-management related office projects delivered for COMO, including various office projects in Knowledge Oasis Muscat.",
    metrics: [],
    scope: [
      "Facilities Management",
      "Various Office Projects",
      "Knowledge Oasis Muscat Projects",
    ],
  },

  {
    number: "12",
    title: "HST Logistics Oman",
    subtitle: "",
    category: "OFFICE IT INFRASTRUCTURE",
    icon: Building2,
    description:
      "Office IT infrastructure works delivered for HST Logistics Oman.",
    metrics: [],
    scope: [
      "Office IT Infrastructure",
      "Business Technology Environment",
    ],
  },

  {
    number: "13",
    title: "Integrated Oil Supplies & Services",
    subtitle: "",
    category: "STRUCTURED CABLING & FIBRE",
    icon: Cable,
    description:
      "Structured cabling and fibre-optic works delivered for Integrated Oil Supplies and Services.",
    metrics: [],
    scope: [
      "Structured Cabling",
      "Fibre Optic Works",
    ],
  },

  {
    number: "14",
    title: "MADAYN - KOM1 Mini Data Centre",
    subtitle: "Server Room Expansion",
    category: "MINI DATA CENTRE",
    icon: Server,
    description:
      "Server-room expansion and mini data-centre infrastructure works at MADAYN KOM1, integrating power, safety, data and security systems.",
    metrics: [],
    scope: [
      "Raised Access Flooring",
      "Automated Fire Extinguishing System",
      "UPS Power Distribution",
      "Data Connectivity",
      "Access Control",
      "CCTV",
      "NTI Environment Monitoring",
    ],
  },

  {
    number: "15",
    title: "Galfar - DRC Centre",
    subtitle: "",
    category: "DRC / DATA CENTRE",
    icon: Server,
    description:
      "Complete DRC infrastructure setup for Galfar, covering the physical room environment, fire protection, power distribution, data, security and monitoring.",
    metrics: [],
    scope: [
      "Fire-Rated Partitions",
      "Raised Access Flooring",
      "Automatic Fire Suppression",
      "Data Infrastructure",
      "15KVA UPS",
      "Access Control",
      "CCTV",
      "Environment Monitoring",
    ],
  },

  {
    number: "16",
    title: "Switz International LLC",
    subtitle: "",
    category: "DATA CENTRE INFRASTRUCTURE",
    icon: Server,
    description:
      "Data-centre infrastructure works for Switz International LLC integrating physical infrastructure, fire protection, power, data, security and monitoring.",
    metrics: [],
    scope: [
      "Fire-Rated Partitions",
      "Raised Access Flooring",
      "Fire Suppression",
      "Data Infrastructure",
      "10KVA UPS",
      "Access Control",
      "CCTV",
      "Environment Monitoring",
    ],
  },

  {
    number: "17",
    title: "NOMAC Oman",
    subtitle: "Four Power Plants",
    category: "TIME ATTENDANCE & ACCESS CONTROL",
    icon: Fingerprint,
    description:
      "Centralised automated time-attendance and access-control implementation across four NOMAC power plants in Oman.",
    metrics: [],
    scope: [
      "Centralised Time Attendance",
      "Automated Access Control",
      "Multi-Location Management",
      "Four Power Plants",
    ],
  },

  {
    number: "18",
    title: "MADAYN - Sohar Mini Data Centre",
    subtitle: "",
    category: "MINI DATA CENTRE",
    icon: Server,
    description:
      "Mini data-centre and server-room expansion works for MADAYN in Sohar, integrating physical infrastructure, safety, power, data and security systems.",
    metrics: [],
    scope: [
      "Raised Access Flooring",
      "Automated Fire Extinguishing System",
      "UPS Power Distribution",
      "Data Connectivity",
      "Access Control",
      "CCTV",
      "Environment Monitoring",
    ],
  },

  {
    number: "19",
    title: "Data Mount Data Center",
    subtitle: "Project Management for InterTech LLC",
    category: "DATA CENTRE PROJECT MANAGEMENT",
    icon: HardDrive,
    description:
      "Project-management involvement for InterTech LLC on a modular, highly scalable data-centre environment with cold-aisle containment, high-density rack capacity, precision cooling and N+N UPS infrastructure.",
    metrics: [
      {
        value: "128",
        label: "Initial Cabinets",
      },
      {
        value: "700",
        label: "Scale-Up Racks",
      },
      {
        value: "800",
        label: "KW N+N UPS",
      },
    ],
    scope: [
      "Cold-Aisle Containment",
      "128 Cabinets at 5KW",
      "8KW High-Density Racks",
      "Scalable up to 700 Racks",
      "1250KW Chiller",
      "5 × 165KW CRAH Units",
      "4 × 35KW CRAH Units",
      "4 × 60KW In-Row Cooling Units",
      "800KW N+N UPS",
      "2 × 2.2MVA Power Infrastructure",
    ],
  },

  {
    number: "20",
    title: "NOMAC Oman",
    subtitle: "Sohar & Ibri",
    category: "CAT6 DATA CABLING",
    icon: Cable,
    description:
      "Cat6 data-cabling works delivered for NOMAC Oman facilities in Sohar and Ibri.",
    metrics: [],
    scope: [
      "Cat6 Data Cabling",
      "Sohar Facility",
      "Ibri Facility",
    ],
  },

  {
    number: "21",
    title: "Muscat Finance",
    subtitle: "New Head Quarter",
    category: "IP CCTV",
    icon: Camera,
    description:
      "IP CCTV implementation for the new Muscat Finance Head Quarter.",
    metrics: [],
    scope: [
      "IP CCTV",
      "Head Quarter Security Infrastructure",
    ],
  },

  {
    number: "22",
    title: "Talabat",
    subtitle: "",
    category: "ACCESS CONTROL",
    icon: ShieldCheck,
    description:
      "Access-control solution delivered for Talabat.",
    metrics: [],
    scope: [
      "Access Control",
      "Secure Entry Management",
    ],
  },

  {
    number: "23",
    title: "Omanline",
    subtitle: "Training Centres Across Oman",
    category: "STRUCTURED CABLING",
    icon: Cable,
    description:
      "Structured cabling projects delivered across Omanline training centres in Oman.",
    metrics: [],
    scope: [
      "Structured Cabling",
      "Training Centre Infrastructure",
      "Multi-Site Implementation",
    ],
  },

  {
    number: "24",
    title: "NOMAC Oman - Mini Data Centre",
    subtitle: "Building & Office Infrastructure",
    category: "MINI DATA CENTRE & OFFICE CABLING",
    icon: Server,
    description:
      "Mini data-centre and office infrastructure works for NOMAC Oman, integrating physical data-centre infrastructure, power, security, monitoring and office Cat6 cabling.",
    metrics: [],
    scope: [
      "Fire-Rated Partitions",
      "Raised Access Flooring",
      "Fire Suppression",
      "Data Infrastructure",
      "10KVA UPS",
      "Access Control",
      "CCTV",
      "Environment Monitoring",
      "Office Cat6 Brand-Rex Cabling",
    ],
  },
];


const CountUp = ({
  end,
  duration = 1.6,
  suffix = "",
  pad = 0,
}) => {

  const [value, setValue] = useState(0);

  const counterRef = useRef(null);

  const hasStarted = useRef(false);


  useEffect(() => {

    const element = counterRef.current;

    if (!element) return;


    const observer = new IntersectionObserver(
      ([entry]) => {

        if (
          entry.isIntersecting &&
          !hasStarted.current
        ) {

          hasStarted.current = true;

          const startTime =
            performance.now();


          const updateCounter = (currentTime) => {

            const elapsed =
              currentTime - startTime;

            const progress =
              Math.min(
                elapsed /
                (duration * 1000),
                1
              );


            /*
             * Smooth slowdown toward
             * the final number
             */
            const easedProgress =
              1 -
              Math.pow(
                1 - progress,
                3
              );


            const currentValue =
              Math.round(
                end * easedProgress
              );


            setValue(currentValue);


            if (progress < 1) {

              requestAnimationFrame(
                updateCounter
              );

            } else {

              /*
               * Ensures exact final value
               */
              setValue(end);

            }

          };


          requestAnimationFrame(
            updateCounter
          );

        }

      },
      {
        threshold: 0.4,
      }
    );


    observer.observe(element);


    return () => {
      observer.disconnect();
    };

  }, [end, duration]);


  const displayValue =
    String(value).padStart(
      pad,
      "0"
    );


  return (
    <strong ref={counterRef}>
      {displayValue}
      {suffix}
    </strong>
  );
};

const Portfolio = () => {

  /*
   * 0 means OMSC is open when
   * the page first loads.
   *
   * Change this to null if you
   * want everything closed initially.
   */

  const [activeProject, setActiveProject] =
    useState(0);


  const handleProjectClick = (index) => {

    setActiveProject(
      activeProject === index
        ? null
        : index
    );

  };


  return (
    <>
      <Navbar />


      <main>

        {/* ================================================= */}
        {/* PORTFOLIO HEADER                                  */}
        {/* ================================================= */}

        <section
          className="portfolio-page-header"
          id="top"
        >

          <div className="container">

            <motion.div
              className="portfolio-header-content"
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

              <span className="portfolio-header-label">
                PROJECTS &amp; EXPERIENCE
              </span>


              <h1>
                Technology delivered in

                <span>
                  real environments
                  <b>.</b>
                </span>
              </h1>


              <div className="portfolio-header-line" />


              <p>
                Confitech&apos;s project references span structured
                cabling, fibre infrastructure, data centres, security,
                access control and enterprise IT environments across Oman.
              </p>


              {/* PROJECT REFERENCE PROOF NUMBERS */}

              <div className="portfolio-header-metrics">

                <div>

                  <CountUp
                    end={24}
                    duration={1.8}
                    pad={2}
                  />

                  <span>
                    PROJECT REFERENCES
                  </span>

                </div>


                <i />


                <div>

                  <CountUp
                    end={850}
                    duration={1.8}
                  />

                  <span>
                    CAT6 OUTLETS
                  </span>

                </div>


                <i />


                <div>

                  <CountUp
                    end={3}
                    duration={1.35}
                    pad={2}
                  />

                  <span>
                    IDFs
                  </span>

                </div>

              </div>

            </motion.div>

          </div>

        </section>



        {/* ================================================= */}
        {/* SELECTED EXPERIENCE                               */}
        {/* ================================================= */}

        <section className="portfolio-selected-section">

          <div className="container">

            <motion.div
              className="portfolio-selected-heading"
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
                duration: 0.55,
              }}
            >

              <span>
                SELECTED EXPERIENCE
              </span>


              <p>
                Select a project to explore the
                scope and technical details listed in our company profile.
              </p>

            </motion.div>



            {/* ================================================= */}
            {/* ACCORDION                                         */}
            {/* ================================================= */}

            <div className="portfolio-accordion">

              {projects.map((project, index) => {

                const Icon = project.icon;

                const isActive =
                  activeProject === index;


                return (

                  <motion.div
                    className={`portfolio-accordion-item ${isActive
                        ? "is-active"
                        : ""
                      }`}
                    key={project.title}
                    initial={{
                      opacity: 0,
                      y: 15,
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
                      duration: 0.45,
                      delay:
                        index * 0.05,
                    }}
                  >

                    {/* ========================================= */}
                    {/* PROJECT ROW                               */}
                    {/* ========================================= */}

                    <button
                      type="button"
                      className="portfolio-accordion-trigger"
                      onClick={() =>
                        handleProjectClick(index)
                      }
                      aria-expanded={isActive}
                    >

                      <span className="portfolio-accordion-number">
                        {project.number}
                      </span>


                      <span className="portfolio-row-divider" />


                      <span className="portfolio-accordion-title">

                        <strong>
                          {project.title}
                        </strong>

                      </span>


                      <span className="portfolio-accordion-category">
                        {project.category}
                      </span>


                      <span
                        className={`portfolio-accordion-arrow ${isActive
                            ? "is-open"
                            : ""
                          }`}
                      >

                        <ArrowRight
                          size={18}
                          strokeWidth={1.8}
                        />

                      </span>

                    </button>



                    {/* ========================================= */}
                    {/* EXPANDED PROJECT                          */}
                    {/* ========================================= */}

                    <AnimatePresence initial={false}>

                      {isActive && (

                        <motion.div
                          className="portfolio-project-expand-wrap"
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.48,
                            ease: [
                              0.22,
                              1,
                              0.36,
                              1,
                            ],
                          }}
                        >

                          <div className="portfolio-project-expanded">

                            {/* PROJECT OVERVIEW */}

                            <div className="portfolio-expanded-content">

                              <div className="portfolio-expanded-title-row">

                                <motion.div
                                  className="portfolio-expanded-icon"
                                  initial={{
                                    opacity: 0,
                                    scale: 0.9,
                                  }}
                                  animate={{
                                    opacity: 1,
                                    scale: 1,
                                  }}
                                  transition={{
                                    duration: 0.35,
                                    delay: 0.06,
                                  }}
                                >

                                  <Icon
                                    size={27}
                                    strokeWidth={1.7}
                                  />

                                </motion.div>


                                <div className="portfolio-expanded-title-copy">

                                  <span className="portfolio-expanded-category">
                                    {project.category}
                                  </span>


                                  <h2>
                                    {project.title}
                                  </h2>


                                  {project.subtitle && (

                                    <h3>
                                      {project.subtitle}
                                    </h3>

                                  )}

                                </div>

                              </div>


                              <div className="portfolio-expanded-line" />


                              <p className="portfolio-expanded-description">
                                {project.description}
                              </p>



                              {/* METRICS - ONLY WHERE AVAILABLE */}

                              {project.metrics.length > 0 && (

                                <div className="portfolio-expanded-metrics">

                                  {project.metrics.map(
                                    (metric) => (

                                      <div
                                        key={
                                          metric.label
                                        }
                                      >

                                        <strong>
                                          {metric.value}
                                        </strong>


                                        <span>
                                          {metric.label}
                                        </span>

                                      </div>

                                    )
                                  )}

                                </div>

                              )}



                              <Link
                                to="/contact"
                                className="portfolio-expanded-button"
                              >

                                Discuss a Similar Project

                                <ArrowUpRight
                                  size={17}
                                  strokeWidth={1.8}
                                />

                              </Link>

                            </div>



                            {/* PROJECT SCOPE */}

                            <div className="portfolio-expanded-side">

                              <div className="portfolio-expanded-side-heading">

                                <span>
                                  PROJECT SCOPE
                                </span>

                                <div />

                              </div>

                              <div className="portfolio-expanded-scope">

                                {project.scope.map(
                                  (item) => (

                                    <div key={item}>

                                      <CheckCircle2
                                        size={15}
                                        strokeWidth={2}
                                      />

                                      <span>
                                        {item}
                                      </span>

                                    </div>

                                  )
                                )}

                              </div>

                            </div>

                          </div>

                        </motion.div>

                      )}

                    </AnimatePresence>

                  </motion.div>

                );
              })}

            </div>

          </div>

        </section>

        {/* ================================================= */}
        {/* PORTFOLIO CTA                                     */}
        {/* ================================================= */}

        <section className="portfolio-compact-cta">

          <div className="portfolio-cta-wave" />

          <div className="container portfolio-compact-cta-inner">

            <div>

              <span>
                HAVE A PROJECT IN MIND?
              </span>

              <h2>
                Let&apos;s build the right
                <b> technology environment.</b>
              </h2>

            </div>

            <Link
              to="/contact"
              className="portfolio-compact-cta-button"
            >
              Get In Touch

              <ArrowRight
                size={16}
              />
            </Link>

          </div>

        </section>

      </main>

      <Footer />

    </>
  );
};

export default Portfolio;