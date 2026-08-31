import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Cable,
  CheckCircle2,
  Network,
  Server,
} from "lucide-react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/portfolioPage.css";


const projects = [
  {
    number: "01",

    title: "OMSC",

    subtitle: "Oman Medical Simulation Centre",

    category: "STRUCTURED CABLING PROJECT",

    icon: Cable,

    image: "/images/portfolio/omsc-project.png",

    description:
      "A structured cabling deployment designed across a six-floor facility, supporting extensive network, voice and data connectivity through multiple IDFs and fibre links.",

    metrics: [
      {
        value: "580",
        label: "CAT6 Points",
      },

      {
        value: "03",
        label: "IDFs",
      },

      {
        value: "06",
        label: "Floors",
      },
    ],

    scope: [
      "Brand-Rex CAT6 Infrastructure",
      "50/125 Multimode Fibre Links",
      "Structured Voice Cabling",
      "Raised-Floor Data Centre Room",
    ],
  },


  {
    number: "02",

    title: "KOM-1 Server Room",

    subtitle: "",

    category: "SERVER ROOM PROJECT",

    icon: Server,

    image: "/images/portfolio/kom1-server-room.png",

    description:
      "A selected server-room project from Confitech's previous project portfolio, representing its experience in enterprise infrastructure environments.",

    metrics: [],

    scope: [
      "Server Room Infrastructure",
      "Enterprise Technology Environment",
      "Infrastructure Implementation",
    ],
  },


  {
    number: "03",

    title: "Borusan Logistics Office",

    subtitle: "",

    category: "ENTERPRISE PROJECT",

    icon: Building2,

    image: "/images/portfolio/borusan-logistics.png",

    description:
      "A selected enterprise technology project listed in Confitech's previous portfolio, representing its experience supporting business infrastructure environments.",

    metrics: [],

    scope: [
      "Enterprise Infrastructure",
      "Business Technology Environment",
      "Technology Implementation",
    ],
  },


  {
    number: "04",

    title: "DHL (Huawei)",

    subtitle: "",

    category: "SELECTED PROJECT",

    icon: Network,

    image: "/images/portfolio/dhl-huawei.png",

    description:
      "A selected project from Confitech's previous portfolio involving an enterprise technology environment.",

    metrics: [],

    scope: [
      "Enterprise Technology",
      "Infrastructure Environment",
      "Project Implementation",
    ],
  },
];

const CountUp = ({
  end,
  duration = 1.6,
  suffix = "",
  pad = 0,
}) => {

  const [value, setValue] = useState(0);

  const counterRef = useRef(null);

  const hasStarted = useRef(false);


  useEffect(() => {

    const element = counterRef.current;

    if (!element) return;


    const observer = new IntersectionObserver(
      ([entry]) => {

        if (
          entry.isIntersecting &&
          !hasStarted.current
        ) {

          hasStarted.current = true;

          const startTime =
            performance.now();


          const updateCounter = (currentTime) => {

            const elapsed =
              currentTime - startTime;

            const progress =
              Math.min(
                elapsed /
                  (duration * 1000),
                1
              );


            /*
             * Smooth slowdown toward
             * the final number
             */
            const easedProgress =
              1 -
              Math.pow(
                1 - progress,
                3
              );


            const currentValue =
              Math.round(
                end * easedProgress
              );


            setValue(currentValue);


            if (progress < 1) {

              requestAnimationFrame(
                updateCounter
              );

            } else {

              /*
               * Ensures exact final value
               */
              setValue(end);

            }

          };


          requestAnimationFrame(
            updateCounter
          );

        }

      },
      {
        threshold: 0.4,
      }
    );


    observer.observe(element);


    return () => {
      observer.disconnect();
    };

  }, [end, duration]);


  const displayValue =
    String(value).padStart(
      pad,
      "0"
    );


  return (
    <strong ref={counterRef}>
      {displayValue}
      {suffix}
    </strong>
  );
};

const Portfolio = () => {

  /*
   * 0 means OMSC is open when
   * the page first loads.
   *
   * Change this to null if you
   * want everything closed initially.
   */

  const [activeProject, setActiveProject] =
    useState(0);


  const handleProjectClick = (index) => {

    setActiveProject(
      activeProject === index
        ? null
        : index
    );

  };


  return (
    <>
      <Navbar />


      <main>

        {/* ================================================= */}
        {/* PORTFOLIO HEADER                                  */}
        {/* ================================================= */}

        <section
          className="portfolio-page-header"
          id="top"
        >

          <div className="container">

            <motion.div
              className="portfolio-header-content"
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              <span className="portfolio-header-label">
                PROJECTS &amp; EXPERIENCE
              </span>


              <h1>
                Technology delivered in

                <span>
                  real environments
                  <b>.</b>
                </span>
              </h1>


              <div className="portfolio-header-line" />


              <p>
                Confitech delivers practical infrastructure,
                networking and technology solutions for real
                business environments.
              </p>


              {/* OMSC PROOF NUMBERS */}

              <div className="portfolio-header-metrics">

  <div>

    <CountUp
      end={580}
      duration={1.8}
      suffix="+"
    />

    <span>
      CAT6 POINTS
    </span>

  </div>


  <i />


  <div>

    <CountUp
      end={3}
      duration={1.35}
      pad={2}
    />

    <span>
      IDFs
    </span>

  </div>


  <i />


  <div>

    <CountUp
      end={6}
      duration={1.5}
      pad={2}
    />

    <span>
      FLOORS
    </span>

  </div>

</div>

            </motion.div>

          </div>

        </section>



        {/* ================================================= */}
        {/* SELECTED EXPERIENCE                               */}
        {/* ================================================= */}

        <section className="portfolio-selected-section">

          <div className="container">

            <motion.div
              className="portfolio-selected-heading"
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
              }}
              transition={{
                duration: 0.55,
              }}
            >

              <span>
                SELECTED EXPERIENCE
              </span>


              <p>
                Select a project to explore its
                experience and available project details.
              </p>

            </motion.div>



            {/* ================================================= */}
            {/* ACCORDION                                         */}
            {/* ================================================= */}

            <div className="portfolio-accordion">

              {projects.map((project, index) => {

                const Icon = project.icon;

                const isActive =
                  activeProject === index;


                return (

                  <motion.div
                    className={`portfolio-accordion-item ${
                      isActive
                        ? "is-active"
                        : ""
                    }`}
                    key={project.title}
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.15,
                    }}
                    transition={{
                      duration: 0.45,
                      delay:
                        index * 0.05,
                    }}
                  >

                    {/* ========================================= */}
                    {/* PROJECT ROW                               */}
                    {/* ========================================= */}

                    <button
                      type="button"
                      className="portfolio-accordion-trigger"
                      onClick={() =>
                        handleProjectClick(index)
                      }
                      aria-expanded={isActive}
                    >

                      <span className="portfolio-accordion-number">
                        {project.number}
                      </span>


                      <span className="portfolio-row-divider" />


                      <span className="portfolio-accordion-title">

                        <strong>
                          {project.title}
                        </strong>

                      </span>


                      <span className="portfolio-accordion-category">
                        {project.category}
                      </span>


                      <span
                        className={`portfolio-accordion-arrow ${
                          isActive
                            ? "is-open"
                            : ""
                        }`}
                      >

                        <ArrowRight
                          size={18}
                          strokeWidth={1.8}
                        />

                      </span>

                    </button>



                    {/* ========================================= */}
                    {/* EXPANDED PROJECT                          */}
                    {/* ========================================= */}

                    <AnimatePresence initial={false}>

                      {isActive && (

                        <motion.div
                          className="portfolio-project-expand-wrap"
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.48,
                            ease: [
                              0.22,
                              1,
                              0.36,
                              1,
                            ],
                          }}
                        >

                          <div className="portfolio-project-expanded">

                            {/* IMAGE */}

                            <div className="portfolio-expanded-image">

                              <img
                                src={project.image}
                                alt={project.title}
                              />

                              <div className="portfolio-expanded-image-overlay" />


                              <span>
                                {project.number}
                              </span>

                            </div>



                            {/* PROJECT CONTENT */}

                            <div className="portfolio-expanded-content">

                              <div className="portfolio-expanded-title-row">

                                <div>

                                  <span className="portfolio-expanded-category">
                                    {project.category}
                                  </span>


                                  <h2>
                                    {project.title}
                                  </h2>


                                  {project.subtitle && (

                                    <h3>
                                      {project.subtitle}
                                    </h3>

                                  )}

                                </div>


                                <div className="portfolio-expanded-icon">

                                  <Icon
                                    size={24}
                                    strokeWidth={1.7}
                                  />

                                </div>

                              </div>


                              <div className="portfolio-expanded-line" />


                              <p className="portfolio-expanded-description">
                                {project.description}
                              </p>



                              {/* METRICS - ONLY WHERE AVAILABLE */}

                              {project.metrics.length > 0 && (

                                <div className="portfolio-expanded-metrics">

                                  {project.metrics.map(
                                    (metric) => (

                                      <div
                                        key={
                                          metric.label
                                        }
                                      >

                                        <strong>
                                          {metric.value}
                                        </strong>


                                        <span>
                                          {metric.label}
                                        </span>

                                      </div>

                                    )
                                  )}

                                </div>

                              )}



                              {/* SCOPE */}

                              <div className="portfolio-expanded-scope">

                                {project.scope.map(
                                  (item) => (

                                    <div key={item}>

                                      <CheckCircle2
                                        size={14}
                                        strokeWidth={2}
                                      />

                                      <span>
                                        {item}
                                      </span>

                                    </div>

                                  )
                                )}

                              </div>



                              <Link
                                to="/contact"
                                className="portfolio-expanded-button"
                              >

                                Discuss a Similar Project

                                <ArrowUpRight
                                  size={17}
                                  strokeWidth={1.8}
                                />

                              </Link>

                            </div>

                          </div>

                        </motion.div>

                      )}

                    </AnimatePresence>

                  </motion.div>

                );
              })}

            </div>

          </div>

        </section>



        {/* ================================================= */}
        {/* PORTFOLIO CTA                                     */}
        {/* ================================================= */}

        <section className="portfolio-compact-cta">

          <div className="portfolio-cta-wave" />


          <div className="container portfolio-compact-cta-inner">

            <div>

              <span>
                HAVE A PROJECT IN MIND?
              </span>


              <h2>
                Let&apos;s build the right
                <b> technology environment.</b>
              </h2>

            </div>


            <Link
              to="/contact"
              className="portfolio-compact-cta-button"
            >
              Get In Touch

              <ArrowRight
                size={16}
              />
            </Link>

          </div>

        </section>

      </main>


      <Footer />

    </>
  );
};


export default Portfolio;