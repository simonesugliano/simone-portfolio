import ScrollAnimations from "../../components/ScrollAnimations";
import GalleryModal from "../../components/GalleryModal";

export const metadata = {
  title: "Progetto — Sito Metal & Shop LocalStorage | Simone Sugliano",
  description:
    "Primo progetto strutturato di Simone Sugliano: sito a tema metal con Bootstrap, sezione shop simulata in LocalStorage, filtri, categorie e layout grezzo ma personale. Il punto di partenza del percorso da sviluppatore.",
  alternates: { canonical: "/progetti/ecommerce-metal" },
};

export default function ProgettoMetalPage() {
  return (
    <main className="max-w-[1200px] mx-auto bg-black text-white px-6 py-20">
      <ScrollAnimations />

      {/* HERO */}
      <header className="section-fade text-center mb-16">
        <h1 className="section-title text-4xl font-extrabold mb-4">
          Progetto “Metal Works” — Sito + Shop in LocalStorage
        </h1>

        <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
          Un progetto grezzo, personale e spontaneo — il primo vero sito che ho
          costruito all’inizio del mio percorso. Realizzato usando Bootstrap,
          HTML, CSS e JavaScript puro, senza framework. Un piccolo laboratorio
          dove ho iniziato a sperimentare con layout, componenti, card, sezioni
          eventi… e soprattutto con uno <strong>shop funzionante</strong> basato
          interamente su localStorage.
        </p>
      </header>

      {/* OBIETTIVO */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">Obiettivo</h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          L’obiettivo non era creare un prodotto perfetto, ma iniziare a
          costruire qualcosa di mio. Un sito “tema metal” con look ruvido e
          minimale, utile per fare pratica con:
          <br /><br />
          • Bootstrap<br />
          • layout responsive base<br />
          • struttura a sezioni<br />
          • prime interazioni JavaScript<br />
          • un piccolo sistema e-commerce senza backend<br />
          <br />
          Tutto ciò che oggi so fare meglio è partito da qui.
        </p>
      </section>

      {/* FUNZIONALITÀ */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">Funzionalità Principali</h2>

        <ul className="text-gray-300 text-lg space-y-3 leading-relaxed">
          <li>✔ Sito home con stile metal, cards eventi e sezione info.</li>
          <li>✔ Prime basi di responsive design con Bootstrap.</li>
          <li>✔ Sezione contatti semplice e diretta.</li>

          <li>
            ✔ <strong>Shop completo simulato</strong>:
            gestione prodotti, card dinamiche, pulsante acquisto, anteprima
            prodotti.
          </li>

          <li>
            ✔ <strong>Carrello persistente</strong> tramite LocalStorage:
            il contenuto rimane anche dopo il refresh.
          </li>

          <li>
            ✔ <strong>Filtri, categorie e selezione prodotti</strong> realizzati
            in JavaScript puro.
          </li>

          <li>
            ✔ <strong>Esperimento reale tipo e-commerce</strong> senza backend.
          </li>
        </ul>
      </section>

      {/* SHOP SECTION */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">Lo Shop</h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          Lo shop è la parte più interessante del progetto. È stato costruito
          interamente in JavaScript, leggendo un array di prodotti e creando le
          card dinamicamente. Ogni azione dell’utente — selezionare categorie,
          filtrare articoli o aggiungere prodotti — aggiorna in tempo reale la
          vista e il contenuto del carrello, salvato in localStorage.
        </p>

        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          Anche se semplice, questo shop rappresenta il mio primo approccio a
          concetti fondamentali:
        </p>

        <ul className="text-gray-300 text-lg space-y-3 leading-relaxed mt-4">
          <li>• Gestione dello stato (simulata con localStorage).</li>
          <li>• Filtri basati su categorie.</li>
          <li>• Rendering dinamico delle card prodotto.</li>
          <li>• Aggiornamento del carrello in tempo reale.</li>
          <li>• Persistenza dei dati tra refresh.</li>
          <li>• Struttura base da cui nasce ogni vero e-commerce.</li>
        </ul>

        <p className="text-gray-300 text-lg leading-relaxed mt-6">
          È un progetto grezzo, ma “vivo”: clicchi, filtri, ordini, aggiorni,
          ricarichi… e tutto continua a funzionare. È qui che ho davvero iniziato
          a pensare come uno sviluppatore.
        </p>
      </section>

      {/* GALLERY */}
      <GalleryModal
        images={[
          "/projects/mt1.webp",
          "/projects/mt2.webp",
          "/projects/mt3.webp",
          "/projects/mt4.webp",
          "/projects/mt5.webp",
          "/projects/mt6.webp",
          "/projects/mt7.webp",

        ]}
      />

      {/* SCREENSHOT */}
      <section className="mt-5 section-fade mb-20">
        <h2 className="text-2xl font-bold mb-4">Screenshot Home Page</h2>

        <div className="overflow-hidden rounded-xl border border-[#39FF14]/70 shadow-[0_0_12px_#39FF1440] max-w-[300px] mx-auto">
          <img
            src="/projects/metalHome.webp"
            alt="Screenshot Home Sito Metal Works"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* APPROFONDIMENTO TECNICO */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">Approfondimento Tecnico</h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          Tecnicamente il progetto è semplice, ma ha insegnato molto:
        </p>

        <ul className="text-gray-300 text-lg space-y-3 leading-relaxed mt-4">
          <li>• Uso di Bootstrap come primo approccio al responsive design.</li>
          <li>• JavaScript puro senza librerie o framework.</li>
          <li>• Carrello gestito al 100% lato client.</li>
          <li>• Categorie e filtri con funzioni modulari.</li>
          <li>• Persistenza tramite localStorage.</li>
          <li>• Prime logiche di separazione tra dati e interfaccia.</li>
        </ul>

        <p className="text-gray-300 text-lg leading-relaxed mt-6">
          Questo progetto è la fotografia perfetta dell’inizio del mio percorso:
          poche competenze, tanta voglia di fare, e un risultato che — pur
          grezzo — ha gettato le basi per tutto ciò che è arrivato dopo.
        </p>
      </section>

      {/* CTA */}
      <section className="section-fade mb-24">
        <a
          href="https://supermegaprove.altervista.org"
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
