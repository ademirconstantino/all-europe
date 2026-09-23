import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LessonPackages from "./LessonPackages";

function App() {
  return (
    <div className="ae-app">
      <Navbar />

      <main>
        {/* HERO */}
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
                PRIVATE LESSONS · ENGLISH · ITALIAN · PORTUGUESE
              </span>

              <h1>
                Speak the world.
                <br />
                <span>Live Europe.</span>
              </h1>

              <p>
                <strong>
                  Aulas particulares de Inglês, Italiano e Português.
                </strong>{" "}
                Aulas individuais, online e personalizadas para você
                aprender no seu ritmo e alcançar seus objetivos.
              </p>

              <div className="ae-hero-buttons">
                <a href="#courses" className="ae-btn ae-btn-primary">
                  Conheça as aulas particulares
                </a>

                <a href="#contact" className="ae-btn ae-btn-outline">
                  Entre em contato
                </a>
              </div>
            </motion.div>

            <motion.div
              className="ae-hero-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <strong>1</strong>
              <span>×</span>
              <strong>1</strong>
              <small>Private · Personal · Online</small>
            </motion.div>
          </div>

          <div className="ae-scroll">
            <span>SCROLL</span>
            <i />
          </div>
        </section>

        {/* INTRO */}
        <section className="ae-section ae-intro" id="about">
          <div className="ae-container ae-two-columns">
            <motion.div
              className="ae-section-heading"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="ae-label">AULAS PARTICULARES</span>

              <h2>
                Um idioma
                <br />
                <em>feito para você.</em>
              </h2>
            </motion.div>

            <motion.div
              className="ae-intro-text"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p>
                Na ALL EUROPE, você não entra em uma turma. Você tem
                <strong> aulas particulares e individuais</strong>,
                adaptadas ao seu nível, objetivos e ritmo de aprendizagem.
              </p>

              <p>
                As aulas são voltadas para quem deseja aprender Inglês,
                Italiano ou Português para conversar, viajar, estudar,
                trabalhar, obter uma certificação ou viver uma experiência
                internacional.
              </p>

              <a href="#methodology" className="ae-text-link">
                Conheça nossa metodologia →
              </a>
            </motion.div>
          </div>
        </section>

        {/* LANGUAGES */}
        <section className="ae-section ae-languages" id="courses">
          <div className="ae-container">
            <div className="ae-centered-heading">
              <span className="ae-label">
                AULAS PARTICULARES · 1-TO-1
              </span>

              <h2>
                Escolha seu idioma.
                <br />
                <em>Aprenda individualmente.</em>
              </h2>

              <p>
                Aulas particulares de Inglês, Italiano e Português, online e
                personalizadas para suas necessidades.
              </p>
            </div>

            <div className="ae-language-grid">
              {/* ENGLISH */}
              <motion.article
                className="ae-language-card ae-english"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="ae-card-number">01</div>

                <div className="ae-flag">🇬🇧</div>

                <span className="ae-card-label">
                  PRIVATE ENGLISH LESSONS
                </span>

                <h3>
                  English
                  <br />
                  <em>for your world.</em>
                </h3>

                <p>
                  <strong>Aulas particulares de Inglês</strong> para
                  conversação, viagens, carreira, estudos e comunicação
                  internacional.
                </p>

                <a href="#contact" className="ae-card-link">
                  Quero aprender Inglês →
                </a>
              </motion.article>

              {/* ITALIAN */}
              <motion.article
                className="ae-language-card ae-italian"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
              >
                <div className="ae-card-number">02</div>

                <div className="ae-flag">🇮🇹</div>

                <span className="ae-card-label">
                  LEZIONI PRIVATE DI ITALIANO
                </span>

                <h3>
                  Italiano
                  <br />
                  <em>per la tua vita.</em>
                </h3>

                <p>
                  <strong>Lezioni private di italiano</strong> para
                  viagens, cidadania, trabalho, estudos, cultura e
                  conversação.
                </p>

                <a href="#contact" className="ae-card-link">
                  Inizia il tuo italiano →
                </a>
              </motion.article>

                  {/* PORTUGUESE */}
              <motion.article
                className="ae-language-card ae-english"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="ae-card-number">03</div>

                    <div className="ae-flag">🇧🇷</div>

                    <span className="ae-card-label">
                      AULAS PARTICULARES DE PORTUGUÊS
                    </span>

                    <h3>
                      Português
                      <br />
                      <em>para sua vida.</em>
                    </h3>

                    <p>
                      <strong>Aulas particulares de Português</strong> para
                      conversação, escrita, viagens, estudos, trabalho e
                      comunicação.
                    </p>

                    <a href="#contact" className="ae-card-link">
                      Quero aprender Português →
                    </a>
                  </motion.article>
            </div>
          </div>
        </section>

        <LessonPackages />

        {/* METHODOLOGY */}
        <section className="ae-section ae-method" id="methodology">
          <div className="ae-container">
            <div className="ae-centered-heading ae-light-heading">
              <span className="ae-label">
                METODOLOGIA · AULAS INDIVIDUAIS
              </span>

              <h2>
                Aprender pode ser
                <br />
                <em>simples.</em>
              </h2>

              <p>
                Uma abordagem prática, humana e focada na comunicação,
                totalmente adaptada a cada aluno.
              </p>
            </div>

            <div className="ae-method-grid">
              <div className="ae-method-item">
                <span>01</span>

                <div>
                  <h3>Speak</h3>

                  <p>
                    Pratique desde o primeiro dia e desenvolva confiança
                    para falar o idioma em situações reais.
                  </p>
                </div>
              </div>

              <div className="ae-method-item">
                <span>02</span>

                <div>
                  <h3>Connect</h3>

                  <p>
                    Aprenda através de situações reais, conversação e
                    contextos culturais.
                  </p>
                </div>
              </div>

              <div className="ae-method-item">
                <span>03</span>

                <div>
                  <h3>Progress</h3>

                  <p>
                    Evolua com objetivos claros e acompanhamento
                    individual durante as aulas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className="ae-section ae-why">
          <div className="ae-container">
            <div className="ae-centered-heading">
              <span className="ae-label">
                POR QUE AULAS PARTICULARES?
              </span>

              <h2>
                Seu aprendizado.
                <br />
                <em>Seu ritmo.</em>
              </h2>
            </div>

            <div className="ae-features">
              <div className="ae-feature">
                <div className="ae-feature-icon">01</div>

                <h3>100% Individual</h3>

                <p>
                  Você tem a atenção do professor durante toda a aula.
                </p>
              </div>

              <div className="ae-feature">
                <div className="ae-feature-icon">02</div>

                <h3>Personalização</h3>

                <p>
                  Conteúdo e ritmo adaptados aos seus objetivos.
                </p>
              </div>

              <div className="ae-feature">
                <div className="ae-feature-icon">03</div>

                <h3>Conversação</h3>

                <p>
                  O foco está em usar o idioma e desenvolver confiança
                  para falar.
                </p>
              </div>

              <div className="ae-feature">
                <div className="ae-feature-icon">04</div>

                <h3>Flexibilidade</h3>

                <p>
                  Aulas online pensadas para acompanhar sua rotina.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="ae-cta" id="contact">
          <div className="ae-container ae-cta-inner">
            <div>
              <span className="ae-label">
                AULAS PARTICULARES · ENTRE EM CONTATO
              </span>

              <h2>
                Comece sua
                <br />
                jornada.
              </h2>

              <p>
                Agende uma conversa e saiba mais sobre as
                <strong>
                  {" "}
                  aulas particulares de Inglês, Italiano e Português.
                </strong>
              </p>

              <div className="ae-contact-phones">
                <a href="tel:+393342438886">
                  🇮🇹 +39 334 243 88 86
                </a>

                <a href="tel:+5541996075187">
                  🇧🇷 +55 41 99607 5187
                </a>
              </div>
            </div>

            <div className="ae-contact-actions">
              <a
                className="ae-btn ae-btn-light"
                href="mailto:ademirconstantino@gmail.com?subject=Aulas%20particulares%20ALL%20EUROPE"
              >
                Enviar e-mail →
              </a>

              <a
                className="ae-btn ae-btn-light"
                href="https://wa.me/393342438886"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp →
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;