import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import FinalCTA from "../components/FinalCTA";

const products = [
  {
    brand: "NTI",
    title: "Environment Monitoring",
    image: "/images/product-environment-monitoring.png",
    text: "Monitoring technologies for temperature, humidity, power, environmental conditions and critical infrastructure.",
  },
  {
    brand: "Matrix Comsec",
    title: "Security & Telecom Solutions",
    image: "/images/product-security.png",
    text: "Integrated CCTV, access-control, communication and enterprise security technologies.",
  },
  {
    brand: "Brand-Rex",
    title: "Structured Cabling",
    image: "/images/product-network.png",
    text: "Network connectivity and structured cabling solutions designed for reliable infrastructure.",
  },
  {
    brand: "Offamata",
    title: "ERP on Cloud",
    image: "/images/product-cloud.png",
    text: "Cloud-based ERP solutions supporting efficient and connected business operations.",
  },
];

const Products = () => {
  return (
    <>
      <Navbar />

      <main>
        <PageHero
          label="PRODUCTS & SOLUTIONS"
          title="Technology designed to"
          highlight="solve real challenges."
          description="Explore the technologies and solution platforms offered by Confitech across monitoring, networking, security and enterprise applications."
        />

        <section className="inner-section">
          <div className="container products-page-grid">

            {products.map((product) => (
              <div className="products-page-card" key={product.title}>

                <div
                  className="products-page-image"
                  style={{
                    backgroundImage: `url(${product.image})`,
                  }}
                ></div>

                <div className="products-page-content">

                  <span>{product.brand}</span>

                  <h2>{product.title}</h2>

                  <p>{product.text}</p>

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

export default Products;