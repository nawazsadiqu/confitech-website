import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const Contact = () => {
  return (
    <>
      <Navbar />

      <main>
        <PageHero
          label="CONTACT CONFITECH"
          title="Let's discuss your"
          highlight="technology requirements."
          description="Get in touch with Confitech for networking, infrastructure, data centre, security and enterprise technology requirements."
        />

        <section className="contact-page">
          <div className="container contact-page-grid">

            <div className="contact-information">

              <span className="section-label">
                GET IN TOUCH
              </span>

              <h2>
                Start a conversation with
                <span> our team.</span>
              </h2>

              <p>
                Tell us about your technology or infrastructure requirement
                and our team will help you identify the right solution.
              </p>


              <div className="contact-info-list">

                <a href="tel:+96824613022">
                  <div className="contact-icon">
                    <Phone size={21} />
                  </div>

                  <div>
                    <span>Phone</span>
                    <strong>+968 24613022</strong>
                  </div>
                </a>


                <a href="mailto:contact@confitech.co">
                  <div className="contact-icon">
                    <Mail size={21} />
                  </div>

                  <div>
                    <span>Email</span>
                    <strong>contact@confitech.co</strong>
                  </div>
                </a>


                <div className="contact-info-item">
                  <div className="contact-icon">
                    <MapPin size={21} />
                  </div>

                  <div>
                    <span>Office</span>

                    <strong>
                      P.O. Box 2416, P.C 130
                      <br />
                      Azaiba, Sultanate of Oman
                    </strong>
                  </div>
                </div>

              </div>

            </div>


            <div className="contact-form-card">

              <h3>Tell us about your requirement</h3>

              <form>

                <div className="form-row">
                  <div>
                    <label>Name</label>
                    <input type="text" placeholder="Your name" />
                  </div>

                  <div>
                    <label>Company</label>
                    <input type="text" placeholder="Company name" />
                  </div>
                </div>


                <div className="form-row">
                  <div>
                    <label>Email</label>
                    <input type="email" placeholder="Email address" />
                  </div>

                  <div>
                    <label>Phone</label>
                    <input type="tel" placeholder="Phone number" />
                  </div>
                </div>


                <div>
                  <label>Interested In</label>

                  <select>
                    <option>Select a service</option>
                    <option>Structured Cabling</option>
                    <option>Data Center Solutions</option>
                    <option>CCTV & Access Control</option>
                    <option>IT Consulting</option>
                    <option>Cloud Support</option>
                  </select>
                </div>


                <div>
                  <label>Message</label>

                  <textarea
                    rows="6"
                    placeholder="Tell us about your requirement..."
                  ></textarea>
                </div>


                <button type="button" className="contact-submit">
                  Submit Enquiry
                </button>

              </form>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
};

export default Contact;