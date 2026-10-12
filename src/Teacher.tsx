import { motion } from "framer-motion";

const credentials = [
  "7 anos vivendo na Itália",
  "Fala 4 idiomas",
  "Mestrado · University of Liverpool",
  "Pós em Engenharia · PUCPR",
  "Graduação · UNIDANTE, Blumenau",
  "EUA · San Francisco e Atlanta",
];

function Teacher() {
  return (
    <section className="ae-section ae-teacher" id="teacher">
      <motion.div
        className="ae-container ae-teacher-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="ae-teacher-photo">
          <div className="ae-teacher-frame">
            <img
              src="/professor/ademir-firenze.jpg"
              alt="Professor Ademir Constantino em Florença, às margens do rio Arno"
            />
          </div>

          <span className="ae-teacher-flags" title="Idiomas que falo">
            🇮🇹 🇧🇷 🇬🇧 🇪🇸
          </span>
          <span className="ae-teacher-place">📍 Firenze, Italia</span>
        </div>

        <div className="ae-teacher-copy">
          <span className="ae-label">SEU PROFESSOR</span>

          <h2>
            Ademir Constantino
            <br />
            <em>ítalo-brasileiro, poliglota.</em>
          </h2>

          <p>
            Paranaense, vivi 7 anos na Itália e falo quatro idiomas. Hoje
            ensino <strong>Inglês, Italiano e Português</strong> com a
            experiência de quem viveu os idiomas no dia a dia — e levo
            para cada aula minha paixão pelo aprendizado contínuo.
          </p>

          <ul className="ae-teacher-credentials">
            {credentials.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <a
            href="https://calendly.com/ademirconstantino/30min"
            className="ae-btn ae-btn-dark ae-teacher-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agende uma conversa de 30 min →
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Teacher;
