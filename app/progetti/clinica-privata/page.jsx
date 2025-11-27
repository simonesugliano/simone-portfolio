import ScrollAnimations from "../../components/ScrollAnimations";
import GalleryModal from "../../components/GalleryModal";

export const metadata = {
  title: "Progetto — Clinica Privata | Simone Sugliano",
  description:
    "Sviluppo su misura per una clinica privata: sito moderno, funzionalità avanzate e soluzione reale per un problema reale.",
  alternates: { canonical: "/progetti/clinica-privata" },
};

export default function ClinicaPrivataPage() {
  return (
    <main className="max-w-[1200px] mx-auto bg-black text-white px-6 py-20">
      <ScrollAnimations />

      {/* HERO */}
      <header className="section-fade text-center mb-16">
        <h1 className="section-title text-4xl font-extrabold mb-4">
          Progetto “Clinica Privata”
        </h1>

        <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
          Sito professionale, interfaccia moderna e funzionalità avanzate su
          misura. Un progetto reale con esigenze reali.
        </p>
      </header>

      {/* OBIETTIVI */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">Obiettivo</h2>

        <p className="text-gray-300 text-lg leading-relaxed">
  Il progetto nasce come incarico reale per la realizzazione del sito di una
  clinica privata, con l’esigenza di costruire una presenza digitale moderna,
  chiara e affidabile. L’obiettivo era creare un’interfaccia semplice da
  navigare, con contenuti organizzati in modo intuitivo così da permettere ai
  pazienti di orientarsi rapidamente tra servizi, medici e contatti.
  <br /><br />
  Ogni fase del percorso — dalla scelta della specialità fino alla richiesta di
  prenotazione — doveva essere supportata da conferme visive e feedback chiari,
  così da rendere il processo trasparente e comprensibile per l’utente.
  <br /><br />
  Il sito doveva inoltre:
  <br />
  • presentare servizi sanitari e specializzazioni in modo ordinato;<br />
  • valorizzare il team medico attraverso schede dinamiche dedicate;<br />
  • integrare un sistema di contatto immediato e affidabile;<br />
  • garantire performance elevate, accessibilità e SEO tecnica curata;<br />
  • offrire una base scalabile per funzionalità avanzate (come conferme via
  mail e storico delle prenotazioni).
  <br /><br />
  Il risultato è un progetto completo, elegante e funzionale, costruito con un
  approccio orientato alla qualità e alla reale esperienza dell’utente.
</p>


              
        
        
      </section>

      {/* FUNZIONALITÀ */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">Funzionalità</h2>

        <ul className="text-gray-300 text-lg space-y-3 leading-relaxed">
          <li>✔ Design responsive per mobile, tablet e desktop</li>
          <li>✔ Struttura modulare e pulita, facile da mantenere e ampliare</li>
          <li>✔ Schede medici dinamiche, con informazioni chiare e ben organizzate</li>
          <li>✔ Form di contatto ottimizzato, con invio diretto a email</li>
          <li>✔ SEO tecnica curata, con attenzione a struttura, performance e accessibilità</li>
          <li>✔ Sezione “Dove Siamo” integrata con mappa e riferimenti rapidi</li>
          <li>✔ Organizzazione chiara dei contenuti, pensata per una navigazione intuitiva</li>

        </ul>
      </section>
{/* LIGHTBOX GALLERIA DIETRO PULSANTE */}
          <GalleryModal
            images={[
              "/projects/cl1.png",
              "/projects/cl2.png",
              "/projects/cl3.webp",
              "/projects/cl4.webp",
              "/projects/cl5.webp",
              "/projects/cl6.webp",
              "/projects/cl7.webp",
              "/projects/cl8.webp",
              "/projects/cl9.webp",
              "/projects/cl10.webp",
              "/projects/cl11.webp",
            ]}
          />
          {/* FINE LIGHTBOX GALLERIA DIETRO PULSANTE */}

      {/* SCREENSHOT */}
      <section className="mt-5 section-fade mb-20">
  <h2 className="text-2xl font-bold mb-4">Screenshot Home Page</h2>

  <div className="overflow-hidden rounded-xl border border-[#39FF14]/70 shadow-[0_0_12px_#39FF1440] max-w-[300px]">
    <img
      src="/projects/homeDemoClinica.webp"
      alt="Screenshot della Home Page del progetto Clinica Privata"
      className="w-full h-auto object-cover"
    />
  </div>

  <p className="text-gray-500 text-sm mt-4 text-center">
    (*Altri screenshot sono disponibili nella galleria*)
  </p>
</section>

     {/* APPROFONDIMENTO TECNICO */}
<section className="section-fade mb-20">
  <h2 className="text-2xl font-bold mb-4">Approfondimento Tecnico</h2>

  <p className="text-gray-300 text-lg leading-relaxed mb-6">
    Per chi desidera approfondire la parte tecnica, ho preparato una sezione dedicata che analizza:
     </p> <br />
<ol>
<li>• le tecnologie utilizzate</li>

<li>• le strutture dati</li>

<li>• l’architettura del progetto</li>

<li>• il sistema di contatto</li>

<li>• la logica delle modali dinamiche</li>

<li>• l’organizzazione del codice e la scalabilità</li>
</ol>
 
<br /><br />
  <a
 href="/progetti/clinica-privata/approfondimento"
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
          href="https://democlinicaprivata.altervista.org/"
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
    
    {/* TITOLO */}
    <h2 className="section-title text-4xl font-bold">Contatti</h2>

    {/* SOTTOTITOLO */}
    <p className="text-lg text-gray-300 leading-relaxed max-w-xl mx-auto section-fade">
      Se vuoi collaborare o hai un progetto da sviluppare, scrivimi liberamente.
    </p>

    {/* BLOCCO CONTATTI */}
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

    {/* SOCIAL */}
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
