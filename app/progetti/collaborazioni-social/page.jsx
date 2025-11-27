import ScrollAnimations from "../../components/ScrollAnimations";

export const metadata = {
  title: "Progetto — Collaborazioni Social & Content Creation | Simone Sugliano",
  description:
    "Content Creation per attività locali: strategia social, editing foto/video, piano editoriale, ottimizzazione visual e supporto alla crescita digitale. Collaborazioni attive con artigiani, agriturismi e gastronomia di qualità.",
  alternates: { canonical: "/progetti/collaborazioni-social" },
};

export default function ProgettoSocialPage() {
  return (
    <main className="max-w-[1200px] mx-auto bg-black text-white px-6 py-20">
      <ScrollAnimations />

      {/* HERO */}
      <header className="section-fade text-center mb-16">
        <h1 className="section-title text-4xl font-extrabold mb-4">
          Collaborazioni Social &amp; Content Creation
        </h1>

        <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
          Gestione contenuti social per attività locali: definizione strategica,
          editing di foto e video, identità visual, copywriting e pianificazione.
          L’obiettivo è aumentare la presenza online di realtà locali attraverso
          contenuti autentici, curati e coerenti con la loro identità.  
          <br /><br />
          Attualmente il progetto è in fase di definizione strategie,
          raccolta materiali e creazione dei primi contenuti.
        </p>
      </header>

      {/* OBIETTIVO */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">Obiettivo</h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          Questo progetto nasce dall’esigenza di supportare attività locali nella
          costruzione di una presenza digitale professionale e riconoscibile.
          Le collaborazioni attive includono:
          <br /><br />
          • <strong>Artitam</strong> — ristrutturazioni, cartongesso e finiture interne <br /> 
          • <strong>Agriturismo La Bertorella</strong> — struttura ricettiva immersa nel territorio <br />  
          • <strong>Cibus in Fabula</strong> — gastronomia di prodotti locali e di nicchia  
          <br /><br />

          La fase attuale consiste in:  
          • analisi del target locale  
          • definizione del tono di voce  
          • raccolta e selezione dei materiali  
          • progettazione dei primi contenuti visual  
          • definizione del piano editoriale  
          <br /><br />

          Per <strong>Cibus in Fabula</strong> è stato inoltre avviato un confronto
          preliminare per la realizzazione del loro <strong>sito web ufficiale</strong>,
          pensato come vetrina per prodotti, gastronomia e iniziative.
        </p>
      </section>

      {/* COSA INCLUDE IL PROGETTO */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">
          Cosa comprende il progetto
        </h2>

        <ul className="text-gray-300 text-lg space-y-3 leading-relaxed">
          <li>
            ✔ <strong>Analisi iniziale</strong>: identità del brand, target, tono di voce.
          </li>

          <li>
            ✔ <strong>Strategia social dedicata</strong>: definizione di stile, palette,
            tipologie di contenuto e frequenza.
          </li>

          <li>
            ✔ <strong>Editing foto professionale</strong>: colori, contrasto, resa
            realistica, taglio e pulizia visiva.
          </li>

          <li>
            ✔ <strong>Montaggio video brevi</strong>: reel, showcase di lavorazioni,
            mini-spot per prodotti o ambienti.
          </li>

          <li>
            ✔ <strong>Copywriting ottimizzato</strong> per Instagram, Facebook e WhatsApp.
          </li>

          <li>
            ✔ <strong>Pianificazione post</strong> e preparazione del calendario editoriale.
          </li>

          <li>
            ✔ <strong>Coordinamento continuo</strong>: raccolta materiali, aggiornamenti,
            revisione stile e miglioramento qualità.
          </li>

          <li>
            ✔ <strong>Progetto parallelo futuro (Cibus in Fabula)</strong>: possibile
            realizzazione del sito web e integrazione con il piano social.
          </li>
        </ul>
      </section>

      {/* NOTA MATERIALE IN ARRIVO */}
      <section className="section-fade mb-24">
        <div
          className="
            bg-[#111]
            border border-[#39FF14]/40
            p-6 rounded-xl text-center
            shadow-[0_0_12px_#39FF1440]
          "
        >
          <h3 className="text-xl font-bold mb-2 text-[#39FF14]">
            Materiali in arrivo
          </h3>

          <p className="text-gray-300 text-lg leading-relaxed">
            Le foto, i video e i template saranno aggiunti non appena ricevuto
            il materiale definitivo dai clienti.  
            La pagina verrà aggiornata progressivamente per mostrare l’evoluzione
            del progetto.
          </p>
        </div>
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
