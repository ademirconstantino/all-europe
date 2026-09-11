import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  return (
    <div className="ae-app">
      <Navbar />

      <main>
        <section className="ae-hero" id="home">
          <div className="ae-hero-overlay" />
          <div className="ae-container ae-hero-content">
            <motion.div
              className="ae-hero-copy"
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="ae-eyebrow">
                LANGUAGE SCHOOL · ENGLISH & ITALIAN
              </span>

              <h1>
                Speak the world.
                <br />
                <span>Live Europe.</span>
              </h1>

              <p>
                Aprenda Inglês e Italiano de forma prática, natural e
                personalizada. Mais do que estudar um idioma, prepare-se
                para viver novas experiências.
              </p>

              <div className="ae-hero-buttons">
                <a href="#courses" className="ae-btn ae-btn-primary">
                  Conheça nossos cursos
                </a>
                <a href="#contact" className="ae-btn ae-btn-outline">
                  Aula experimental
                </a>
              </div>
            </motion.div>

            <motion.div
              className="ae-hero-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <strong>EN</strong>
              <span>+</span>
              <strong>IT</strong>
              <small>Learn · Connect · Go further</small>
            </motion.div>
          </div>

          <div className="ae-scroll">
            <span>SCROLL</span>
            <i />
          </div>
        </section>

        <section className="ae-section ae-intro" id="about">
          <div className="ae-container ae-two-columns">
            <motion.div
              className="ae-section-heading"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="ae-label">ALL EUROPE</span>
              <h2>
                Idiomas que
                <br />
                <em>abrem caminhos.</em>
              </h2>
            </motion.div>

            <motion.div
              className="ae-intro-text"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p>
                Na ALL EUROPE, acreditamos que aprender um idioma é muito
                mais do que memorizar palavras e regras gramaticais.
              </p>
              <p>
                É desenvolver confiança para conversar, viajar, estudar,
                trabalhar e criar novas conexões com pessoas e culturas
                do mundo inteiro.
              </p>
              <a href="#methodology" className="ae-text-link">
                Conheça nossa metodologia →
              </a>
            </motion.div>
          </div>
        </section>

        <section className="ae-section ae-languages" id="courses">
          <div className="ae-container">
            <div className="ae-centered-heading">
              <span className="ae-label">CHOOSE YOUR LANGUAGE</span>
              <h2>
                Dois idiomas.
                <br />
                <em>Infinitas possibilidades.</em>
              </h2>
              <p>Escolha seu próximo idioma e comece uma nova jornada.</p>
            </div>

            <div className="ae-language-grid">
              <motion.article
                className="ae-language-card ae-english"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="ae-card-number">01</div>
                <div className="ae-flag">🇬🇧</div>
                <span className="ae-card-label">ENGLISH</span>
                <h3>
                  English
                  <br />
                  <em>for your world.</em>
                </h3>
                <p>
                  Inglês para conversação, viagens, carreira, estudos e
                  comunicação internacional.
                </p>
                <a href="#contact" className="ae-card-link">
                  Comece seu inglês →
                </a>
              </motion.article>

              <motion.article
                className="ae-language-card ae-italian"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
              >
                <div className="ae-card-number">02</div>
                <div className="ae-flag">🇮🇹</div>
                <span className="ae-card-label">ITALIANO</span>
                <h3>
                  Italiano
                  <br />
                  <em>per la tua vita.</em>
                </h3>
                <p>
                  Italiano para viagens, cidadania, trabalho, estudos,
                  cultura e conversação.
                </p>
                <a href="#contact" className="ae-card-link">
                  Inizia il tuo italiano →
                </a>
              </motion.article>
            </div>
          </div>
        </section>

        <section className="ae-section ae-method" id="methodology">
          <div className="ae-container">
            <div className="ae-centered-heading ae-light-heading">
              <span className="ae-label">OUR METHOD</span>
              <h2>
                Aprender pode ser
                <br />
                <em>simples.</em>
              </h2>
              <p>
                Uma abordagem prática, humana e focada na comunicação.
              </p>
            </div>

            <div className="ae-method-grid">
              <div className="ae-method-item">
                <span>01</span>
                <div>
                  <h3>Speak</h3>
                  <p>
                    Pratique desde o primeiro dia e desenvolva confiança
                    para falar.
                  </p>
                </div>
              </div>
              <div className="ae-method-item">
                <span>02</span>
                <div>
                  <h3>Connect</h3>
                  <p>
                    Aprenda através de situações reais e contextos
                    culturais.
                  </p>
                </div>
              </div>
              <div className="ae-method-item">
                <span>03</span>
                <div>
                  <h3>Progress</h3>
                  <p>
                    Evolua com objetivos claros e acompanhamento
                    personalizado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ae-section ae-why">
          <div className="ae-container">
            <div className="ae-centered-heading">
              <span className="ae-label">WHY ALL EUROPE</span>
              <h2>
                Mais que uma
                <br />
                <em>escola de idiomas.</em>
              </h2>
            </div>

            <div className="ae-features">
              <div className="ae-feature">
                <div className="ae-feature-icon">01</div>
                <h3>Personalização</h3>
                <p>Conteúdo e ritmo adaptados aos seus objetivos.</p>
              </div>
              <div className="ae-feature">
                <div className="ae-feature-icon">02</div>
                <h3>Conversação</h3>
                <p>O foco está em usar o idioma, não apenas estudá-lo.</p>
              </div>
              <div className="ae-feature">
                <div className="ae-feature-icon">03</div>
                <h3>Cultura</h3>
                <p>Idioma e cultura caminham juntos em nossa metodologia.</p>
              </div>
              <div className="ae-feature">
                <div className="ae-feature-icon">04</div>
                <h3>Flexibilidade</h3>
                <p>Uma experiência pensada para acompanhar sua rotina.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="ae-cta" id="contact">
          <div className="ae-container ae-cta-inner">
            <div>
              <span className="ae-label">YOUR JOURNEY STARTS HERE</span>
              <h2>
                Pronto para dar
                <br />
                o próximo passo?
              </h2>
            </div>
            <a
              className="ae-btn ae-btn-light"
              href="mailto:hello@alleurope.it?subject=Aula%20experimental%20ALL%20EUROPE"
            >
              Fale conosco →
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
