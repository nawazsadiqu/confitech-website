import {
  ArrowRight,
  ArrowUpRight,
  Handshake,
  Headphones,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/contactPage.css";


const supportPoints = [
  {
    icon: UsersRound,
    title: "Expert Guidance",
    text:
      "Our team helps you choose the right technology solution for your business.",
  },

  {
    icon: ShieldCheck,
    title: "Reliable Support",
    text:
      "We are with you from consultation to implementation and beyond.",
  },

  {
    icon: Handshake,
    title: "Long-Term Partnership",
    text:
      "Building dependable technology relationships that grow with your business.",
  },
];


const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };


  return (
    <>
      <Navbar />


      <main>

        {/* ================================================= */}
        {/* CONTACT HEADER                                    */}
        {/* ================================================= */}

        <section
          className="contact-page-header"
          id="top"
        >

          <div className="container contact-page-header-container">

            {/* LEFT */}

            <motion.div
              className="contact-page-header-content"
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              <span className="contact-page-label">
                CONTACT CONFITECH
              </span>


              <div className="contact-page-label-line" />


              <h1>
                Let&apos;s discuss your

                <span>
                  technology
                  <b> requirements.</b>
                </span>
              </h1>


              <p>
                Get in touch with Confitech for networking,
                infrastructure, data centre, security and
                enterprise technology requirements.
              </p>

            </motion.div>


            {/* RIGHT SUPPORT POINTS */}

            <motion.div
              className="contact-page-support"
              initial={{
                opacity: 0,
                x: 25,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.75,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              {supportPoints.map((point) => {

                const Icon = point.icon;


                return (
                  <div
                    className="contact-support-item"
                    key={point.title}
                  >

                    <div className="contact-support-icon">

                      <Icon
                        size={23}
                        strokeWidth={1.7}
                      />

                    </div>


                    <div>

                      <strong>
                        {point.title}
                      </strong>


                      <p>
                        {point.text}
                      </p>

                    </div>

                  </div>
                );
              })}

            </motion.div>

          </div>

        </section>



        {/* ================================================= */}
        {/* CONTACT BODY                                      */}
        {/* ================================================= */}

        <section className="contact-page-section">

          <div className="container contact-page-grid">

            {/* ================================================= */}
            {/* CONTACT INFORMATION                               */}
            {/* ================================================= */}

            <motion.div
              className="contact-information-panel"
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
              }}
            >

              <span className="contact-section-label">
                GET IN TOUCH
              </span>


              <div className="contact-section-line" />


              <h2>
                Start a conversation
                <span>
                  with our team
                  <b>.</b>
                </span>
              </h2>


              <p className="contact-information-description">
                Tell us about your technology or infrastructure
                requirement and our team will help you identify
                the right solution.
              </p>



              {/* CONTACT LIST */}

              <div className="contact-info-list">

                {/* PHONE */}

                <a
                  href="tel:+96824613022"
                  className="contact-info-row"
                >

                  <div className="contact-info-icon">

                    <Phone
                      size={21}
                      strokeWidth={1.7}
                    />

                  </div>


                  <div className="contact-info-content">

                    <span>
                      Phone
                    </span>


                    <strong>
                      +968 24613022
                    </strong>

                  </div>


                  <ArrowRight
                    className="contact-info-arrow"
                    size={18}
                  />

                </a>



                {/* EMAIL */}

                <a
                  href="mailto:contact@confitech.co"
                  className="contact-info-row"
                >

                  <div className="contact-info-icon">

                    <Mail
                      size={21}
                      strokeWidth={1.7}
                    />

                  </div>


                  <div className="contact-info-content">

                    <span>
                      Email
                    </span>


                    <strong>
                      contact@confitech.co
                    </strong>

                  </div>


                  <ArrowRight
                    className="contact-info-arrow"
                    size={18}
                  />

                </a>



                {/* ADDRESS */}

                <a
                  href="https://maps.google.com/?q=Azaiba,Oman"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-info-row"
                >

                  <div className="contact-info-icon">

                    <MapPin
                      size={21}
                      strokeWidth={1.7}
                    />

                  </div>


                  <div className="contact-info-content">

                    <span>
                      Office
                    </span>


                    <strong>
                      P.O. Box 2416, P.C 130
                      <br />
                      Azaiba, Sultanate of Oman
                    </strong>

                  </div>


                  <ArrowRight
                    className="contact-info-arrow"
                    size={18}
                  />

                </a>

              </div>

            </motion.div>



            {/* ================================================= */}
            {/* CONTACT FORM                                      */}
            {/* ================================================= */}

            <motion.div
              className="contact-form-panel"
              initial={{
                opacity: 0,
                y: 25,
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
                duration: 0.6,
                delay: 0.08,
              }}
            >

              <h2>
                Tell us about your requirement
              </h2>


              <div className="contact-form-heading-line" />


              <form onSubmit={handleSubmit}>

                {/* ROW 01 */}

                <div className="contact-form-row">

                  <div className="contact-form-field">

                    <label htmlFor="contact-name">
                      Name
                    </label>


                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Your name"
                      required
                    />

                  </div>


                  <div className="contact-form-field">

                    <label htmlFor="contact-company">
                      Company
                    </label>


                    <input
                      id="contact-company"
                      type="text"
                      placeholder="Company name"
                    />

                  </div>

                </div>



                {/* ROW 02 */}

                <div className="contact-form-row">

                  <div className="contact-form-field">

                    <label htmlFor="contact-email">
                      Email
                    </label>


                    <input
                      id="contact-email"
                      type="email"
                      placeholder="Email address"
                      required
                    />

                  </div>


                  <div className="contact-form-field">

                    <label htmlFor="contact-phone">
                      Phone
                    </label>


                    <input
                      id="contact-phone"
                      type="tel"
                      placeholder="Phone number"
                    />

                  </div>

                </div>



                {/* SERVICE */}

                <div className="contact-form-field">

                  <label htmlFor="contact-service">
                    Interested In
                  </label>


                  <select
                    id="contact-service"
                    defaultValue=""
                  >

                    <option
                      value=""
                      disabled
                    >
                      Select a service
                    </option>

                    <option value="structured-cabling">
                      Structured Cabling
                    </option>

                    <option value="data-center">
                      Data Center Solutions
                    </option>

                    <option value="security">
                      CCTV &amp; Access Control
                    </option>

                    <option value="consulting">
                      Onshore IT Consulting
                    </option>

                    <option value="cloud-support">
                      Cloud Support Services
                    </option>

                  </select>

                </div>



                {/* MESSAGE */}

                <div className="contact-form-field">

                  <label htmlFor="contact-message">
                    Message
                  </label>


                  <textarea
                    id="contact-message"
                    rows="6"
                    placeholder="Tell us about your requirement..."
                    required
                  />

                </div>



                {/* SUBMIT */}

                <button
                  type="submit"
                  className="contact-submit-button"
                >

                  <Send
                    size={16}
                    strokeWidth={1.8}
                  />

                  Submit Enquiry

                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.8}
                  />

                </button>

              </form>

            </motion.div>

          </div>

        </section>



        {/* ================================================= */}
        {/* SUPPORT CTA                                       */}
        {/* ================================================= */}

        <section className="contact-support-cta">

          <div className="contact-support-cta-wave" />


          <div className="container contact-support-cta-inner">

            {/* ICON */}

            <div className="contact-support-cta-message-icon">

              <MessageCircleIcon />

            </div>


            {/* TEXT */}

            <div className="contact-support-cta-content">

              <h2>
                Need help choosing the right solution?
              </h2>


              <p>
                Our experts are ready to understand your challenges
                and recommend the best-fit technology for your business.
              </p>

            </div>


            {/* DIVIDER */}

            <div className="contact-support-cta-divider" />


            {/* PHONE */}

            <div className="contact-support-cta-phone">

              <Headphones
                size={31}
                strokeWidth={1.6}
              />


              <div>

                <span>
                  Call us directly
                </span>


                <a href="tel:+96824613022">
                  +968 24613022
                </a>

              </div>

            </div>

          </div>

        </section>

      </main>


      <Footer />

    </>
  );
};


/* Simple message icon wrapper */

const MessageCircleIcon = () => {
  return (
    <div className="contact-message-symbol">
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};


export default Contact;