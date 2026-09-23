import { motion } from "framer-motion";

type Package = { hours: number; price: number; paymentUrl: string; popular?: boolean; };

const packages: Package[] = [
  {
    hours: 5,
    price: 250,
    paymentUrl: "https://mpago.la/2bcTRy2",
  },
  {
    hours: 10,
    price: 500,
    paymentUrl: "https://mpago.la/2DshhDv",
    popular: true,
  },
];

function LessonPackages() { const handlePurchase = (paymentUrl: string) => { window.open(paymentUrl, "_blank", "noopener,noreferrer"); };

  return (
    <section className="ae-section ae-packages" id="packages">
      <div className="ae-container">
        <div className="ae-centered-heading">
          <span className="ae-label">AULAS PARTICULARES</span>

          <h2>
            Aprenda no seu
            <br />
            <em>ritmo.</em>
          </h2>

          <p>
            Escolha um pacote de aulas particulares de Inglês ou Italiano,
            com acompanhamento personalizado e horários flexíveis.
          </p>
        </div>

        <div className="ae-packages-grid">
          {packages.map((item, index) => (
            <motion.article
              key={item.hours}
              className={`ae-package-card ${
                item.popular ? "ae-package-featured" : ""
              }`}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              {item.popular && (
                <div className="ae-package-badge">
                  MAIS PROCURADO
                </div>
              )}

              <span className="ae-package-label">
                PACOTE {item.hours} HORAS
              </span>

              <div className="ae-package-hours">
                {item.hours}
                <small> horas</small>
              </div>

              <div className="ae-package-price">
                <span>R$</span>
                {item.price.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                })}
              </div>

              <p className="ae-package-description">
                {item.hours === 5
                  ? "5 aulas individuais de 1 hora."
                  : "10 aulas individuais de 1 hora."}
              </p>

              <ul className="ae-package-features">
                <li>✓ Inglês ou Italiano</li>
                <li>✓ Aulas individuais</li>
                <li>✓ Horários flexíveis</li>
                <li>✓ Conteúdo personalizado</li>
                <li>✓ Aulas online</li>
              </ul>

              <button
                type="button"
                className="ae-btn ae-package-button"
                onClick={() => handlePurchase(item.paymentUrl)}
              >
                Comprar pacote →
              </button>
            </motion.article>
          ))}
        </div>

        <p className="ae-package-note">
          Valor da hora/aula: <strong>R$ 50,00</strong>
        </p>
      </div>
    </section>
  );
}

export default LessonPackages;