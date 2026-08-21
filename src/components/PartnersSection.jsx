import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const partners = [
  {
    name: "NTI",
    category: "Environment Monitoring",
    description:
      "Environmental monitoring technologies for critical infrastructure and data centre environments.",
  },
  {
    name: "Brand-Rex",
    category: "Structured Cabling",
    description:
      "Professional structured cabling and connectivity solutions for reliable network infrastructure.",
  },
  {
    name: "Matrix Comsec",
    category: "Security & Telecom",
    description:
      "Integrated security, access control and telecom solutions for modern organisations.",
  },
  {
    name: "Offamata",
    category: "ERP on Cloud",
    description:
      "Cloud-based ERP technology designed to simplify and support business operations.",
  },
];

const PartnersSection = () => {
  return (
    <section className="partners-section">

      <div className="container">

        <div className="partners-heading">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span className="section-label">
              TECHNOLOGY & SOLUTION BRANDS
            </span>

            <h2>
              Solutions backed by
              <span> trusted technologies.</span>
            </h2>
          </motion.div>

          <motion.div
            className="partners-heading-right"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <p>
              Confitech works with established technology products and
              solution providers across infrastructure, monitoring,
              networking and security.
            </p>

            <a href="/partners" className="text-link">
              Explore Technologies
              <ArrowUpRight size={18} />
            </a>
          </motion.div>

        </div>


        <div className="partners-grid">

          {partners.map((partner, index) => (
            <motion.div
              className="partner-card"
              key={partner.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.07,
              }}
            >

              <span className="partner-index">
                0{index + 1}
              </span>

              <div className="partner-card-content">

                <span className="partner-category">
                  {partner.category}
                </span>

                <h3>{partner.name}</h3>

                <p>{partner.description}</p>

              </div>

              <div className="partner-card-line"></div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default PartnersSection;