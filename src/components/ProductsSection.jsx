import {
  ArrowUpRight,
  Activity,
  ShieldCheck,
  Network,
  CloudCog,
} from "lucide-react";

import { motion } from "framer-motion";

const products = [
  {
    icon: Activity,
    category: "Monitoring",
    title: "Environment Monitoring",
    brand: "NTI",
    description:
      "Monitoring solutions designed to help protect critical infrastructure and technology environments.",
    className: "product-environment",
  },

  {
    icon: ShieldCheck,
    category: "Security & Telecom",
    title: "Security & Telecom Solutions",
    brand: "Matrix Comsec",
    description:
      "Integrated security, access control and telecom solutions for modern organisations.",
    className: "product-security",
  },

  {
    icon: Network,
    category: "Structured Cabling",
    title: "Network Infrastructure",
    brand: "Brand-Rex",
    description:
      "Professional structured cabling products and connectivity solutions for dependable networks.",
    className: "product-network",
  },

  {
    icon: CloudCog,
    category: "Cloud Applications",
    title: "ERP on Cloud",
    brand: "Offamata",
    description:
      "Cloud-based ERP solutions designed to support and simplify business operations.",
    className: "product-cloud",
  },
];

const ProductsSection = () => {
  return (
    <section className="products-section">

      <div className="container">

        {/* HEADER */}

        <div className="products-heading">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span className="section-label">
              PRODUCTS & SOLUTIONS
            </span>

            <h2>
              Technology from
              <span> trusted solution providers.</span>
            </h2>
          </motion.div>


          <motion.div
            className="products-heading-right"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <p>
              Explore a selection of technologies and solutions supplied by
              Confitech to support networking, security, monitoring and
              enterprise operations.
            </p>

            <a href="/products" className="text-link">
              View All Products
              <ArrowUpRight size={18} />
            </a>
          </motion.div>

        </div>


        {/* PRODUCT GRID */}

        <div className="products-grid">

          {products.map((product, index) => {
            const Icon = product.icon;

            return (
              <motion.a
                href="/products"
                className={`product-card ${product.className}`}
                key={product.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >

                <div className="product-card-background"></div>

                <div className="product-card-content">

                  <div className="product-card-top">

                    <div className="product-icon">
                      <Icon size={23} strokeWidth={1.8} />
                    </div>

                    <span>{product.category}</span>

                  </div>


                  <div className="product-card-bottom">

                    <span className="product-brand">
                      {product.brand}
                    </span>

                    <h3>{product.title}</h3>

                    <p>{product.description}</p>

                    <div className="product-link">
                      Explore Solution
                      <ArrowUpRight size={18} />
                    </div>

                  </div>

                </div>

              </motion.a>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default ProductsSection;