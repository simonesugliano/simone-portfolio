import ScrollAnimations from "../../components/ScrollAnimations";
import GalleryModal from "../../components/GalleryModal";

export const metadata = {
  title: "Progetto — Cibus in Fabula | Simone Sugliano",
  description:
    "Collaborazione in avvio con Cibus in Fabula: supporto per contenuti social, sponsorizzazioni e futura definizione del sito web.",
  alternates: { canonical: "/progetti/cibus-in-fabula" },
};

export default function ProgettoCibusPage() {
  return (
    <main className="max-w-[1200px] mx-auto bg-black text-white px-6 py-20">
      <ScrollAnimations />

      {/* HERO */}
      <header className="section-fade text-center mb-16">
        <h1 className="section-title text-4xl font-extrabold mb-4">
          Progetto “Cibus in Fabula”
        </h1>

        <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
          Collaborazione appena avviata con un’attività dedicata ai prodotti e alla cucina locale.
          In questa fase sto impostando la linea visiva dei contenuti, la gestione social
          e le basi per una comunicazione semplice e riconoscibile.
        </p>
      </header>

      {/* OBIETTIVO */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">Obiettivo</h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          L’obiettivo iniziale è dare ordine e coerenza alla presenza online:
          <br /><br />
          • stile visivo riconoscibile <br />
          • foto e contenuti chiari <br />
          • comunicazione più pulita <br />
          • impostazione delle prime sponsorizzazioni
          <br /><br />
          In futuro è prevista anche la creazione di un sito semplice,
          pensato per raccontare al meglio i prodotti e la cucina.
        </p>
      </section>

      {/* COSA STO FACENDO */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">Cosa sto facendo</h2>

        <ul className="text-gray-300 text-lg space-y-3 leading-relaxed">
          <li>✔ Impostazione dello stile delle foto e dei contenuti</li>
          <li>✔ Mini-editing foto per i primi post</li>
          <li>✔ Scelta dei colori e tono comunicativo</li>
          <li>✔ Organizzazione della pubblicazione</li>
          <li>✔ Preparazione delle prime sponsorizzazioni</li>
          <li>✔ Raccolta materiale per eventuale sito web</li>
        </ul>
      </section>

      {/* NOTE */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">Stato attuale</h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          Il progetto è nella fase iniziale: sto costruendo la base visiva e comunicativa.
          Man mano che arriveranno contenuti e materiale, la presenza online verrà completata
          e potremo passare al sito dedicato.
        </p>
      </section>

      {/* TORNA ALLA HOME */}
      <section className="section-fade text-center mt-10 mb-24">
        <a
          href="/"
          className="
            inline-block px-8 py-4
            bg-[#0c0c0c]
            border border-[#39FF14]/70
            text-[#39FF14]
            font-semibold
            rounded-xl
            shadow-[0_0_12px_#39FF1480]
            hover:shadow-[0_0_22px_#39FF14]
            hover:bg-[#111]
            transition-all duration-300
          "
        >
          ← Torna alla Home
        </a>
      </section>

      {/* CONTATTI */}
      <footer
        id="contatti"
        className="section-fade py-24 px-6 bg-black text-white"
        role="contentinfo"
      >
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="section-title text-4xl font-bold">Contatti</h2>

          <p className="text-lg text-gray-300 leading-relaxed max-w-xl mx-auto section-fade">
            Se vuoi collaborare o hai un progetto da avviare, scrivimi liberamente.
          </p>

          <div className="text-xl font-semibold space-y-3 section-fade">
            <p>
              Email:{" "}
              <a
                href="mailto:simone.sugliano@gmx.com"
                className="underline underline-offset-2 hover:text-[#39FF14]"
              >
                simone.sugliano@gmx.com
              </a>
            </p>

            <p>
              Telefono:{" "}
              <a
                href="tel:+393923688757"
                className="underline underline-offset-2 hover:text-[#39FF14]"
              >
                +39 392 368 8757
              </a>
            </p>
          </div>

          <nav
            className="flex items-center justify-center gap-8 section-fade"
            aria-label="Social Links"
          >
            <a
              href="https://github.com/simonesugliano"
              target="_blank"
              className="underline text-gray-300 hover:text-[#39FF14] text-lg"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/simone-sugliano-95388022b"
              target="_blank"
              className="underline text-gray-300 hover:text-[#39FF14] text-lg"
            >
              LinkedIn
            </a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
