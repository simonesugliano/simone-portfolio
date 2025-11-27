import ScrollAnimations from "../../components/ScrollAnimations";
import GalleryModal from "../../components/GalleryModal";

export const metadata = {
  title: "Progetto — Agriturismo La Bertorella | Simone Sugliano",
  description:
    "Sito ufficiale dell’Agriturismo La Bertorella: design naturale, SEO locale ottimizzata e sistema prenotazioni intelligente con modali dedicate e pre-compilazione dinamica.",
  alternates: { canonical: "/progetti/la-bertorella" },
};

export default function ProgettoBertorellaPage() {
  return (
    <main className="max-w-[1200px] mx-auto bg-black text-white px-6 py-20">
      <ScrollAnimations />

      {/* HERO */}
      <header className="section-fade text-center mb-16">
        <h1 className="section-title text-4xl font-extrabold mb-4">
          Progetto “Agriturismo La Bertorella”
        </h1>

        <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
          Sito moderno, atmosfera naturale e sistema di prenotazioni intelligente
          pensato per un agriturismo reale immerso nelle colline dell’Alta Langa.
        </p>
      </header>

      {/* OBIETTIVI */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">Obiettivo</h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          Il progetto nasce per la realizzazione del sito ufficiale
          dell’Agriturismo La Bertorella: una struttura reale immersa nel verde
          dell’Alta Langa. L’obiettivo era creare un sito elegante, caldo e
          perfettamente coerente con l’identità del luogo, utilizzando una palette
          naturale, layout pulito e massima attenzione alle immagini.
          <br /><br />
          Oltre all’estetica, era essenziale integrare un sistema di prenotazione
          semplice e ben strutturato, in grado di guidare l’utente e ridurre gli
          errori, mantenendo tutte le richieste in un’unica pagina ma distinguendo
          ogni tipologia tramite modali dedicate.
          <br /><br />
          Il sito doveva inoltre:
          <br />
          • presentare camere, piscina, ristorante e territorio in modo ordinato;<br />
          • offrire prenotazioni rapide con modali separate per camere, piscina, ristorante e info;<br />
          • pre-compilare automaticamente i dati quando si arriva da una pagina interna; <br />
          • oscurare le date non disponibili in base alla disponibilità reale; <br />
          • includere esperienze con apertura della traccia Komoot (o placeholder disponibili); <br />
          • integrare una sezione collaborazioni per rafforzare la SEO locale della valle; <br />
          • includere un piccolo blog per migliorare l’indicizzazione organica.
          <br /><br />
          La struttura è completa e pronta per la pubblicazione: si attende
          solamente la consegna delle foto ufficiali da parte del titolare.
        </p>
      </section>

      {/* FUNZIONALITÀ */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">Funzionalità</h2>

        <ul className="text-gray-300 text-lg space-y-3 leading-relaxed">
          <li>✔ Design naturale ispirato a terra, legno e tonalità calde</li>

          <li>✔ Layout completamente responsive e ottimizzato per mobile</li>

          <li>✔ Sezioni dedicate a camere, piscina, ristorante, territorio ed esperienze</li>

          <li>
            ✔ <strong>Prenotazioni tutte nella stessa pagina</strong> ma gestite tramite
            <strong> modali diverse</strong> (Camere, Piscina, Ristorante, Informazioni),
            ognuna con la propria logica e campi dedicati.
          </li>

          <li>
            ✔ <strong>Router dinamico intelligente</strong>: se selezioni una camera
            dalla pagina “Camere”, atterri direttamente sulla pagina “Prenota”
            con la camera già selezionata.
          </li>

          <li>
            ✔ <strong>Date non disponibili oscurate automaticamente</strong> tramite logica basata
            su file <em>.ics</em> sincronizzati con Booking.com
            <br />*(il sistema completo è spiegato nella pagina di approfondimento)*.
          </li>

          <li>
            ✔ <strong>Pre-compilazione intelligente</strong>:  
            se arrivi da una pagina specifica (es. un’esperienza o una voce del ristorante),
            la modale si apre già configurata con l’opzione corretta.
          </li>

          <li>
            ✔ <strong>Esperienze con apertura Komoot</strong>:  
            ogni card attiva apre la traccia Komoot reale (ora placeholder,
            sostituibili in qualsiasi momento).
          </li>

          <li>
            ✔ <strong>Sezione Collaborazioni</strong> pensata per la SEO territoriale:
            rafforza la rete locale e genera autorevolezza sul territorio.
          </li>

          <li>
            ✔ <strong>Mini-blog</strong> integrato, utile per migliorare la reputazione
            Google, aumentare il traffico organico e lavorare sul posizionamento
            locale dell’agriturismo.
          </li>

          <li>
            ✔ Form di prenotazione chiaro, validato lato frontend e compatibile con Flatpickr
          </li>

          <li>
            ✔ SEO locale curata per ricerche come  
            <em>“agriturismo Alta Langa”, “piscina in collina”, “camere in Langa”</em>
          </li>

          <li>
            ✔ Architettura modulare: ogni sezione è facile da aggiornare quando arriveranno
            le foto e i testi definitivi
          </li>
        </ul>
      </section>

      {/* GALLERY */}
      <GalleryModal
        images={[
          "/projects/br1.webp",
          "/projects/br2.webp",
          "/projects/br3.webp",
          "/projects/br4.webp",
          "/projects/br5.webp",
                    "/projects/br6.webp",

                              "/projects/br7.webp",

                                        "/projects/br8.webp",

                                                  "/projects/br9.webp",

                                                            "/projects/br10.webp",

                                                                      "/projects/br11.webp",

                                                                                "/projects/br12.webp",

                                                                                          "/projects/br13.webp",

        ]}
      />

      {/* SCREENSHOT */}
      <section className="mt-5 section-fade mb-20">
        <h2 className="text-2xl font-bold mb-4">Screenshot Home Page</h2>

        <div className="overflow-hidden rounded-xl border border-[#39FF14]/70 shadow-[0_0_12px_#39FF1440] max-w-[300px]">
          <img
            src="/projects/bertoHomePage.webp"
            alt="Screenshot della Home Page del progetto La Bertorella"
            className="w-full h-auto object-cover"
          />
        </div>

        <p className="text-gray-500 text-sm mt-4 text-center">
          (*Altri screenshot sono disponibili nella galleria*)
        </p>
      </section>

      {/* APPROFONDIMENTO */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">Approfondimento Tecnico</h2>

        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Una sezione dedicata analizza in dettaglio tutti gli aspetti tecnici:
          architettura, sistema prenotazioni, modali, gestione date, sincronizzazione
          con file ICS e ottimizzazioni per la SEO locale.
        </p>

        <a
          href="/progetti/la-bertorella/approfondimento"
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
          href="https://agriturismolabertorella.altervista.org/"
          target="_blank"
          className="inline-block px-8 py-4 bg-[#39FF14] text-black font-semibold rounded-xl shadow-[0_0_12px_#39FF14aa] hover:shadow-[0_0_20px_#39FF14] hover:bg-[#39ff14d0] transition-all duration-300"
        >
          Visita il Sito
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
