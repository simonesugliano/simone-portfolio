import ScrollAnimations from "../../../components/ScrollAnimations";

export const metadata = {
  title: "Approfondimento Tecnico — Sistema Calendario ICS | La Bertorella",
  description:
    "Analisi tecnica del sistema di sincronizzazione ICS per le prenotazioni dell’Agriturismo La Bertorella. Architettura, flusso, hosting GitHub e gestione dinamica delle date.",
  alternates: { canonical: "/progetti/la-bertorella/approfondimento" },
};

export default function ApprofondimentoICS() {
  return (
    <main className="max-w-[1200px] mx-auto bg-black text-white px-6 py-20">
      <ScrollAnimations />

      {/* HERO */}
      <header className="section-fade text-center mb-16">
        <h1 className="section-title text-4xl font-extrabold mb-4">
          Approfondimento Tecnico — Sistema Calendario ICS
        </h1>

        <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
          Analisi completa del sistema di sincronizzazione basato su file ICS,
          utilizzato per gestire la disponibilità delle camere
          dell’Agriturismo La Bertorella.
        </p>
      </header>

      {/* INTRODUZIONE */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">
          Il problema di partenza
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          L’Agriturismo La Bertorella utilizza Booking.com per ricevere una parte
          delle prenotazioni. Tuttavia, Booking non mette a disposizione
          un’API completamente aperta per leggere in tempo reale la
          disponibilità delle camere.
          <br /><br />
          Questo crea un problema concreto:
          <br />
          <strong>
            come evitare che un utente invii una richiesta di prenotazione in un
            giorno già occupato?
          </strong>
          <br /><br />
          Era necessario trovare un modo per sincronizzare il sito con le
          prenotazioni già presenti su Booking, senza:
          <br />
          • strumenti server-side costosi;<br />
          • plugin di terze parti;<br />
          • dipendenze esterne;<br />
          • manutenzione complicata per il cliente.
        </p>
      </section>

      {/* SOLUZIONE */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">
          La soluzione: sincronizzazione tramite file ICS
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          Booking.com permette l’esportazione delle prenotazioni tramite file{" "}
          <strong>.ics</strong>, lo stesso formato utilizzato da Google Calendar,
          Apple Calendar e Outlook.
          <br /><br />
          Questi file vengono aggiornati automaticamente da Booking ad ogni
          nuova prenotazione o cancellazione.
          <br /><br />
          Il sito utilizza questi file per:
        </p>

        <ul className="text-gray-300 text-lg leading-relaxed space-y-2 mt-4">
          <li>• leggere la disponibilità reale delle camere</li>
          <li>• oscurare automaticamente le date non disponibili</li>
          <li>• evitare richieste su date già prenotate</li>
          <li>• mantenere il calendario sempre aggiornato</li>
        </ul>
      </section>

 {/* CODICE */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-3xl font-bold mb-4">Snippet di codice</h2>

        <div className="mt-5 bg-[#111] border border-[#39FF14]/40 p-6 rounded-xl">
  <pre className="text-gray-300 text-sm overflow-auto">
{String.raw`// Inizializza i calendari con le date non disponibili
function setupCalendars() {
  flatpickr("#checkin", {
    dateFormat: "d/m/Y",
    altInput: true,
    altFormat: "l, d F Y",
    locale: "it",
    minDate: "today",
    disable: bookedDates
  });

  flatpickr("#checkout", {
    dateFormat: "d/m/Y",
    altInput: true,
    altFormat: "l, d F Y",
    locale: "it",
    minDate: "today",
    disable: bookedDates
  });
}
`}
</pre>
</div>
<div className="mt-5 bg-[#111] border border-[#39FF14]/40 p-6 rounded-xl">
  <pre className="text-gray-300 text-sm overflow-auto">
{String.raw`// Setup completo al caricamento pagina
document.addEventListener("DOMContentLoaded", async () => {
  await loadBookedDates();  // Scarica dal repo GitHub
  setupCalendars();         // Inizializza Flatpickr
});

`}
</pre>
</div>
</section>
      {/* HOSTING SU GITHUB */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">
          Perché ospitare i file ICS su GitHub?
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          I file .ics vengono esportati da Booking tramite un link pubblico.  
          Per utilizzarli nel sito serviva un luogo stabile, affidabile e
          accessibile via HTTPS.
          <br /><br />
          La scelta più efficace è stata:
          <br />
          <strong>creare un repository GitHub dedicato ai file ICS</strong>.
          <br /><br />
          Vantaggi:
        </p>

        <ul className="text-gray-300 text-lg space-y-2 leading-relaxed mt-4">
          <li>• Hosting HTTPS gratuito</li>
          <li>• Percorsi stabili e permanenti</li>
          <li>• Facilità di aggiornamento tramite GitHub Actions</li>
          <li>• Separazione perfetta tra codice del sito e dati</li>
          <li>• Caricamento rapido lato client senza server dedicato</li>
        </ul>
      </section>

      {/* ARCHITETTURA */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">
          Architettura del sistema
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          Il sistema si basa su una pipeline semplice, stabile e scalabile.
          <br /><br />
          <strong>1. Booking.com → Esporta file ICS</strong>
          <br />
          Ogni camera ha un link ICS generato da Booking.
          <br /><br />
          <strong>2. GitHub Actions → Scarica e aggiorna i file ICS</strong>
          <br />
          Un workflow automatico li scarica ogni ora e li salva nel repository.
          <br /><br />
          <strong>3. Il sito → Legge i file ICS da GitHub</strong>
          <br />
          La pagina prenotazioni effettua una richiesta fetch ai file ospitati nel repo.
          <br /><br />
          <strong>4. Flatpickr → Oscura le date prenotate</strong>
          <br />
          Le prenotazioni vengono convertite in un array di date disabilitate.
        </p>
      </section>

      {/* FLUSSO */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">Flusso di lavoro</h2>

        <ol className="text-gray-300 text-lg leading-relaxed space-y-3">
          <li>1. GitHub Actions scarica i file ICS aggiornati.</li>
          <li>2. I file vengono salvati nella cartella /ics del repository.</li>
          <li>
            3. Il sito, quando si apre la pagina prenotazioni, fa una richiesta ai
            file nel repo.
          </li>
          <li>
            4. Le date presenti negli eventi ICS vengono parse e trasformate in
            formato leggibile da Flatpickr.
          </li>
          <li>
            5. Il calendario si aggiorna automaticamente, oscurando le date
            impossibili da prenotare.
          </li>
        </ol>
      </section>

      {/* SICUREZZA */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">Sicurezza</h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          I file ICS non contengono dati sensibili: solo date e numero di
          prenotazioni.  
          Per questo possono essere ospitati in un repository pubblico.
          <br /><br />
          Inoltre:
          <br />
          • nessuna informazione del cliente viene esposta<br />
          • nessuna API privata viene utilizzata<br />
          • tutto avviene lato client con massima trasparenza
        </p>
      </section>

      {/* EVOLUZIONI */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">
          Possibili sviluppi futuri
        </h2>

        <ul className="text-gray-300 text-lg space-y-3 leading-relaxed">
          <li>• Gestione anche delle prenotazioni ricevute via telefono o email</li>
          <li>• Aggiunta di eventi ricorrenti (es. chiusure stagionali)</li>
          <li>• Dashboard privata per il titolare</li>
          <li>• Validazioni dinamiche avanzate</li>
        </ul>
      </section>

      {/* TORNA AL PROGETTO */}
      <section className="section-fade text-center mt-10 mb-24">
        <a
          href="/progetti/la-bertorella"
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
            Se vuoi collaborare o hai un progetto da sviluppare, scrivimi liberamente.
          </p>

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
