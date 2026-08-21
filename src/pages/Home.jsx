import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CompanyIntro from "../components/CompanyIntro";
import ServicesSection from "../components/ServicesSection";
import FeaturedSolution from "../components/FeaturedSolution";
import ProductsSection from "../components/ProductsSection";
import WhyConfitech from "../components/WhyConfitech";
import PortfolioSection from "../components/PortfolioSection";
import Footer from "../components/Footer";
import FinalCTA from "../components/FinalCTA";
import PartnersSection from "../components/PartnersSection";

const Home = () => {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <CompanyIntro />
        <ServicesSection />
        <FeaturedSolution />
        <ProductsSection />
        <WhyConfitech />
        <PortfolioSection />
        <PartnersSection />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
};

export default Home;