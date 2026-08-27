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
    title: "KOM-1 Server Room",
    category: "SERVER ROOM PROJECT",
    icon: Server,
  },
  {
    number: "03",
    title: "Borusan Logistics Office",
    category: "SELECTED PROJECT",
    icon: Building2,
  },
  {
    number: "04",
    title: "DHL (Huawei)",
    category: "SELECTED PROJECT",
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
              server rooms, data centre infrastructure and enterprise
              technology environments.
            </p>

            <Link
              to="/portfolio"
              className="portfolio-view-link"
            >
              View Full Portfolio

              <span>
                <ArrowUpRight size={16} />
              </span>
            </Link>
          </motion.div>

        </div>


        {/* ================================================= */}
        {/* FEATURED REAL PROJECT                             */}
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
              alt="Structured network infrastructure"
            />

            <div className="portfolio-featured-number">
              01
            </div>

          </div>


          {/* RIGHT CONTENT */}

          <div className="portfolio-featured-content">

            <span className="portfolio-project-type">
              STRUCTURED CABLING PROJECT
            </span>

            <h3>
              OMSC
              <span>Oman Medical Simulation Centre</span>
            </h3>

            <p className="portfolio-featured-description">
              A Brand-Rex CAT6 structured cabling solution delivered
              across a six-floor ministry building, connecting hundreds
              of network outlets through multiple IDFs and fibre links.
            </p>


            {/* PROJECT METRICS */}

            <div className="portfolio-project-metrics">

              <div>
                <strong>580</strong>
                <span>CAT6 Points</span>
              </div>

              <div>
                <strong>03</strong>
                <span>IDFs</span>
              </div>

              <div>
                <strong>6</strong>
                <span>Floors</span>
              </div>

            </div>


            {/* SCOPE */}

            <div className="portfolio-project-scope">

              <span>
                <Cable size={16} />
                Brand-Rex CAT6
              </span>

              <span>
                <Network size={16} />
                50/125 Multimode Fibre
              </span>

              <span>
                <Server size={16} />
                Raised-Floor Data Centre Room
              </span>

            </div>


            <Link
              to="/portfolio"
              className="portfolio-project-link"
            >
              Explore Project

              <ArrowUpRight size={17} />
            </Link>

          </div>

        </motion.div>


        {/* ================================================= */}
        {/* OTHER VERIFIED PROJECT NAMES                      */}
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
                  <ArrowUpRight size={18} />
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
              Data Centres
            </span>

            <i />

            <span>
              CCTV &amp; Access Control
            </span>

            <i />

            <span>
              Environment Monitoring
            </span>

            <i />

            <span>
              Cloud Support
            </span>

          </div>

        </motion.div>

      </div>

    </section>
  );
};


export default PortfolioSection;