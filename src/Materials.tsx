import { motion } from "framer-motion";

type Material = {
  language: string;
  title: string;
  subtitle: string;
  description: string;
  details: string;
  cover: string;
  file: string;
};

const materials: Material[] = [
  {
    language: "🇬🇧 INGLÊS",
    title: "Everyday English Vocabulary",
    subtitle: "Vocabulário do Dia a Dia em Inglês",
    description:
      "280 palavras do dia a dia em 10 capítulos temáticos — campo, cozinha, hospital, escritório, viagem, escola, casa, supermercado, cidade e esportes. Cada capítulo traz 8 verbos, 20 substantivos e uma dica, com tradução para o português.",
    details: "PDF · 17 páginas",
    cover: "/materiais/everyday-english-vocabulary-capa.png",
    file: "/materiais/everyday-english-vocabulary.pdf",
  },
];

function Materials() {
  return (
    <section className="ae-section ae-materials" id="materials">
      <div className="ae-container">
        <div className="ae-centered-heading">
          <span className="ae-label">MATERIAIS GRATUITOS</span>

          <h2>
            Estude também
            <br />
            <em>fora da aula.</em>
          </h2>

          <p>
            Materiais preparados pela ALL EUROPE para você baixar
            gratuitamente e praticar no seu ritmo.
          </p>
        </div>

        <div className="ae-materials-grid">
          {materials.map((item) => (
            <motion.article
              key={item.file}
              className="ae-material-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <a
                href={item.file}
                className="ae-material-cover"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={item.cover} alt={`Capa do material ${item.title}`} />
              </a>

              <div className="ae-material-body">
                <span className="ae-card-label">{item.language}</span>

                <h3>{item.title}</h3>
                <em>{item.subtitle}</em>

                <p>{item.description}</p>

                <small>{item.details}</small>

                <a href={item.file} className="ae-btn ae-btn-dark" download>
                  Baixar grátis ↓
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Materials;
