import {
  Activity,
  ShieldCheck,
  Network,
  CloudCog,
  ArrowUpRight,
} from "lucide-react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "../styles/products.css";


const products = [
  {
    icon: Activity,
    category: "Monitoring",
    title: "Environment Monitoring",
    brand: "NTI",
    description:
      "Monitoring solutions designed to help protect critical infrastructure and technology environments.",
  },

  {
    icon: ShieldCheck,
    category: "Security & Telecom",
    title: "Security & Telecom Solutions",
    brand: "Matrix Comsec",
    description:
      "Integrated security, access control and telecom solutions for modern organisations.",
  },

  {
    icon: Network,
    category: "Structured Cabling",
    title: "Network Infrastructure",
    brand: "Brand-Rex",
    description:
      "Professional structured cabling products and connectivity solutions for dependable networks.",
  },

  {
    icon: CloudCog,
    category: "Cloud Applications",
    title: "ERP on Cloud",
    brand: "Offamata",
    description:
      "Cloud-based ERP solutions designed to support and simplify business operations.",
  },
];


const ProductsSection = () => {
  return (
    <section className="products-section">

      {/* BACKGROUND DECORATION */}
      <div className="products-bg-lines" />
      <div className="products-bg-dots" />


      <div className="container products-container">

        {/* ================================================= */}
        {/* HEADER                                            */}
        {/* ================================================= */}

        <div className="products-heading">

          {/* LEFT */}

          <motion.div
            className="products-heading-left"
            initial={{
              opacity: 0,
              y: 24,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <span className="products-label">
              PRODUCTS &amp; SOLUTIONS
            </span>


            <div className="products-heading-line" />


            <h2>
              Technology from
              <span>
                <b> trusted solution</b>
              </span>
              <span>
                providers
                <b>.</b>
              </span>
            </h2>

          </motion.div>


          {/* RIGHT */}

          <motion.div
            className="products-heading-right"
            initial={{
              opacity: 0,
              y: 24,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.65,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <p>
              Explore a selection of technologies and solutions
              supplied by Confitech to support networking,
              security, monitoring and enterprise operations.
            </p>


            <Link
              to="/products"
              className="products-view-link"
            >
              View All Products

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
        {/* PRODUCT CARDS                                     */}
        {/* ================================================= */}

        <div className="products-grid">

          {products.map((product, index) => {

            const Icon = product.icon;

            return (

              <motion.article
                className="product-card"
                key={product.title}
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
                  amount: 0.18,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >

                {/* TOP */}

                <div className="product-card-top">

                  <div className="product-icon">
                    <Icon
                      size={30}
                      strokeWidth={1.7}
                    />
                  </div>


                  <div className="product-card-dots">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>

                </div>


                {/* CATEGORY */}

                <span className="product-category">
                  {product.category}
                </span>


                <div className="product-category-line" />


                {/* MAIN */}

                <div className="product-card-main">

                  <h3>
                    {product.title}
                  </h3>


                  <span className="product-brand">
                    {product.brand}
                  </span>


                  <div className="product-divider" />


                  <p>
                    {product.description}
                  </p>

                </div>


                {/* LINK */}

                <Link
                  to="/products"
                  className="product-link"
                >
                  Explore Solution

                  <span>
                    <ArrowUpRight
                      size={15}
                      strokeWidth={2}
                    />
                  </span>
                </Link>

              </motion.article>

            );
          })}

        </div>

      </div>

    </section>
  );
};


export default ProductsSection;