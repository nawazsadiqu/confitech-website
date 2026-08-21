import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container navbar-container">
        
        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brand-text">
            Confi<span>tech</span>
          </span>
        </Link>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          <Link to="/about" onClick={closeMenu}>
            About
          </Link>

          <Link to="/services" onClick={closeMenu}>
            Services
          </Link>

          <Link to="/products" onClick={closeMenu}>
            Products
          </Link>

          <Link to="/portfolio" onClick={closeMenu}>
            Portfolio
          </Link>

          <Link to="/partners" onClick={closeMenu}>
            Partners
          </Link>

          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </nav>

        <div className="navbar-actions">
          <Link to="/contact" className="navbar-cta">
            Get in Touch
            <ArrowUpRight size={17} />
          </Link>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;