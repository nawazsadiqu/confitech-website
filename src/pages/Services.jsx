import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import FinalCTA from "../components/FinalCTA";

import {
  Network,
  Server,
  ShieldCheck,
  BriefcaseBusiness,
  CloudCog,
} from "lucide-react";

const services = [
  {
    icon: Network,
    number: "01",
    title: "Structured Cabling",
    text: "Structured cabling, network cabling and connectivity infrastructure designed for dependable business communications.",
  },
  {
    icon: Server,
    number: "02",
    title: "Data Center Solutions",
    text: "Infrastructure products and solutions supporting secure, efficient and reliable data centre environments.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "CCTV & Access Control",
    text: "Integrated surveillance, security and access-control technologies for protecting business environments.",
  },
  {
    icon: BriefcaseBusiness,
    number: "04",
    title: "Onshore IT Consulting",
    text: "Technology consulting covering networking, operating systems, information security and infrastructure requirements.",
  },
  {
    icon: CloudCog,
    number: "05",
    title: "Cloud Support Services",
    text: "Remote infrastructure management and cloud support solutions designed to keep business systems operating smoothly.",
  },
];

const Services = () => {
  return (
    <>
      <Navbar />

      <main>
        <PageHero
          label="OUR SERVICES"
          title="Technology expertise for"
          highlight="modern infrastructure."
          description="From connectivity and data centres to security, consulting and cloud support, Confitech delivers practical technology solutions."
        />

        <section className="inner-section">
          <div className="container">

            <div className="large-services-list">

              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <div className="large-service" key={service.title}>

                    <div className="large-service-number">
                      {service.number}
                    </div>

                    <div className="large-service-icon">
                      <Icon size={28} />
                    </div>

                    <div>
                      <h2>{service.title}</h2>
                      <p>{service.text}</p>
                    </div>

                  </div>
                );
              })}

            </div>

          </div>
        </section>

        <FinalCTA />
      </main>

      <Footer />
    </>
  );
};

export default Services;