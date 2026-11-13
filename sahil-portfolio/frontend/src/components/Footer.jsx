
function Footer() {
  return (
    <footer className="footer">

      <a href="#home" className="logo">
        Sahil<span>.</span>
      </a>

      <p>Designed & built by Sahil Saha</p>

      <p>
        © {new Date().getFullYear()} All rights reserved.
      </p>

    </footer>
  );
}

export default Footer;
