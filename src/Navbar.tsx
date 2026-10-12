import { useState } from "react";
import Logo from "./Logo";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="ae-navbar">
      <div className="ae-nav-container">
        <Logo onClick={closeMenu} />

        <button
          className={`ae-menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`ae-nav ${menuOpen ? "open" : ""}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#courses" onClick={closeMenu}>Cursos</a>
          <a href="#methodology" onClick={closeMenu}>Metodologia</a>
          <a href="#materials" onClick={closeMenu}>Materiais</a>
          <a href="#about" onClick={closeMenu}>Sobre</a>
          <a href="#teacher" onClick={closeMenu}>Professor</a>
          <a href="#contact" className="ae-nav-button" onClick={closeMenu}>
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
