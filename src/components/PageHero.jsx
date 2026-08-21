import { motion } from "framer-motion";

const PageHero = ({ label, title, highlight, description }) => {
  return (
    <section className="page-hero">
      <div className="page-hero-glow"></div>

      <div className="container page-hero-container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">{label}</span>

          <h1>
            {title}
            {highlight && <span> {highlight}</span>}
          </h1>

          <p>{description}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;