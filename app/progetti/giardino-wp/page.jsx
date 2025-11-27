import ScrollAnimations from "../../components/ScrollAnimations";
import GalleryModal from "../../components/GalleryModal";

export const metadata = {
  title: "Progetto — Sito WordPress “Giardino Ideale” | Simone Sugliano",
  description:
    "Sito WordPress semplice ma completo, ottimizzato SEO, UI/UX pulita, contenuti reali, area riservata con login utenti e pagine protette. Uno dei primi progetti strutturati del percorso di Simone Sugliano.",
  alternates: { canonical: "/progetti/giardino-wp" },
};

export default function ProgettoGiardinoPage() {
  return (
    <main className="max-w-[1200px] mx-auto bg-black text-white px-6 py-20">
      <ScrollAnimations />

      {/* HERO */}
      <header className="section-fade text-center mb-16">
        <h1 className="section-title text-4xl font-extrabold mb-4">
          Progetto WordPress — “Giardino Ideale”
        </h1>

        <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
          Un sito WordPress semplice ma completo, costruito su un tema — quello del giardinaggio — che conosco bene e che mi piace davvero.
           Questo mi ha permesso di creare contenuti reali, seppur supportato da AI,come dichiarato nel readme dedicato nel sito, senza alcun placeholder.
            L’obiettivo era mostrare fin da subito la capacità di progettare un’interfaccia ordinata, intuitiva e facile da navigare.
             Il progetto include SEO tecnica già impostata, un’area riservata con login e pagine protette, download dei CV e una scelta consapevole di plugin sicuri e leggeri.

        </p>
      </header>

      {/* OBIETTIVO */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">Obiettivo</h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          L’obiettivo era creare un progetto WordPress semplice ma onesto,
          costruito con un approccio professionale già nella fase iniziale del mio
          percorso. Non un template buttato lì, ma un sito ordinato, coerente,
          con testi veri e una struttura SEO corretta.
          <br /><br />
          Il fulcro del lavoro era mostrare:
          <br /><br />
          • una UI pulita e coerente <br />
          • una UX semplice e intuitiva <br />
          • pagine chiare e utili, non riempite di placeholder <br />
          • una piccola area riservata per simulare la divisione che può essere fatta in un sito reale <br />
          • gestione sicura del login tramite plugin affidabili
          <br /><br />
          Il progetto fungeva anche da mini biglietto da visita: conteneva una
          sezione protetta dedicata ai miei CV e ai materiali professionali.
          <br /><br />
          L’intero sito è stato costruito privilegiando leggerezza,
          ottimizzazione e manutenzione semplice.
        </p>
      </section>

      {/* FUNZIONALITÀ */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">Funzionalità</h2>

        <ul className="text-gray-300 text-lg space-y-3 leading-relaxed">
          <li>✔ Sito WordPress completo e responsivo.</li>

          <li>
            ✔ <strong>UI/UX curate</strong>: navigazione chiara, struttura ordinata,
            layout pulito e leggibile.
          </li>

          <li>
            ✔ <strong>SEO tecnica impostata correttamente</strong>: H1/H2 coerenti,
            immagini WebP, lazy-loading, URL puliti e meta ben configurati.
          </li>

          <li>
            ✔ <strong>Contenuti reali</strong>: nessun lorem ipsum. Testi scritti
            per essere utili e professionali.
          </li>

          <li>
            ✔ <strong>Area riservata</strong> con login utenti e pagine protette.
          </li>

          <li>
            ✔ <strong>Download dei CV</strong> e degli attestati dei corsi seguiti a quel punto del mio percorso.
          </li>

          <li>
            ✔ <strong>Plugin sicuri</strong>, leggeri e sempre aggiornati.
          </li>

          <li>
            ✔ Struttura adatta a futuri ampliamenti senza debito tecnico.
          </li>
        </ul>
      </section>
{/* NEWSLETTER */}
<section className="section-fade mb-20">
  <h2 className="section-title text-2xl font-bold mb-4">Newsletter</h2>

  <p className="text-gray-300 text-lg leading-relaxed">
    Il sito includeva anche una newsletter integrata tramite plugin leggero
    e affidabile. Faceva parte dell’esperimento di creare una piccola
    community di utenti interessati alla progettazione del giardino,
    con aggiornamenti su nuovi articoli, consigli stagionali e guide
    pratiche. Era una simulazione realistica di un sito professionale,
    non un semplice esercizio tecnico.
  </p>
</section>
{/* FORM INVIO MAIL */}
<section className="section-fade mb-20">
  <h2 className="section-title text-2xl font-bold mb-4">Form di Contatto</h2>

  <p className="text-gray-300 text-lg leading-relaxed">
    Il progetto includeva un form di contatto pienamente funzionante,
    creato per simulare il comportamento di un vero sito di settore.
    Gli utenti potevano inviare richieste, domande o consigli, con la
    possibilità aggiuntiva di allegare foto o video del proprio giardino
    per ricevere suggerimenti personalizzati. Tutto era gestito tramite
    plugin sicuri, configurati correttamente e senza appesantire il sito.
  </p>
</section>
{/* FAQ */}
<section className="section-fade mb-20">
  <h2 className="section-title text-2xl font-bold mb-4">FAQ</h2>

  <p className="text-gray-300 text-lg leading-relaxed">
    Nel sito era presente una piccola sezione FAQ, pensata per simulare
    il comportamento di un portale reale dedicato ai servizi di
    giardinaggio. Le domande più comuni riguardavano come iniziare una
    progettazione da zero, quali errori evitare e come scegliere le piante
    in base al clima e al tipo di terreno. Anche questa sezione era
    scritta con contenuti veri, non placeholder.
  </p>
</section>
{/* CONTENUTI E SEZIONE RISERVATA */}
<section className="section-fade mb-20">
  <h2 className="section-title text-2xl font-bold mb-4">
    Articoli, Guide e Sezione Riservata
  </h2>

  <p className="text-gray-300 text-lg leading-relaxed mb-4">
    La homepage del sito non era una semplice vetrina: mostrava articoli
    veri, guide pratiche e contenuti informativi scritti da zero.
    C’erano consigli su come creare il proprio giardino, errori da evitare,
    approfondimenti sulla scelta delle piante ed esempi pratici con foto.
  </p>

  <p className="text-gray-300 text-lg leading-relaxed mb-4">
    Alcune sezioni erano state pensate per aggiungere contenuti futuri:
    box informativi, bozze grafiche e placeholder visuali venivano usati
    per testare layout e struttura, simulando il processo di crescita di
    un sito reale.
  </p>

  <p className="text-gray-300 text-lg leading-relaxed">
    Inoltre, era presente un’area privata chiamata <strong>“Il Percorso”</strong>,
    accessibile solo agli utenti registrati. Questa sezione raccoglieva il cuore del progetto, per simulare un reale sito di settore online
  </p>

  
</section>

      <GalleryModal
        images={[
          "/projects/wp1.webp",
          "/projects/wp2.webp",
          "/projects/wp3.webp",
          "/projects/wp4.webp",
        ]}
      />



      {/* SCREENSHOT (PLACEHOLDER) */}
      <section className="mt-5 section-fade mb-20">
        <h2 className="text-2xl font-bold mb-4">Screenshot Home Page</h2>

        <div className="overflow-hidden rounded-xl border border-[#39FF14]/70 shadow-[0_0_12px_#39FF1440] max-w-[300px] mx-auto">
  <img
    src="/projects/homeWpGiardino.webp"
    alt="Screenshot del sito WordPress Giardino Ideale"
    className="w-full h-auto object-cover"
  />
</div>

        <p className="text-gray-500 text-sm mt-4 text-center">
          
        </p>
      </section>

      {/* APPROFONDIMENTO TECNICO (INTEGRATO) */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">
          Approfondimento Tecnico
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          Le scelte tecniche di questo progetto sono state guidate da un criterio
          molto semplice: fare le cose in modo corretto, pulito e sostenibile,
          anche con WordPress.
          <br /><br />
          Punti chiave dell’implementazione:
        </p>

        <ul className="text-gray-300 text-lg space-y-3 leading-relaxed mt-4">
          <li>
            • <strong>Struttura SEO tecnica</strong>: gerarchie H1/H2 coerenti,
            immagini ottimizzate in WebP, caricamento lazy, URL puliti.
          </li>

          <li>
            • <strong>Area riservata</strong> gestita tramite plugin sicuri e
            aggiornati, configurati per evitare bloat.
          </li>

          <li>
            • <strong>Pagine protette</strong> per il cuore del progetto.
          </li>

          <li>
            • <strong>UI/UX curate</strong> con layout chiaro, sezione hero leggera,
            contenuti facili da scorrere.
          </li>

          <li>
            • <strong>Manutenibilità</strong>: il sito è stato progettato per poter
            crescere senza rompersi, mantenendo ordine nel backend.
          </li>
        </ul>

        <p className="text-gray-300 text-lg leading-relaxed mt-6">
          Questo progetto rappresenta bene la fase in cui ho iniziato a lavorare
          con metodo: non solo fare un sito “che funziona”, ma farlo bene,
          con attenzione alla struttura, alla SEO e alla qualità dell’esperienza
          utente.
        </p>
      </section>

      {/* CTA */}
      <section className="section-fade mb-24">
        <a
          href="https://supermegaprovesito.altervista.org"
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
