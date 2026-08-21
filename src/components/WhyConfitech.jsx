import {
  Network,
  ShieldCheck,
  Handshake,
  Settings,
} from "lucide-react";

import { motion } from "framer-motion";

const reasons = [
  {
    number: "01",
    icon: Network,
    title: "Technical Expertise",
    description:
      "Practical expertise across networking, infrastructure, security and enterprise technology environments.",
  },
  {
    number: "02",
    icon: Settings,
    title: "End-to-End Solutions",
    description:
      "From planning and implementation to support, Confitech helps manage the complete technology lifecycle.",
  },
  {
    number: "03",
    icon: Handshake,
    title: "Trusted Partnerships",
    description:
      "Technology solutions supported by established products, brands and solution partners.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Reliable Support",
    description:
      "Solutions designed around reliability, business continuity and long-term operational requirements.",
  },
];

const WhyConfitech = () => {
  return (
    <section className="why-section">

      <div className="container">

        <div className="why-heading">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span className="section-label">WHY CONFITECH</span>

            <h2>
              Technology expertise you can
              <span> rely on.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            We focus on practical, dependable technology solutions that help
            businesses create secure, connected and efficient infrastructure.
          </motion.p>

        </div>


        <div className="why-grid">

          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.div
                className="why-card"
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >
                <div className="why-card-top">

                  <span className="why-number">
                    {reason.number}
                  </span>

                  <div className="why-icon">
                    <Icon size={24} strokeWidth={1.8} />
                  </div>

                </div>

                <h3>{reason.title}</h3>

                <p>{reason.description}</p>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default WhyConfitech;