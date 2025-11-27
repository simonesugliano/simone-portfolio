import ScrollAnimations from "../../components/ScrollAnimations";
import GalleryModal from "../../components/GalleryModal";

export const metadata = {
  title: "Progetto — Mini Sito CV su Altervista | Simone Sugliano",
  description:
    "Un mini sito curriculum realizzato su Altervista come esercizio pratico di HTML, CSS e Bootstrap. Include sezioni CV, pagine per scaricare documenti, widget personalizzati, video divertenti montati in Canva e layout responsive.",
  alternates: { canonical: "/progetti/sito-cv-altervista" },
};

export default function ProgettoSitoCVAltervista() {
  return (
    <main className="max-w-[1200px] mx-auto bg-black text-white px-6 py-20">
      <ScrollAnimations />

      {/* HERO */}
      <header className="section-fade text-center mb-16">
        <h1 className="section-title text-4xl font-extrabold mb-4">
          Progetto “SitoCV” — Mini Sito Curriculum su Altervista
        </h1>

        <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
          Un mini sito curriculum costruito su Altervista come esercizio
          pratico per allenarmi con HTML, CSS e Bootstrap. Un progetto semplice
          ma completo: sezioni CV, pagina per scaricare curriculum e attestati,
          una galleria di video divertenti montati in Canva, widget personalizzati
          e una struttura responsive pulita, pensata per essere veloce e chiara.
        </p>
      </header>

      {/* OBIETTIVO */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">Obiettivo</h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          L’obiettivo era creare un piccolo sito curriculum da usare come
          esercizio pratico prima dei progetti più complessi. Struttura minimale,
          sezioni chiare, contenuti semplici e un’architettura adatta ai primi
          passi nel mondo web.
          <br /><br />
          Il sito contiene:
          <br /><br />
          • Sezione Esperienze<br />
          • Competenze Tecniche e Trasversali<br />
          • Progetti personali<br />
          • Pagine per <strong>visualizzare e scaricare CV e attestati</strong><br />
          • Video divertenti montati in Canva<br />
          • Widget e embed esterni<br />
          • Sezione Contatti<br />
          <br />
          Un laboratorio “leggero” utile per prendere confidenza con layout,
          componenti, griglie Bootstrap e primi principi di web design.
        </p>
      </section>

      {/* FUNZIONALITÀ */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">Funzionalità Principali</h2>

        <ul className="text-gray-300 text-lg space-y-3 leading-relaxed">
          <li>✔ Struttura a sezioni in stile curriculum.</li>
          <li>✔ Layout responsive basato su Bootstrap 5.</li>
          <li>
            ✔ Pagina dedicata per
            <strong> visualizzare e scaricare Curriculum e Attestati</strong>.
          </li>
          <li>
            ✔ Galleria video con
            <strong> mini-clip divertenti montate in Canva</strong>.
          </li>
          <li>✔ Widget personalizzati e embed da piattaforme esterne.</li>
          <li>✔ Sezione Progetti con card e link diretti.</li>
          <li>✔ Pagina Contatti semplice e diretta.</li>
          <li>✔ Stile minimal pulito e leggibile.</li>
          <li>✔ Hosting su Altervista per test e sperimentazione.</li>
        </ul>
      </section>

      {/* VIDEO / MULTIMEDIA SECTION */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">Video & Multimedia</h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          Una piccola parte “creativa” del progetto: ho inserito <strong>video brevi montati in Canva</strong>, una soluzione semplice
          per aggiungere un tocco personale e mostrare la capacità di integrare
          contenuti multimediali esterni in un layout responsive.
        </p>
      </section>

      {/* GALLERY */}
      <GalleryModal
        images={[
          "/projects/cv1.webp",
          "/projects/cv2.webp",
          "/projects/cv3.webp",
          "/projects/cv4.webp",
        ]}
      />

      {/* SCREENSHOT */}
      <section className="mt-5 section-fade mb-20">
        <h2 className="text-2xl font-bold mb-4">Screenshot Home Page</h2>

        <div className="overflow-hidden rounded-xl border border-[#39FF14]/70 shadow-[0_0_12px_#39FF1440] max-w-[300px] mx-auto">
          <img
            src="/projects/cvHome.webp"
            alt="Screenshot Home Mini Sito CV"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* APPROFONDIMENTO TECNICO */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">Approfondimento Tecnico</h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          Tecnicamente il progetto è semplice, ma utile. Mi ha permesso di
          perfezionare diversi aspetti di base:
        </p>

        <ul className="text-gray-300 text-lg space-y-3 leading-relaxed mt-4">
          <li>• Struttura di una pagina CV moderna e usabile.</li>
          <li>• Creazione di sezioni modulari con griglie Bootstrap.</li>
          <li>• Integrazione di video, immagini, embed e widget.</li>
          <li>• Link diretti a file PDF e gestione download.</li>
          <li>• Layout responsive ottimizzato per mobile.</li>
          <li>• Gestione hosting Altervista e pannello file.</li>
        </ul>

        <p className="text-gray-300 text-lg leading-relaxed mt-6">
          Un esercizio perfetto per testare idee con leggerezza prima dei
          progetti complessi. Piccolo, pulito, immediato.
        </p>
      </section>

      {/* CTA */}
      <section className="section-fade mb-24 text-center">
        <a
          href="https://sitocv.altervista.org"
          target="_blank"
          className="inline-block px-8 py-4 bg-[#39FF14] text-black font-semibold rounded-xl shadow-[0_0_12px_#39FF14aa] hover:shadow-[0_0_20px_#39FF14] hover:bg-[#39ff14d0] transition-all duration-300"
        >
          Visita la Demo Online
        </a>
      </section>

      {/* HOME */}
      <section className="section-fade text-center mt-10 mb-24">
        <a
          href="/"
          className="
            inline-block
            px-8 py-4
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
    </main>
  );
}
