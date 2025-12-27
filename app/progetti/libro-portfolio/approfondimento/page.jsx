import ScrollAnimations from "../../../components/ScrollAnimations";

export const metadata = {
  title: "Approfondimento Tecnico — Libro Portfolio 3D | Simone Sugliano",
  description:
    "Analisi tecnica dell’esperienza “Libro Portfolio 3D”: architettura vanilla, sincronizzazione animazioni CSS/JS, gestione viewport e orientamento mobile, performance e note di sicurezza sul login client-side.",
  alternates: { canonical: "/progetti/libro-portfolio/approfondimento" },
};

export default function ApprofondimentoLibroPortfolio() {
  return (
    <main className="max-w-[1200px] mx-auto bg-black text-white px-6 py-20">
      <ScrollAnimations />

      {/* HERO */}
      <header className="section-fade text-center mb-16">
        <h1 className="section-title text-4xl font-extrabold mb-4">
          Approfondimento Tecnico — Libro Portfolio 3D
        </h1>

        <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
          Analisi completa dell’esperienza interattiva “Libro Portfolio”: scelte
          architetturali vanilla, sincronizzazione tra animazioni e stato UI,
          gestione edge case mobile e ottimizzazione della resa visiva.
        </p>
      </header>

      {/* INTRODUZIONE */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">
          Il problema di partenza
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          Realizzare un “libro sfogliabile” è semplice se si accetta un effetto
          base. Il problema reale emerge quando l’obiettivo diventa{" "}
          <strong>esperienza credibile e controllata</strong>:
          <br /><br />
          • mantenere una sensazione “fisica” nello sfoglio, senza scatti o
          glitch;<br />
          • gestire animazioni stratificate (ombre, glow, fumo) senza sporcare il
          layout;<br />
          • evitare rotture su mobile con viewport dinamica e change di
          orientamento;<br />
          • mantenere il progetto <strong>statico e deployabile</strong> senza build
          e senza dipendenze runtime pesanti.
          <br /><br />
          Il “Libro Portfolio” nasce per risolvere questi punti con un approccio
          diretto: DOM controllato, CSS 3D, logica JavaScript minimale ma precisa.
        </p>
      </section>

      {/* SOLUZIONE */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">
          La soluzione: rendering controllato (CSS 3D + JS state)
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          Il cuore del progetto è un’idea semplice:{" "}
          <strong>separare interazione e resa visiva</strong>.
          <br /><br />
          <strong>Turn.js</strong> gestisce lo sfoglio (fisica, pagine, input), mentre la
          parte “cinematica” viene gestita da CSS e JavaScript tramite:
          <br />
          • classi “state-based” (es. <em>is-entering</em>, <em>is-ready</em>, <em>is-turning</em>);<br />
          • transizioni e keyframes CSS per effetti visivi;<br />
          • sincronizzazione del timing con listener e micro-delay controllati.
          <br /><br />
          Risultato: l’interazione resta stabile e la parte visiva rimane
          estendibile senza rompere la logica.
        </p>
      </section>

      {/* CODICE */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-3xl font-bold mb-4">Snippet di codice</h2>

        <div className="mt-5 bg-[#111] border border-[#39FF14]/40 p-6 rounded-xl">
          <pre className="text-gray-300 text-sm overflow-auto">
{String.raw`// Esempio: stato UI -> animazioni CSS
function setStage(stage) {
  document.documentElement.dataset.stage = stage;
  // stages: "boot" | "enter" | "ready" | "turning"
}

// Boot -> Enter -> Ready
document.addEventListener("DOMContentLoaded", () => {
  setStage("boot");

  requestAnimationFrame(() => {
    setStage("enter");
    // evita race-condition su alcuni device
    setTimeout(() => setStage("ready"), 350);
  });
});`}
          </pre>
        </div>

        <div className="mt-5 bg-[#111] border border-[#39FF14]/40 p-6 rounded-xl">
          <pre className="text-gray-300 text-sm overflow-auto">
{String.raw`// Edge case mobile: ricalcolo layout con debounce su resize/orientation
function debounce(fn, ms = 180) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), ms);
  };
}

function applyResponsiveLayout() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const isLandscape = w > h;

  // calcola dimensioni libro in base al viewport
  // e aggiorna CSS variables usate da trasformazioni 3D
  document.documentElement.style.setProperty("--vw", w + "px");
  document.documentElement.style.setProperty("--vh", h + "px");
  document.documentElement.dataset.orientation = isLandscape ? "landscape" : "portrait";
}

window.addEventListener("resize", debounce(applyResponsiveLayout));
window.addEventListener("orientationchange", () => setTimeout(applyResponsiveLayout, 150));
applyResponsiveLayout();`}
          </pre>
        </div>
      </section>

      {/* HOSTING SU GITHUB */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">
          Perché un progetto statico (GitHub + Vercel)?
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          L’esperienza è volutamente costruita come progetto statico perché:
          <br /><br />
          • non richiede backend, database o build;<br />
          • si avvia ovunque con un server HTTP;<br />
          • si deploya in modo immediato e affidabile su Vercel;<br />
          • riduce i punti di rottura (dipendenze, versioni, build tools).
          <br /><br />
          Questo approccio è ideale per un case study: mostra controllo tecnico,
          semplicità e capacità di consegnare un prodotto stabile in cloud.
        </p>
      </section>

      {/* ARCHITETTURA */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">
          Architettura del sistema
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          L’architettura è intenzionalmente modulare pur restando vanilla:
          <br /><br />
          <strong>1. Core “Book Engine”</strong>
          <br />
          Inizializza Turn.js, gestisce gli eventi di sfoglio e comunica lo stato
          (turning/idle).
          <br /><br />
          <strong>2. “Stage Controller”</strong>
          <br />
          Governa gli stati dell’esperienza (boot/enter/ready) e attiva gli
          effetti CSS senza introdurre dipendenze.
          <br /><br />
          <strong>3. Responsive Manager</strong>
          <br />
          Calcola dimensioni e scale del libro; gestisce resize e orientamento
          evitando ricalcoli inutili.
          <br /><br />
          <strong>4. Asset Pipeline (statica)</strong>
          <br />
          Immagini e texture ottimizzate (WebP/JPG/PNG) con organizzazione
          prevedibile e caching automatico in CDN.
        </p>
      </section>

      {/* FLUSSO */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">Flusso di lavoro</h2>

        <ol className="text-gray-300 text-lg leading-relaxed space-y-3">
          <li>1. Preload essenziale degli asset critici (per evitare flash e glitch).</li>
          <li>2. Inizializzazione Turn.js e binding degli eventi principali.</li>
          <li>3. Setup delle variabili CSS (dimensioni/scale/3D) in base al viewport.</li>
          <li>
            4. Attivazione progressiva dell’esperienza (boot → enter → ready) per
            ridurre race-condition su mobile.
          </li>
          <li>
            5. Durante lo sfoglio: aggiornamento stato UI (turning) e attivazione di
            effetti visivi controllati.
          </li>
        </ol>
      </section>

      {/* SICUREZZA */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">Sicurezza</h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          Il progetto include un sistema di accesso con password{" "}
          <strong>lato client</strong>. È una scelta consapevole e dichiarata:
          serve come <strong>protezione leggera</strong> per una demo pubblica, non
          come autenticazione robusta.
          <br /><br />
          In una versione production, l’accesso verrebbe gestito con:
          <br />
          • autenticazione server-side o token firmati;<br />
          • protezione delle risorse tramite backend / middleware;<br />
          • rate limiting e logging.
          <br /><br />
          Qui l’obiettivo è dimostrare UX e flusso, mantenendo il progetto statico.
        </p>
      </section>

      {/* EVOLUZIONI */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">
          Possibili sviluppi futuri
        </h2>

        <ul className="text-gray-300 text-lg space-y-3 leading-relaxed">
          <li>• Modalità “performance” con riduzione automatica degli effetti su device lenti</li>
          <li>• Preload intelligente delle pagine successive per sfoglio più fluido</li>
          <li>• Supporto accessibilità: riduzione motion, navigazione da tastiera, focus states</li>
          <li>• Versione “content-driven” con JSON per generare pagine e contenuti</li>
          <li>• Protezione demo con middleware (versione Next) o endpoint tokenizzato</li>
        </ul>
      </section>

      {/* TORNA AL PROGETTO */}
      <section className="section-fade text-center mt-10 mb-24">
        <a
          href="/progetti/libro-portfolio"
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
              rel="noopener noreferrer"
              className="underline text-gray-300 hover:text-[#39FF14] text-lg"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/simone-sugliano-95388022b"
              target="_blank"
              rel="noopener noreferrer"
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
