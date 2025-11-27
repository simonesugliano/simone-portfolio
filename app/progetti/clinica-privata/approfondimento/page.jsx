import ScrollAnimations from "@/app/components/ScrollAnimations";

export const metadata = {
  title: "Approfondimento Tecnico – Clinica Privata | Simone Sugliano",
  description:
    "Analisi tecnica del progetto Clinica Privata: architettura Firebase, moduli personalizzati, sistema di prenotazioni, gestione dati e ottimizzazioni di performance.",
  alternates: { canonical: "/progetti/clinica-privata/approfondimento" },
};

export default function ApprofondimentoPage() {
  return (
    <main className="max-w-[1200px] mx-auto text-white bg-black px-6 py-20">
      <ScrollAnimations />

      {/* HERO */}
      <header className="section-fade text-center mb-16">
        <h1 className="text-4xl font-extrabold mb-4">
          Approfondi<wbr />mento Tecnico – <span className="text-[#39FF14]">Clinica Privata</span>
        </h1>
        <p className="section-fade text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
          Dettagli tecnici, logiche dietro le quinte, architettura e soluzioni
          che hanno reso questo progetto unico e funzionale.
        </p>
      </header>

      {/* PROBLEMA */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-3xl font-bold mb-4">Il problema da risolvere</h2>
        <p className="text-gray-300 leading-relaxed text-lg">
  La clinica necessitava di una soluzione digitale chiara e moderna per 
  mostrare servizi e specialisti, ma soprattutto di un sistema di 
  prenotazione semplice, affidabile e privo di errori. I metodi più semplici 
  (form statici, email manuali, gestione telefonica) comportavano ritardi, 
  comunicazioni non chiare e difficoltà di organizzazione interna.
  <br /><br />
  Il cliente aveva bisogno di:
  <br />
  • uno strumento che registrasse realmente le prenotazioni;<br />
  • conferme automatiche e immediate via email;<br />
  • un'interfaccia che accompagnasse l’utente passo passo, evitando errori;<br />
  • uno storico consultabile in tempo reale da qualsiasi dispositivo;<br />
  • un sistema facile da scalare e da mantenere nel tempo.
</p>

      </section>

      {/* SOLUZIONE */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-3xl font-bold mb-4">La soluzione tecnica</h2>
        <p className="text-gray-300 leading-relaxed text-lg mb-6">
  La soluzione è stata progettata come un’applicazione web modulare, con logiche 
  separate e componenti riutilizzabili. L’obiettivo era garantire robustezza, 
  sicurezza e chiarezza, mantenendo il codice semplice da estendere in futuro.
  <br /><br />
  Le scelte principali:
</p>

<ul className="text-gray-300 leading-relaxed text-lg space-y-3">
  <li>
    ✔ <strong>Firebase Firestore</strong> come database NoSQL per archiviare
    prenotazioni, timestamp, specialità e storico delle richieste.
  </li>

  <li>
    ✔ <strong>Formspree</strong> per gestire automaticamente l’invio di email 
    di conferma e annullamento prenotazione, senza backend personalizzato.
  </li>

  <li>
    ✔ <strong>SweetAlert2</strong> per modali visive chiare e professionali,
    inclusi loader, conferme d’invio e messaggi di errore personalizzati.
  </li>

  <li>
    ✔ <strong>Architettura modulare</strong> con funzioni separate per:
    validazione input, invio dati, salvataggio Firestore, gestione errori.
  </li>

  <li>
    ✔ <strong>UI guidata</strong>: ogni fase della prenotazione restituisce
    feedback visivo immediato, riducendo possibilità di errori.
  </li>
</ul>

      </section>

      {/* CODICE */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-3xl font-bold mb-4">Snippet di codice</h2>

        <div className="mt-5 bg-[#111] border border-[#39FF14]/40 p-6 rounded-xl">
  <pre className="text-gray-300 text-sm overflow-auto">
    
{`// Salvataggio di una prenotazione reale su Firestore
await window.addDoc(window.collection(window.db, "prenotazioni"), {
  email: emailCliente,
  medico: medicoSelezionato,
  specialita: specialitaSelezionata,
  data: dataPren,
  ora: oraPren,
  timestamp: window.serverTimestamp()
});
`}
  </pre>
</div>

<div className="mt-5 bg-[#111] border border-[#39FF14]/40 p-6 rounded-xl">
  <pre className="text-gray-300 text-sm overflow-auto">
{`// Invio email di conferma tramite Formspree
const response = await fetch("https://formspree.io/f/xxxxx", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    email: emailCliente,
    medico: medicoSelezionato,
    data: dataPren,
    ora: oraPren,
    messaggio: "La tua prenotazione è stata ricevuta correttamente."
  })
});
`}
  </pre>
</div>
<div className="mt-5 bg-[#111] border border-[#39FF14]/40 p-6 rounded-xl">
  <pre className="text-gray-300 text-sm overflow-auto">
{`// SweetAlert per feedback professionale all’utente
await Swal.fire({
  title: "Prenotazione inviata",
  text: "Ti abbiamo mandato una conferma via email.",
  icon: "success",
  background: "#0b0b0b",
  color: "#e0ffe0",
  confirmButtonColor: "#39FF14",
  showConfirmButton: true,
});
`}
  </pre>
</div>

      </section>

      {/* PERFORMANCE */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-3xl font-bold mb-4">Performance & Ottimizzazioni</h2>

        <ul className="text-gray-300 text-lg leading-relaxed space-y-3">
<li>✔ Architettura predisposta per integrare lazy loading su immagini e modali</li>
<li>✔ Possibilità di introdurre WebP e ulteriori ottimizzazioni LCP nelle prossime revisioni</li>
  <li>✔ Riduzione DOM inutili e componenti secondari caricati on-demand</li>
  <li>✔ Validazione input lato frontend per ridurre errori lato utente</li>
  <li>✔ Loader asincroni per evitare freeze nella UI</li>
  <li>✔ Salvataggio su Firestore con timestamp server-side per maggiore affidabilità</li>
  <li>✔ Architettura pensata per scalabilità: nuovi medici o servizi aggiunti semplicemente via JSON</li>
</ul>

      </section>

      {/* RISULTATI */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-3xl font-bold mb-4">Risultato finale</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
  La clinica ottiene un sistema completamente funzionante che permette di 
  gestire prenotazioni, inviare conferme automatiche via email e consultare 
  lo storico delle richieste in modo rapido e centralizzato.
  <br /><br />
  La UI guidata ha ridotto gli errori degli utenti e ha reso l’esperienza 
  più professionale e affidabile. L’architettura permette di scalare il 
  progetto senza riscrivere codice: nuovi medici, servizi e sezioni possono 
  essere aggiunti facilmente.
  <br /><br />
  Il risultato è una soluzione stabile, moderna e soprattutto utile per 
  risolvere un problema reale.
</p>
      </section>

{/* MIGLIORAMENTI FUTURI */}
<section className="section-fade mb-20">
  <h2 className="section-title text-3xl font-bold mb-4">
    Possibili miglioramenti futuri
  </h2>

  <p className="text-gray-300 text-lg leading-relaxed mb-6">
    Sebbene il progetto sia pienamente funzionante, l’architettura permette di 
    introdurre ulteriori ottimizzazioni e funzionalità in modo naturale. Alcuni 
    miglioramenti pianificabili in una versione successiva includono:
  </p>

  <ul className="text-gray-300 text-lg leading-relaxed space-y-3">
    <li>
      ✔ <strong>Integrazione del lazy loading</strong> su immagini
      per migliorare ulteriormente la velocità percepita.
    </li>

    <li>
      ✔ <strong>Conversione completa delle immagini in WebP</strong> e 
      ottimizzazione del Largest Contentful Paint.
    </li>

    <li>
      ✔ <strong>Dashboard interna</strong> per visualizzare e gestire le 
      prenotazioni in tempo reale (basata su Firestore).
    </li>

    <li>
      ✔ <strong>Gestione autenticazione per lo staff</strong> tramite 
      Firebase Auth, così da consentire modifiche e consultazione dei dati in 
      modo sicuro.
    </li>

    <li>
      ✔ <strong>Integrazione di un sistema di annullamento automatico</strong> 
      via email, collegato direttamente allo storico Firestore.
    </li>

    <li>
      ✔ <strong>Versione PWA</strong> per migliorare usabilità su dispositivi 
      mobile e permettere accesso offline a parti del sito.
    </li>
  </ul>

  <p className="text-gray-300 text-lg leading-relaxed mt-6">
    L’architettura attuale è pensata per supportare facilmente questi 
    aggiornamenti, mantenendo il codice scalabile e organizzato.
  </p>
</section>

      {/* TORNA INDIETRO */}
      <section className="section-fade text-center mb-24">
        <a
          href="/progetti/clinica-privata"
          className="
            inline-block
            px-8 py-4
            bg-[#39FF14] text-black font-semibold
            rounded-xl
            shadow-[0_0_12px_#39FF14aa]
            hover:shadow-[0_0_22px_#39FF14]
            hover:bg-[#39ff14d0]
            transition-all duration-300
          "
        >
          Torna al Progetto
        </a>
      </section>

      {/* FOOTER */}
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
