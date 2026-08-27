import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";

import "../styles/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`site-header ${
        scrolled ? "site-header-scrolled" : ""
      }`}
    >
      <div className="container site-header-inner">

        {/* LOGO */}
        <NavLink
          to="/"
          className="site-logo"
          onClick={closeMenu}
          aria-label="Confitech Home"
        >
          <img
            src="/images/confitech-logo.png"
            alt="Confitech"
          />
        </NavLink>


        {/* NAVIGATION */}
        <nav
          className={`site-navigation ${
            menuOpen ? "is-open" : ""
          }`}
        >
          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>

          <NavLink to="/services" onClick={closeMenu}>
            Services
          </NavLink>

          <NavLink to="/products" onClick={closeMenu}>
            Products
          </NavLink>

          <NavLink to="/portfolio" onClick={closeMenu}>
            Portfolio
          </NavLink>

          <NavLink to="/partners" onClick={closeMenu}>
            Partners
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
        </nav>


        {/* ACTIONS */}
        <div className="site-header-actions">

          <NavLink
            to="/contact"
            className="site-header-cta"
            onClick={closeMenu}
          >
            Get in Touch
            <ArrowUpRight size={15} strokeWidth={2} />
          </NavLink>

          <button
            type="button"
            className="site-menu-button"
            aria-label={
              menuOpen ? "Close navigation" : "Open navigation"
            }
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? (
              <X size={23} strokeWidth={1.8} />
            ) : (
              <Menu size={23} strokeWidth={1.8} />
            )}
          </button>

        </div>

      </div>


      {/* MOBILE OVERLAY */}
      {menuOpen && (
        <button
          type="button"
          className="site-menu-overlay"
          aria-label="Close navigation"
          onClick={closeMenu}
        />
      )}

    </header>
  );
};

export default Navbar;