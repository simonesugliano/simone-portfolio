import ScrollAnimations from "../../components/ScrollAnimations";
import GalleryModal from "../../components/GalleryModal";

export const metadata = {
  title: "Progetto — Tema Child WordPress | Simone Sugliano",
  description:
    "Tema child personalizzato creato per mostrare come sviluppo e personalizzo WordPress tramite override, funzioni PHP semplici e layout su misura. Progetto dimostrativo in evoluzione.",
  alternates: { canonical: "/progetti/modifica-wp" },
};

export default function ProgettoModificaWPPage() {
  return (
    <main className="max-w-[1200px] mx-auto bg-black text-white px-6 py-20">
      <ScrollAnimations />

      {/* HERO */}
      <header className="section-fade text-center mb-16">
        <h1 className="section-title text-4xl font-extrabold mb-4">
          Progetto “Tema Child WordPress — Override & Personalizzazioni”
        </h1>

        <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
          Tema child creato da zero per dimostrare in modo semplice come lavoro
          su WordPress tramite codice. Ho personalizzato la home, il template
          degli articoli e alcune sezioni aggiuntive, intervenendo su layout,
          struttura e stile senza modificare il tema principale.  
          È un progetto tecnico essenziale, pensato per mostrare un flusso di lavoro
          reale e rimarrà in evoluzione con nuove piccole funzionalità.
        </p>
      </header>

      {/* OBIETTIVI */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">Obiettivo</h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          Lo scopo di questa demo è mostrare come intervengo sul codice di
          WordPress tramite un tema figlio. Non è un sito completo, ma un ambiente
          di test dove applico modifiche reali alla struttura delle pagine.
          <br /><br />
          In particolare ho lavorato su:
          <br /><br />
          • override della home tramite <code>front-page.php</code><br />
          • override del template degli articoli con <code>single.php</code><br />
          • layout personalizzato tramite CSS del child<br />
          • sezione “Articoli correlati” in formato card<br />
          • box autore e box informazioni articolo su misura<br />
          • piccole migliorie alla navigazione senza usare plugin esterni
          <br /><br />
          Il progetto è aggiornabile nel tempo e verrà ampliato con nuove funzioni.
        </p>
      </section>

      {/* FUNZIONALITÀ */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">Funzionalità implementate</h2>

        <ul className="text-gray-300 text-lg space-y-3 leading-relaxed">
          <li>✔ Creazione completa del <strong>tema child</strong></li>

          <li>
            ✔ <strong>Override della home</strong> tramite file{" "}
            <code>front-page.php</code> con layout personalizzato
          </li>

          <li>
            ✔ <strong>Override del template articoli</strong> tramite{" "}
            <code>single.php</code>
          </li>

          <li>
            ✔ Aggiunta della sezione <strong>“Articoli correlati”</strong> in formato card
          </li>

          <li>
            ✔ <strong>Contenitore personalizzato</strong> (.container-simone) per home e articoli
          </li>

          <li>
            ✔ <strong>CSS su misura</strong> per box, titoli, card e layout generale
          </li>

          <li>
            ✔ <strong>Box autore</strong> e <strong>box info articolo</strong> creati via HTML/PHP
          </li>

          <li>
            ✔ Progetto pensato per essere ampliato con ulteriori componenti e funzioni
          </li>
        </ul>
      </section>


      {/* GALLERY */}
      <GalleryModal
        images={[
          "/projects/md1.webp",
          "/projects/md2.webp",
          "/projects/md3.webp",
          "/projects/md4.webp",
                    "/projects/md5.webp",

        ]}
      />

      {/* SCREENSHOT */}
      <section className="mt-5 section-fade mb-20">
        <h2 className="text-2xl font-bold mb-4">Screenshot del Tema Child</h2>

        <div className="overflow-hidden rounded-xl border border-[#39FF14]/70 shadow-[0_0_12px_#39FF1440] max-w-[300px]">
          <img
            src="/projects/homeModifica.webp"
            alt="Screenshot del progetto WordPress tema child"
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
          Nell’approfondimento vengono descritti nel dettaglio i file utilizzati,
          le funzioni PHP aggiunte, la logica del tema child e la struttura delle
          cards finali.  
          È una sezione pensata per chi vuole vedere come gestisco WordPress lato codice.
        </p>

        <a
          href="/progetti/modifica-wordpress/approfondimento"
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

      {/* LINK ALLA DEMO */}
      <section className="section-fade mb-24 text-center">
        <a
  href="https://simone-dev.page.gd/"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-8 py-4 bg-[#39FF14] text-black font-semibold rounded-xl shadow-[0_0_12px_#39FF14aa] hover:shadow-[0_0_20px_#39FF14] hover:bg-[#39ff14d0] transition-all duration-300"
>
  Visita la demo online
</a>

        <p className="text-gray-400 text-sm mt-4">
          (Demo su hosting gratuito – progetto in evoluzione)
        </p>
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
            Se vuoi collaborare o hai un progetto da sviluppare, scrivimi liberamente.
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
