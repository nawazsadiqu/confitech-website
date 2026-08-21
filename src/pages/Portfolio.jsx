import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import FinalCTA from "../components/FinalCTA";

const projects = [
  {
    category: "Structured Cabling",
    title: "Enterprise Network Infrastructure",
    image: "/images/project-network.png",
  },
  {
    category: "CCTV & Access Control",
    title: "Security & Surveillance Infrastructure",
    image: "/images/project-security.png",
  },
  {
    category: "Data Center Solutions",
    title: "Data Centre Infrastructure",
    image: "/images/project-datacenter.png",
  },
];

const Portfolio = () => {
  return (
    <>
      <Navbar />

      <main>
        <PageHero
          label="OUR PORTFOLIO"
          title="Technology delivered in"
          highlight="real environments."
          description="A selection of technology infrastructure, networking, security and data centre solutions representing Confitech's areas of expertise."
        />

        <section className="portfolio-page-section">
          <div className="container portfolio-page-grid">

            {projects.map((project) => (
              <div className="portfolio-page-card" key={project.title}>

                <img src={project.image} alt={project.title} />

                <div className="portfolio-page-overlay"></div>

                <div className="portfolio-page-content">
                  <span>{project.category}</span>
                  <h2>{project.title}</h2>
                </div>

              </div>
            ))}

          </div>
        </section>

        <FinalCTA />
      </main>

      <Footer />
    </>
  );
};

export default Portfolio;