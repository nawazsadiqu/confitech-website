import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Enterprise Network Infrastructure",
    category: "Structured Cabling",
    description:
      "Professional network infrastructure designed for reliable connectivity and efficient business operations.",
    image: "/images/project-network.png",
    className: "portfolio-main",
  },
  {
    title: "Security & Surveillance",
    category: "CCTV & Access Control",
    description:
      "Integrated security infrastructure supporting surveillance, monitoring and controlled access.",
    image: "/images/project-security.png",
    className: "",
  },
  {
    title: "Data Centre Infrastructure",
    category: "Data Center Solutions",
    description:
      "Reliable infrastructure designed to support critical technology and enterprise systems.",
    image: "/images/project-datacenter.png",
    className: "",
  },
];

const PortfolioSection = () => {
  return (
    <section className="portfolio-section">

      <div className="container">

        <div className="portfolio-heading">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span className="section-label">
              PROJECTS & EXPERIENCE
            </span>

            <h2>
              Solutions delivered for
              <span> real environments.</span>
            </h2>
          </motion.div>


          <motion.div
            className="portfolio-heading-right"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <p>
              Explore selected technology projects and infrastructure
              solutions delivered across networking, security and data centre
              environments.
            </p>

            <a href="/portfolio" className="text-link">
              View Portfolio
              <ArrowUpRight size={18} />
            </a>
          </motion.div>

        </div>


        <div className="portfolio-grid">

          {projects.map((project, index) => (
            <motion.a
              href="/portfolio"
              className={`portfolio-card ${project.className}`}
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
            >

              <div
                className="portfolio-image"
                style={{
                  backgroundImage: `url(${project.image})`,
                }}
              ></div>

              <div className="portfolio-overlay"></div>

              <div className="portfolio-content">

                <span className="portfolio-category">
                  {project.category}
                </span>

                <div className="portfolio-bottom">

                  <div>
                    <h3>{project.title}</h3>

                    <p>{project.description}</p>
                  </div>

                  <div className="portfolio-arrow">
                    <ArrowUpRight size={20} />
                  </div>

                </div>

              </div>

            </motion.a>
          ))}

        </div>

      </div>

    </section>
  );
};

export default PortfolioSection;