
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Education", "#education"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
  ];

  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        Sahil<span>.</span>
      </a>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        {links.map(([label, href]) => (
          <a
            key={label}
            href={href}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        ))}
      </div>

      <a href="#contact" className="nav-button">
        Let's Talk
      </a>
    </nav>
  );
}

export default Navbar;
