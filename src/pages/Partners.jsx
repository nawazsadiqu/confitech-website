import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import FinalCTA from "../components/FinalCTA";

const partners = [
  {
    name: "NTI",
    area: "Environment Monitoring",
  },
  {
    name: "Brand-Rex",
    area: "Structured Cabling",
  },
  {
    name: "Matrix Comsec",
    area: "Security & Telecom",
  },
  {
    name: "Offamata",
    area: "ERP on Cloud",
  },
];

const Partners = () => {
  return (
    <>
      <Navbar />

      <main>
        <PageHero
          label="TECHNOLOGY PARTNERS"
          title="Working with"
          highlight="trusted technologies."
          description="Confitech works with technology brands and solution platforms supporting infrastructure, networking, monitoring and enterprise systems."
        />

        <section className="inner-section">
          <div className="container">

            <div className="partner-page-grid">

              {partners.map((partner, index) => (
                <div className="partner-page-card" key={partner.name}>

                  <span className="partner-page-number">
                    0{index + 1}
                  </span>

                  <div>
                    <span className="section-label">
                      {partner.area}
                    </span>

                    <h2>{partner.name}</h2>
                  </div>

                </div>
              ))}

            </div>

          </div>
        </section>

        <FinalCTA />
      </main>

      <Footer />
    </>
  );
};

export default Partners;