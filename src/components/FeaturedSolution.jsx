import {
  ArrowUpRight,
  Server,
  Check,
} from "lucide-react";

import { motion } from "framer-motion";

const FeaturedSolution = () => {
  return (
    <section className="featured-solution">

      <div className="container">

        <motion.div
          className="featured-wrapper"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >

          {/* ============================= */}
          {/* LEFT VISUAL                   */}
          {/* ============================= */}

          <div className="featured-visual">

            <div className="featured-image-overlay"></div>

            <div className="featured-visual-label">
              <span className="featured-dot"></span>
              Enterprise Infrastructure
            </div>

            <div className="featured-floating-box">

              <Server size={25} />

              <div>
                <strong>
                  Reliable Infrastructure
                </strong>

                <span>
                  Designed for modern business
                </span>
              </div>

            </div>

          </div>


          {/* ============================= */}
          {/* RIGHT CONTENT                 */}
          {/* ============================= */}

          <div className="featured-content">

            <span className="section-label">
              FEATURED SOLUTION
            </span>


            <h2>
              Infrastructure designed for
              <span> performance and reliability.</span>
            </h2>


            <p className="featured-description">
              From structured networks to secure data environments,
              Confitech delivers infrastructure solutions designed to
              support business operations today and scale with future
              requirements.
            </p>


            {/* ============================= */}
            {/* FEATURED MINI CARDS           */}
            {/* ============================= */}

            <div className="featured-points">


              {/* CARD 01 */}

              <div className="featured-point">

                <div className="featured-point-image">

                  <img
                    src="/images/scalable-infrastructure.png"
                    alt="Scalable IT infrastructure"
                  />

                </div>


                <div className="featured-point-content">

                  <div className="featured-point-title">

                    <div className="featured-check">
                      <Check size={14} />
                    </div>

                    <strong>
                      Scalable Infrastructure
                    </strong>

                  </div>


                  <span>
                    Built around current requirements with room
                    for future growth.
                  </span>

                </div>

              </div>


              {/* CARD 02 */}

              <div className="featured-point">

                <div className="featured-point-image">

                  <img
                    src="/images/reliable-connectivity.png"
                    alt="Reliable network connectivity"
                  />

                </div>


                <div className="featured-point-content">

                  <div className="featured-point-title">

                    <div className="featured-check">
                      <Check size={14} />
                    </div>

                    <strong>
                      Reliable Connectivity
                    </strong>

                  </div>


                  <span>
                    Structured networking designed for
                    consistent performance.
                  </span>

                </div>

              </div>


              {/* CARD 03 */}

              <div className="featured-point">

                <div className="featured-point-image">

                  <img
                    src="/images/secure-environment.png"
                    alt="Secure technology environment"
                  />

                </div>


                <div className="featured-point-content">

                  <div className="featured-point-title">

                    <div className="featured-check">
                      <Check size={14} />
                    </div>

                    <strong>
                      Secure Technology Environment
                    </strong>

                  </div>


                  <span>
                    Integrated infrastructure, monitoring
                    and security solutions.
                  </span>

                </div>

              </div>

            </div>


            {/* ============================= */}
            {/* CTA                           */}
            {/* ============================= */}

            <a
              href="/services"
              className="featured-button"
            >
              Explore Infrastructure Solutions

              <ArrowUpRight size={18} />
            </a>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default FeaturedSolution;