function Footer() {
  return (
    <footer className="ae-footer">
      <div className="ae-container">
        <div className="ae-footer-main">
          <div className="ae-footer-brand">
            <a href="#home" className="ae-logo ae-footer-logo">
              <span className="ae-logo-main">ALL</span>
              <span className="ae-logo-europe">EUROPE</span>
              <small>LANGUAGE SCHOOL</small>
            </a>

            <p>
              Learn languages.
              <br />
              Connect with the world.
            </p>
          </div>

          <div className="ae-footer-column">
            <h4>Explore</h4>
            <a href="#home">Home</a>
            <a href="#courses">Cursos</a>
            <a href="#methodology">Metodologia</a>
            <a href="#about">Sobre nós</a>
            <a href="#contact">Contato</a>
          </div>

          <div className="ae-footer-column">
            <h4>Languages</h4>
            <a href="#courses">English</a>
            <a href="#courses">Italiano</a>
            <a href="#contact">Aula experimental</a>
          </div>

          <div className="ae-footer-column ae-footer-contact">
            <h4>Get in touch</h4>
            <a href="mailto:hello@alleurope.it">hello@alleurope.it</a>
            <p>
              Online language classes
              <br />
              Brazil · Italy · Worldwide
            </p>
          </div>
        </div>

        <div className="ae-footer-bottom">
          <span>
            © {new Date().getFullYear()} ALL EUROPE. All rights reserved.
          </span>

          <div className="ae-footer-social">
            <a href="#contact">Instagram</a>
            <a href="#contact">Facebook</a>
            <a href="#contact">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
