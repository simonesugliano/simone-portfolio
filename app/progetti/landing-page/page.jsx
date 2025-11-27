import ScrollAnimations from "../../components/ScrollAnimations";
import GalleryModal from "../../components/GalleryModal";

export const metadata = {
  title: "Progetto — Landing Page “Promo Service” | Simone Sugliano",
  description:
    "Landing page verticale, ottimizzata SEO, centrata sulla conversione e integrata con sistema newsletter (Mailchimp). Progetto completo sviluppato con copy reale, CTA forti e form di contatto funzionante.",
  alternates: { canonical: "/progetti/landing-page" },
};

export default function ProgettoLandingPage() {
  return (
    <main className="max-w-[1200px] mx-auto bg-black text-white px-6 py-20">
      <ScrollAnimations />

      {/* HERO */}
      <header className="section-fade text-center mb-16">
        <h1 className="section-title text-4xl font-extrabold mb-4">
          Landing Page — “Promo Service”
        </h1>

        <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
          Una landing page semplice, verticale e interamente focalizzata sulla
          conversione. Creata per invitare gli utenti a iscriversi a una
          newsletter tematica dedicata al giardinaggio, con un copy reale,
          immagini ottimizzate, CTA efficaci, integrazione Mailchimp, modulo
          contatti funzionale e tracking tramite policy Iubenda.
        </p>
      </header>

      {/* OBIETTIVO */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">Obiettivo</h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          L’obiettivo era creare una landing page chiara e scorrevole, senza
          distrazioni, capace di portare l’utente a un’unica azione: iscriversi
          alla newsletter. Il progetto nasce come esercizio di struttura,
          copywriting e conversione, con un layout verticale, pochi elementi e
          un ritmo di scorrimento che alterna testi, immagini e call-to-action
          molto visibili.
          <br /><br />
          Tutti i contenuti sono scritti da zero, con un tono naturale e vicino
          alle esigenze reali dell’utente. Le immagini sono state ottimizzate
          per mantenere la pagina leggera, e la struttura segue le linee tipiche
          delle landing ad alta conversione.
        </p>
      </section>

      {/* FUNZIONALITÀ */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">Funzionalità</h2>

        <ul className="text-gray-300 text-lg space-y-3 leading-relaxed">
          <li>✔ Struttura verticale a scorrimento, senza distrazioni.</li>

          <li>
            ✔ <strong>CTA ripetute</strong> nei punti strategici della pagina per massimizzare la conversione.
          </li>

          <li>
            ✔ <strong>Integrazione completa con Mailchimp</strong> tramite embed
            originale: form reale, gestione consensi, campi richiesti e badge
            ufficiale.
          </li>

          <li>
            ✔ <strong>Copywriting reale</strong>: nessun placeholder. Testi creati
            per accompagnare l’utente verso l’iscrizione.
          </li>

          <li>
            ✔ <strong>Form di contatto secondario</strong> tramite FormSubmit,
            funzionante e pronto a ricevere messaggi.
          </li>

          <li>
            ✔ <strong>Ottimizzazione SEO</strong> con struttura corretta,
            heading ordinati e contenuti leggibili.
          </li>

          <li>
            ✔ <strong>Policy e Cookie Solution di Iubenda</strong> integrate nella pagina.
          </li>

          <li>
            ✔ Immagini reali, compressione leggera e layout coerente.
          </li>
        </ul>
      </section>

      {/* NEWSLETTER */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">
          Newsletter & Lead Magnet
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          Il cuore della landing è l’iscrizione alla newsletter, integrata tramite
          embed originale Mailchimp. L’utente può iscriversi inserendo l’email e
          viene automaticamente aggiunto alla lista. Il form include validazione,
          gestione errori, conferma e badge ufficiale Mailchimp.
          <br /><br />
          Il testo della pagina prepara l’utente, spiegando cosa riceverà: guide,
          consigli stagionali, errori da evitare e ispirazioni vere.
        </p>
      </section>

      {/* FORM DI CONTATTO */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">Form di Contatto</h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          Oltre al form newsletter, la landing include un secondo modulo per
          contattare direttamente l’autore. Basato su FormSubmit, permette di
          inviare nome, email e messaggio — una soluzione leggera e immediata
          per ricevere richieste senza backend complessi. Il form è protetto da
          verifica antispam e configurato per l’invio diretto a casella email.
        </p>
      </section>

      {/* CONTENUTI DELLA LANDING */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">Struttura & Contenuti</h2>

        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          La pagina segue una sequenza verticale pensata per mantenere alta
          l’attenzione: titoli brevi, paragrafi chiari, immagini a sostegno del
          testo e CTA ben distribuite. Ogni sezione ha un solo scopo: ricordare
          all’utente il valore dell’iscrizione.
        </p>

        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Il copy è stato creato seguendo uno stile semplice e narrativo:
          niente tecnicismi inutili, solo informazioni utili, motivanti e
          direttamente applicabili.
        </p>

        <p className="text-gray-300 text-lg leading-relaxed">
          La landing costituisce un ottimo esempio di come guidare un utente da
          un punto A a un punto B, senza deviazioni: un percorso lineare,
          pulito, motivazionale e facile da leggere.
        </p>
      </section>

      {/* SCREENSHOT */}
<section className="mt-5 section-fade mb-20">
  <h2 className="text-2xl font-bold mb-4">Screenshot della Landing</h2>

  <div className="overflow-hidden rounded-xl border border-[#39FF14]/70 shadow-[0_0_12px_#39FF1440] max-w-[200px] mx-auto">
    <img
      src="/projects/landing.webp"
      alt="Screenshot della Landing Page Promo Service"
      className="w-full h-auto object-cover"
    />
  </div>

  <p className="text-gray-500 text-sm mt-4 text-center">
  </p>
</section>


      {/* APPROFONDIMENTO TECNICO */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">
          Approfondimento Tecnico
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          A livello tecnico, il progetto utilizza una struttura estremamente
          leggera: solo HTML, CSS personalizzato e due integrazioni esterne —
          Mailchimp e FormSubmit. Questo lo rende ideale come esempio di landing
          page minimalista e veloce, focalizzata interamente sulla conversione.
        </p>

        <ul className="text-gray-300 text-lg space-y-3 leading-relaxed mt-4">
          <li>
            • Layout verticale per ridurre i punti di fuga e aumentare la retention.
          </li>
          <li>
            • CSS personalizzato con stile coerente e gerarchie tipografiche chiare.
          </li>
          <li>
            • Immagini ottimizzate e compresse per migliorare il caricamento.
          </li>
          <li>
            • Integrazione Iubenda per privacy e cookie, come un sito reale.
          </li>
          <li>
            • Nessun plugin inutile: pagina minimal, veloce e facile da mantenere.
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="section-fade mb-24 text-center">
        <a
          href="https://paginaprova.altervista.org/"
          target="_blank"
          className="inline-block px-8 py-4 bg-[#39FF14] text-black font-semibold rounded-xl shadow-[0_0_12px_#39FF14aa] hover:shadow-[0_0_20px_#39FF14] hover:bg-[#39ff14d0] transition-all duration-300"
        >
          Visita la Landing Page
        </a>
      </section>

      {/* TORNA */}
      <section className="section-fade text-center mt-10 mb-24">
        <a
          href="/"
          className="inline-block px-8 py-4 bg-[#0c0c0c] border border-[#39FF14]/70 text-[#39FF14] font-semibold rounded-xl shadow-[0_0_12px_#39FF1480] hover:shadow-[0_0_22px_#39FF14] hover:bg-[#111] transition-all duration-300"
        >
          ← Torna alla Home
        </a>
      </section>
    </main>
  );
}
