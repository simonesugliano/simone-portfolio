import ScrollAnimations from "../../components/ScrollAnimations";
import GalleryModal from "../../components/GalleryModal";

export const metadata = {
  title: "Progetto — Artitam (Ristrutturazioni & Cartongesso) | Simone Sugliano",
  description:
    "Sito monopagina in React per Artitam, artigiano specializzato in ristrutturazioni interne, cartongesso, bagni e imbiancature. Progetto con galleria automatica, struttura modulare e collaborazione social attiva.",
  alternates: { canonical: "/progetti/artitam" },
};

export default function ProgettoArtitamPage() {
  return (
    <main className="max-w-[1200px] mx-auto bg-black text-white px-6 py-20">
      <ScrollAnimations />

      {/* HERO */}
      <header className="section-fade text-center mb-16">
        <h1 className="section-title text-4xl font-extrabold mb-4">
          Progetto “Artitam — Ristrutturazioni & Cartongesso”
        </h1>

        <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
          Sito monopagina realizzato in React per un artigiano specializzato in
          ristrutturazioni interne, cartongesso, bagni, imbiancature e rifiniture.
          Il progetto include una galleria fotografica automatica,
          struttura modulare, demo online e una collaborazione attiva anche per
          il comparto social.
        </p>
      </header>

      {/* OBIETTIVI */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">Obiettivo</h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          L’obiettivo del progetto era creare una presenza online moderna,
          veloce e d’impatto per un artigiano reale che si occupa di:
          <br /><br />
          • cartongesso e controsoffitti <br />
          • ristrutturazioni interne complete <br />
          • rifacimento bagni <br />
          • imbiancature e finiture di pregio <br />
          • nicchie, pareti divisorie e ottimizzazione spazi
          <br /><br />
          Il sito è stato progettato come una <strong>landing professionale</strong>:
          semplice, intuitiva, pulita e focalizzata sui lavori reali,
          valorizzati tramite una galleria dinamica che si aggiorna in automatico.
          <br /><br />
          Al momento la demo è online su Altervista, utilizzata esclusivamente per
          mostrare al cliente la struttura, testare il sistema di caricamento foto
          automatico e definire insieme stile, colori e identità finale.
          <br /><br />
          Siamo attualmente nella fase di <strong>rifinitura grafica</strong>:
          il cliente deve fornire materiale fotografico definitivo per
          completare la galleria e le sezioni dedicate ai servizi.
        </p>
      </section>

      {/* FUNZIONALITÀ */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">Funzionalità</h2>

        <ul className="text-gray-300 text-lg space-y-3 leading-relaxed">
          <li>✔ Sito realizzato interamente in <strong>React</strong></li>

          <li>
            ✔ <strong>Galleria fotografica automatica</strong>:
            le immagini vengono caricate da Google Drive, processate tramite
            automazione e aggiornano automaticamente il sito online.
          </li>

          <li>
            ✔ <strong>Layout modulare</strong>:
            ogni sezione (Chi sono, Gallery, Collaborazioni, Zone servite, Contatti)
            è semplice da espandere o sostituire in fase di sviluppo reale.
          </li>

          <li>
            ✔ <strong>Demo online statica</strong> per mostrare struttura e UI al cliente.
          </li>

          <li>
            ✔ <strong>SEO on-page</strong> ottimizzata per la ricerca locale
            (ristrutturazioni, cartongesso, provincia di riferimento).
          </li>

          <li>
            ✔ <strong>UI pensata per il settore edile</strong>:
            colori neutri, linee pulite, focus sui lavori e sulle trasformazioni.
          </li>

          <li>
            ✔ <strong>Collaborazione social attiva</strong>:
            preparo foto, video, mini-reel e contenuti che verranno postati sui social per rafforzare brand e presenza digitale.
          </li>

          <li>
            ✔ <strong>Prossimi step</strong>:
            scelta palette definitiva, integrazione testi, immagini e contatti ufficiali,
            inserimento lavori reali (bagni, pareti, controsoffitti),
            restyling galleria e deploy finale su Vercel.
          </li>
        </ul>
      </section>

      {/* GALLERY */}
      <GalleryModal
        images={[
          "/projects/at1.webp",
          "/projects/at2.webp",
          "/projects/at3.webp",
          "/projects/at4.webp",
          "/projects/at5.webp",
        ]}
      />

      {/* SCREENSHOT */}
      <section className="mt-5 section-fade mb-20">
        <h2 className="text-2xl font-bold mb-4">Screenshot Home Page</h2>

        <div className="overflow-hidden rounded-xl border border-[#39FF14]/70 shadow-[0_0_12px_#39FF1440] max-w-[300px]">
          <img
            src="/projects/artitamHome.webp"
            alt="Screenshot della Home Page del progetto Artitam"
            className="w-full h-auto object-cover"
          />
        </div>

        <p className="text-gray-500 text-sm mt-4 text-center">
          (*Altri screenshot sono disponibili nella galleria*)
        </p>
      </section>

      {/* APPROFONDIMENTO */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">
          Approfondimento Tecnico
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Una sezione dedicata analizza in dettaglio la struttura del progetto,
          il sistema di caricamento foto automatico, la scelta dell’architettura,
          la gestione statica per la demo e la futura migrazione su Vercel.
        </p>

        <a
          href="/progetti/artigiano/approfondimento"
          className="
            inline-block
            px-6 py-3
            bg-[#39FF14] text-black font-semibold
            rounded-xl
            shadow-[0_0_12px_#39FF14aa]
            hover:shadow-[0_0_22px_#39FF14]
            hover:bg-[#39ff14d0]
            transition-all duration-300
          "
        >
          Vai all’approfondimento
        </a>
      </section>

      {/* LINK AL SITO */}
      <section className="section-fade mb-24">
        <a
          href="https://artitam.altervista.org/"
          target="_blank"
          className="inline-block px-8 py-4 bg-[#39FF14] text-black font-semibold rounded-xl shadow-[0_0_12px_#39FF14aa] hover:shadow-[0_0_20px_#39FF14] hover:bg-[#39ff14d0] transition-all duration-300"
        >
          Visita la Demo Online
        </a>
      </section>

      {/* TORNA ALLA HOME */}
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

      {/* CONTATTI */}
      <footer
        id="contatti"
        className="section-fade py-24 px-6 bg-black text-white"
        role="contentinfo"
      >
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="section-title text-4xl font-bold">Contatti</h2>

          <p className="text-lg text-gray-300 leading-relaxed max-w-xl mx-auto section-fade">
            Se vuoi collaborare o hai un progetto da sviluppare, scrivimi
            liberamente.
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
