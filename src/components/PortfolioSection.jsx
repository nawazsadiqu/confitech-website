import {
  ArrowUpRight,
  Cable,
  Server,
  Network,
  Building2,
} from "lucide-react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "../styles/portfolio.css";


const additionalProjects = [
  {
    number: "02",
    title: "MADAYN KOM1 Mini Data Centre",
    category: "SERVER ROOM EXPANSION",
    icon: Server,
  },

  {
    number: "03",
    title: "Borusan Logistics, Al Ghubra",
    category: "OFFICE IT INFRASTRUCTURE",
    icon: Building2,
  },

  {
    number: "04",
    title: "DHL Warehouse, Barka",
    category: "CABLING & WIRELESS",
    icon: Network,
  },
];


const PortfolioSection = () => {
  return (
    <section className="portfolio-section">

      <div className="portfolio-bg-lines" />


      <div className="container portfolio-container">

        {/* ================================================= */}
        {/* HEADER                                            */}
        {/* ================================================= */}

        <div className="portfolio-heading">

          <motion.div
            className="portfolio-heading-left"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="portfolio-label">
              PROJECTS &amp; EXPERIENCE
            </span>

            <div className="portfolio-heading-line" />

            <h2>
              Infrastructure delivered in
              <span>
                <b> real environments.</b>
              </span>
            </h2>
          </motion.div>


          <motion.div
            className="portfolio-heading-right"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.65,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p>
              Selected project experience across structured cabling,
              fibre connectivity, data centre infrastructure, security,
              access control and enterprise technology environments.
            </p>

            <Link
              to="/portfolio"
              className="portfolio-view-link"
            >
              View Full Portfolio

              <span>
                <ArrowUpRight
                  size={16}
                  strokeWidth={2}
                />
              </span>
            </Link>
          </motion.div>

        </div>


        {/* ================================================= */}
        {/* FEATURED PROJECT                                  */}
        {/* ================================================= */}

        <motion.div
          className="portfolio-featured"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          {/* LEFT VISUAL */}

          <div className="portfolio-featured-visual">

            <img
              src="/images/project-network.png"
              alt="Structured cabling and fibre infrastructure"
            />

            <div className="portfolio-featured-number">
              01
            </div>

          </div>


          {/* RIGHT CONTENT */}

          <div className="portfolio-featured-content">

            <span className="portfolio-project-type">
              STRUCTURED CABLING &amp; FIBRE OPTIC PROJECT
            </span>

            <h3>
              OMSC
              <span>
                Oman Medical Simulation Centre, Al Khoud
              </span>
            </h3>

            <p className="portfolio-featured-description">
              Structured cabling and fibre optic cabling project consisting
              of 850 Cat6 outlets with OM2 50/125 12 Core multimode fibre
              connectivity between the Data Centre and three IDFs.
            </p>


            {/* PROJECT METRICS */}

            <div className="portfolio-project-metrics">

              <div>
                <strong>850</strong>
                <span>Cat6 Outlets</span>
              </div>

              <div>
                <strong>03</strong>
                <span>IDFs</span>
              </div>

              <div>
                <strong>12</strong>
                <span>Core MM Fibre</span>
              </div>

            </div>


            {/* SCOPE */}

            <div className="portfolio-project-scope">

              <span>
                <Cable
                  size={16}
                  strokeWidth={1.8}
                />
                850 Cat6 Outlets
              </span>

              <span>
                <Network
                  size={16}
                  strokeWidth={1.8}
                />
                OM2 50/125 Multimode Fibre
              </span>

              <span>
                <Server
                  size={16}
                  strokeWidth={1.8}
                />
                Data Centre to Three IDFs
              </span>

            </div>


            <Link
              to="/portfolio"
              className="portfolio-project-link"
            >
              Explore Project

              <ArrowUpRight
                size={17}
                strokeWidth={2}
              />
            </Link>

          </div>

        </motion.div>


        {/* ================================================= */}
        {/* ADDITIONAL SELECTED WORK                          */}
        {/* ================================================= */}

        <div className="portfolio-selected-heading">

          <span>
            ADDITIONAL SELECTED WORK
          </span>

          <div />

        </div>


        <div className="portfolio-project-list">

          {additionalProjects.map((project, index) => {

            const Icon = project.icon;

            return (
              <motion.div
                className="portfolio-project-row"
                key={project.title}
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

                <span className="portfolio-row-number">
                  {project.number}
                </span>


                <div className="portfolio-row-icon">
                  <Icon
                    size={22}
                    strokeWidth={1.7}
                  />
                </div>


                <div className="portfolio-row-content">

                  <span>
                    {project.category}
                  </span>

                  <h4>
                    {project.title}
                  </h4>

                </div>


                <Link
                  to="/portfolio"
                  className="portfolio-row-arrow"
                  aria-label={`View ${project.title}`}
                >
                  <ArrowUpRight
                    size={18}
                    strokeWidth={2}
                  />
                </Link>

              </motion.div>
            );
          })}

        </div>


        {/* ================================================= */}
        {/* EXPERIENCE STRIP                                  */}
        {/* ================================================= */}

        <motion.div
          className="portfolio-experience"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.65,
          }}
        >

          <span className="portfolio-experience-label">
            EXPERIENCE ACROSS
          </span>

          <div className="portfolio-experience-items">

            <span>
              Structured Cabling
            </span>

            <i />

            <span>
              Fibre Connectivity
            </span>

            <i />

            <span>
              Data Centre Infrastructure
            </span>

            <i />

            <span>
              CCTV &amp; Access Control
            </span>

            <i />

            <span>
              Time Attendance &amp; Automation
            </span>

          </div>

        </motion.div>

      </div>

    </section>
  );
};


export default PortfolioSection;