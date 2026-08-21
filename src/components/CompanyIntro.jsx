import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const CompanyIntro = () => {
  return (
    <section className="company-intro">

      {/* BACKGROUND BRAND TEXT */}
      <div className="company-intro-watermark">
        CONFITECH
      </div>

      <div className="container company-intro-container">

        {/* LEFT SIDE */}

        <motion.div
          className="company-intro-left"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <span className="section-label">
            ABOUT CONFITECH
          </span>

          <h2>
            Technology that keeps
            <span> business moving.</span>
          </h2>

          {/* SMALL PROOF ELEMENT */}

          <div className="company-intro-stat">

            <strong>05</strong>

            <div>
              <span>CORE SERVICE AREAS</span>

              <p>
                One technology partner.
              </p>
            </div>

          </div>

        </motion.div>


        {/* RIGHT SIDE */}

        <motion.div
          className="company-intro-right"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.7,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <p className="company-intro-lead">
            Confitech delivers reliable technology infrastructure and
            enterprise solutions designed around the evolving requirements
            of modern businesses.
          </p>

          <p>
            From structured cabling and data centre solutions to security,
            consulting and cloud support, we help organisations build
            dependable technology environments.
          </p>

          <a
            href="/about"
            className="text-link company-intro-link"
          >
            Discover Confitech

            <ArrowUpRight size={18} />
          </a>

        </motion.div>

      </div>


      {/* CAPABILITY STRIP */}

      <motion.div
        className="company-capabilities"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
          delay: 0.2,
        }}
      >

        <div className="company-capabilities-track">

          <span>Structured Cabling</span>

          <i></i>

          <span>Data Centres</span>

          <i></i>

          <span>CCTV & Security</span>

          <i></i>

          <span>IT Consulting</span>

          <i></i>

          <span>Cloud Support</span>

        </div>

      </motion.div>

    </section>
  );
};

export default CompanyIntro;