import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import FinalCTA from "../components/FinalCTA";

import {
  Network,
  ShieldCheck,
  Settings,
  Handshake,
} from "lucide-react";

const About = () => {
  return (
    <>
      <Navbar />

      <main>
        <PageHero
          label="ABOUT CONFITECH"
          title="Technology built around"
          highlight="business needs."
          description="Confitech delivers dependable technology infrastructure and enterprise solutions for businesses across networking, data centres, security, consulting and cloud support."
        />

        <section className="inner-section">
          <div className="container about-grid">

            <div>
              <span className="section-label">WHO WE ARE</span>

              <h2>
                Connecting businesses with
                <span> dependable technology.</span>
              </h2>
            </div>

            <div className="inner-copy">
              <p>
                Confitech brings together technology expertise across
                infrastructure, networking, security and enterprise solutions.
              </p>

              <p>
                Our approach focuses on understanding real business
                requirements and delivering practical technology environments
                designed for reliability, performance and scalability.
              </p>
            </div>

          </div>
        </section>

        <section className="inner-soft-section">
          <div className="container">

            <div className="section-center">
              <span className="section-label">OUR APPROACH</span>

              <h2>
                Built on expertise.
                <span> Focused on reliability.</span>
              </h2>
            </div>

            <div className="info-grid">

              <div className="info-card">
                <Network />
                <h3>Technology Expertise</h3>
                <p>
                  Practical experience across networking, infrastructure and
                  enterprise technology.
                </p>
              </div>

              <div className="info-card">
                <Settings />
                <h3>Practical Solutions</h3>
                <p>
                  Technology designed around actual operational and business
                  requirements.
                </p>
              </div>

              <div className="info-card">
                <ShieldCheck />
                <h3>Reliable Infrastructure</h3>
                <p>
                  Systems designed to provide dependable performance and
                  business continuity.
                </p>
              </div>

              <div className="info-card">
                <Handshake />
                <h3>Customer Focus</h3>
                <p>
                  Long-term technology relationships built around service and
                  support.
                </p>
              </div>

            </div>
          </div>
        </section>

        <FinalCTA />
      </main>

      <Footer />
    </>
  );
};

export default About;