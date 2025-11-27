import ScrollAnimations from "../../../components/ScrollAnimations";

export const metadata = {
  title: "Approfondimento Tecnico — Artitam (Ristrutturazioni & Cartongesso)",
  description:
    "Analisi tecnica della struttura del progetto Artitam: architettura React, galleria automatica, automazioni, hosting demo e migrazione futura su Vercel.",
  alternates: { canonical: "/progetti/artitam/approfondimento" },
};

export default function ApprofondimentoArtitam() {
  return (
    <main className="max-w-[1200px] mx-auto bg-black text-white px-6 py-20">
      <ScrollAnimations />

      {/* HERO */}
      <header className="section-fade text-center mb-16">
        <h1 className="section-title text-4xl font-extrabold mb-4">
          Approfondimento Tecnico — Progetto “Artitam”
        </h1>

        <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
          Panoramica tecnica del sito monopagina dedicato a un artigiano che si
          occupa di ristrutturazioni interne, cartongesso, bagni, imbiancature e
          lavori di rifinitura. Il progetto integra una galleria fotografica
          automatica, un’architettura React modulare e un flusso di aggiornamento
          realizzato tramite automazioni esterne.
        </p>
      </header>

      {/* INTRODUZIONE */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">
          Obiettivo tecnico del progetto
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          Il sito è nato con un obiettivo preciso: fornire all'artigiano uno
          strumento semplice, moderno e facilmente aggiornabile per mostrare i
          lavori eseguiti.
          <br /><br />
          Data la quantità di foto che genera durante i cantieri e la necessità
          di aggiornare la gallery senza conoscenze tecniche, la scelta migliore
          è stata:
          <br />
          <strong>
            automatizzare il caricamento delle immagini e separare completamente
            la logica dalla gestione dei file.
          </strong>
          <br /><br />
          Il risultato è un sito leggero, reattivo, scalabile e già pronto per
          essere migrato da Altervista a Vercel.
        </p>
      </section>

      {/* ARCHITETTURA */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">
          Architettura React
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          Il progetto è stato sviluppato come <strong>single-page application</strong>
          in React, suddivisa in sezioni indipendenti:
        </p>

        <ul className="text-gray-300 text-lg space-y-2 mt-4 leading-relaxed">
          <li>• Navbar e struttura base</li>
          <li>• Sezione “Chi sono”</li>
          <li>• Galleria dinamica</li>
          <li>• Collaborazioni</li>
          <li>• Zone servite</li>
          <li>• Contatti</li>
        </ul>

        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          Ogni blocco è un componente isolato, facilmente aggiornabile senza
          toccare l’intera struttura.  
          La gallery non utilizza immagini inserite a mano.
Un workflow esterno (Google Drive → Google Apps Script → GitHub) aggiorna automaticamente la lista delle foto.

Ogni volta che l’artigiano carica nuove immagini su Drive, lo script le legge e aggiorna il repository con il nuovo set.

Il componente React importa direttamente la lista aggiornata e rigenera la gallery senza intervento manuale.
        </p>
      </section>

      {/* AUTOMAZIONE GALLERY */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">
          Galleria fotografica automatica
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          La parte più avanzata del progetto è il sistema di caricamento automatico
          delle immagini. L'artigiano carica le foto su Google Drive, e un sistema
          esterno (Google Apps Script) gestisce:
        </p>

        <ul className="text-gray-300 text-lg space-y-2 mt-4 leading-relaxed">
          <li>• lettura delle nuove immagini</li>
          <li>• conversione nei formati ottimizzati (WebP)</li>
          <li>• aggiornamento automatico del repository GitHub</li>
          <li>• deploy della demo su Altervista</li>
          <li>• aggiornamento istantaneo della gallery sul sito</li>
        </ul>

        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          Il risultato: <strong>nessun intervento manuale</strong> per aggiornare il
          sito.  
          Appena l'artigiano invia nuove foto, la pagina si aggiorna da sola.
        </p>
      </section>

      {/* SNIPPET */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-3xl font-bold mb-4">
          Snippet del componente Gallery
        </h2>

        <div className="bg-[#111] border border-[#39FF14]/40 p-6 rounded-xl">
<pre className="text-gray-300 text-sm overflow-auto">
{String.raw`// Import delle immagini generate automaticamente
import images from "../data/gallery.json";

export default function Gallery() {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          className="rounded-xl shadow-[0_0_8px_#39FF1440]"
          alt="Lavoro realizzato"
        />
      ))}
    </div>
  );
}`}
</pre>
        </div>
      </section>

      {/* HOSTING ALTERVISTA E FUTURA MIGRAZIONE */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">
          Hosting attuale e migrazione su Vercel
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          La demo del sito è attualmente ospitata su Altervista, scelta effettuata
          per permettere al cliente di visualizzare rapidamente la struttura e a me di
          testare la gallery automatica.
          <br /><br />
          Tuttavia, il progetto è già pronto per essere migrato su{" "}
          <strong>Vercel</strong>, dove beneficerà di:
        </p>

        <ul className="text-gray-300 text-lg space-y-2 mt-4 leading-relaxed">
          <li>• performance molto superiori</li>
          <li>• ottimizzazione automatica di immagini e bundle</li>
          <li>• deploy istantanei</li>
          <li>• routing avanzato</li>
          <li>• gestione semplificata degli assets</li>
        </ul>

        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          La migrazione avverrà non appena il cliente approverà la versione finale
          dello stile grafico e fornirà il materiale fotografico definitivo.
        </p>
      </section>

      {/* SEO */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">
          SEO locale e struttura contenuti
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          Il progetto integra una SEO on-page pensata appositamente per attività
          artigiane locali. Sono state curate:
        </p>

        <ul className="text-gray-300 text-lg space-y-2 leading-relaxed mt-4">
          <li>• parole chiave legate a ristrutturazioni e cartongesso</li>
          <li>• geolocalizzazione della zona servita</li>
          <li>• microdescrizioni per ogni servizio</li>
          <li>• struttura leggibile e estremamente chiara</li>
        </ul>
      </section>

      {/* COLLABORAZIONE SOCIAL */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">
          Collaborazione Social
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          Parallelamente allo sviluppo del sito, è iniziata una collaborazione per
          la gestione del comparto social.  
          Il materiale fotografico e video raccolto per i cantieri verrà utilizzato
          non solo per i post e i reel, ma anche per alimentare la galleria del sito
          e rafforzare la presenza online dell'artigiano con una strategia coerente.
        </p>
      </section>

      {/* EVOLUZIONI */}
      <section className="section-fade mb-20">
  <h2 className="section-title text-2xl font-bold mb-4">
    Evoluzioni tecniche previste
  </h2>

  <p className="text-gray-300 text-lg leading-relaxed mb-4">
    Con la consegna del materiale fotografico definitivo e la scelta dello stile
    grafico, il progetto prevede una serie di miglioramenti tecnici pensati per
    rendere il sito più veloce, completo e professionale.
  </p>

  <ul className="text-gray-300 text-lg space-y-3 leading-relaxed">
    <li>
      • <strong>Pipeline di ottimizzazione immagini</strong>: integrazione di una
      conversione automatica in <strong>WebP</strong>, ridimensionamento e
      compressione per migliorare drasticamente la velocità del sito.
    </li>

    <li>
      • <strong>Portfolio lavori avanzato</strong>: pagina dedicata con schede
      tecniche, prima/dopo e descrizioni dei cantieri reali.
    </li>

    <li>
      • <strong>Pagina servizi dettagliata</strong> per ristrutturazioni, bagni,
      cartongesso e imbiancature, per migliorare la SEO locale e l’indicizzazione.
    </li>

    <li>
      • <strong>Modulo preventivi intelligente</strong> con raccolta informazioni,
      upload immagini e invio automatizzato.
    </li>

    <li>
      • <strong>Transizioni e micro-animazioni React</strong> per dare più fluidità
      all’esperienza senza appesantire il sito.
    </li>

    <li>
      • <strong>Migrazione completa su Vercel</strong> con ottimizzazioni automatiche
      lato CDN, caching e gestione assets.
    </li>
  </ul>
</section>

      {/* TORNA AL PROGETTO */}
      <section className="section-fade text-center mt-10 mb-24">
        <a
          href="/progetti/artitam"
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
          ← Torna alla pagina del progetto
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
      </footer>    </main>
  );
}
