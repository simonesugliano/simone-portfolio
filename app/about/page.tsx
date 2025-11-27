import ScrollAnimations from "../components/ScrollAnimations";

export const metadata = {
  title: "Chi Sono – Simone Sugliano | Web Developer & Frontend Specialist",
  description:
    "Pagina ufficiale di Simone Sugliano, Web Developer specializzato in Next.js, React e performance web. Storia, metodo di lavoro, competenze tecniche e approccio allo sviluppo di siti moderni, veloci e ottimizzati.",
  keywords: [
    "Simone Sugliano",
    "Web Developer",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "Portfolio Web Developer",
    "Sviluppatore Web"
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "Chi Sono – Simone Sugliano | Web Developer",
    description:
      "Conosci Simone Sugliano: Web Developer specializzato in Next.js, React e sviluppo di siti moderni, performanti e ottimizzati SEO.",
    url: "https://TUODOMINIO.com/about",
    siteName: "Simone Sugliano – Portfolio",
    type: "profile"
  }
};

export default function AboutPage() {
  return (
    <main className="max-w-[1200px] mx-auto min-h-screen bg-black text-white px-6 py-20">
 <ScrollAnimations />

 {/* === JSON-LD PERSON === */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Simone Sugliano",
            "jobTitle": "Web Developer",
            "url": "https://TUODOMINIO.com",
            "image": "https://TUODOMINIO.com/avatar.jpg",
            "sameAs": [
              "https://github.com/simonesugliano",
              "https://linkedin.com/in/simone-sugliano-95388022b"
            ],
            "description":
              "Simone Sugliano è un Web Developer specializzato in Next.js, React e nella creazione di siti moderni, veloci e ottimizzati SEO.",
            "knowsAbout": [
              "Next.js",
              "React",
              "JavaScript",
              "Frontend Development",
              "Performance Web",
              "SEO Tecnica",
              "UX/UI"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "IT"
            }
          })
        }}
      />
      {/* =============================== */}
      {/*            HERO INTRO           */}
      {/* =============================== */}
<header className="section-fade text-center mb-16">
  <h1 className="section-title text-5xl font-extrabold mb-4">Chi Sono</h1>

 <p className="section-fade text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
  Sono <span className="text-[#39FF14] font-semibold">Simone Sugliano</span>,  
  Web Developer con un approccio pratico, diretto e orientato alle soluzioni. <br /><br />
  Costruisco <span className="text-[#39FF14] font-semibold">sistemi web moderni, veloci e puliti</span>,  
  progettati per funzionare senza complicazioni inutili.  
  Quando c’è un problema, lo analizzo e lo risolvo con metodo.
</p>

      </header>

      {/* =============================== */}
      {/*             LA MIA STORIA       */}
      {/* =============================== */}
<section className="section-fade mb-20">
  <h2 className="section-title text-3xl font-bold mb-6">La mia storia</h2>

  <p className="section-fade text-gray-300 text-lg leading-relaxed mb-4">
          Vengo da percorsi molto concreti: lavori fisici, problemi reali,
          responsabilità immediate. Questo mi ha dato un’attitudine diretta:
          <span className="text-white font-semibold">
            {" "}quando c’è un problema, si risolve.
          </span>
        </p>

        <p className="text-gray-300 text-lg leading-relaxed mb-4">
         La programmazione è arrivata come una scintilla, poi è diventata 
un modo di costruire soluzioni che funzionano, rimangono nel tempo 
e semplificano la vita delle persone.

        </p>

        <p className="text-gray-300 text-lg leading-relaxed">
          Non punto alla complessità.  
          Punto alla <span className="text-[#39FF14] font-semibold">solidità</span>,
          alla <span className="text-[#39FF14] font-semibold">velocità</span>,
          alla <span className="text-[#39FF14] font-semibold">chiarezza</span>.
        </p>

        {/* === BLOG (NUOVO BLOCCO) === */}
        <p className="text-gray-300 text-lg leading-relaxed mt-6">
          Sto anche costruendo un <span className="text-white font-semibold">blog tecnico</span>,
          dove condividerò metodi, tutorial semplici e analisi su performance,
          SEO, React, Next.js e sviluppo orientato ai problemi reali.
          Sarà uno spazio personale, professionale e senza fuffa.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-6 font-bold">
Se cerchi un developer che non si limita a “fare il sito”, 
ma costruisce strutture solide, chiare e ragionate, sei nel posto giusto.
        </p>
      </section>

      {/* =============================== */}
      {/*             COME LAVORO         */}
      {/* =============================== */}
      <section className="section-fade mb-20">
  <h2 className="section-title text-3xl font-bold mb-6">Come lavoro</h2>

  <ul className="section-fade space-y-4 text-gray-300 text-lg leading-relaxed">

          <li>🔹 <span className="text-white font-semibold">Approccio concreto:</span> identifico il problema e costruisco una soluzione reale.</li>
          <li>🔹 <span className="text-white font-semibold">Pulizia:</span> codice chiaro, leggibile e mantenibile.</li>
          <li>🔹 <span className="text-white font-semibold">Performance:</span> un sito deve essere veloce, dal mobile al 4K.</li>
          <li>🔹 <span className="text-white font-semibold">SEO tecnica:</span> strutture semantiche, metadata, velocità, LCP ottimizzato.</li>
          <li>🔹 <span className="text-white font-semibold">Curva di apprendimento continua:</span> ogni progetto mi fa crescere.</li>
        </ul>
      </section>

      {/* =============================== */}
      {/*             COMPETENZE          */}
      {/* =============================== */}
      <section className="section-fade mb-20">
  <h2 className="section-title text-3xl font-bold mb-6">Competenze</h2>

  <div className="section-fade grid sm:grid-cols-2 gap-10 text-gray-300 text-lg">


          {/* --- FRONTEND --- */}
          <div>
            <h3 className="text-xl font-bold mb-3 text-[#39FF14]">Frontend</h3>
            <ul className="space-y-2">
              <li>✔ Next.js (App Router)</li>
              <li>✔ React Hooks & Components</li>
              <li>✔ JavaScript moderno (ES2022+)</li>
              <li>✔ TailwindCSS / Bootstrap 5</li>
              <li>✔ Responsive design & UI pulite</li>
            </ul>
          </div>

          {/* --- PERFORMANCE & SEO --- */}
          <div>
            <h3 className="text-xl font-bold mb-3 text-[#39FF14]">Performance & SEO</h3>
            <ul className="space-y-2">
              <li>✔ Ottimizzazione LCP / CLS / FID</li>
              <li>✔ SEO tecnica e semantica</li>
              <li>✔ Sitemap & robots</li>
              <li>✔ JSON-LD e Open Graph</li>
              <li>✔ Lighthouse & PageSpeed</li>
            </ul>
          </div>

          {/* --- SCRITTURA & COPY --- */}
          <div>
            <h3 className="text-xl font-bold mb-3 text-[#39FF14]">Scrittura & Comunicazione</h3>
            <ul className="space-y-2">
              <li>✔ Copywriting orientato alla conversione</li>
              <li>✔ Scrittura tecnica chiara</li>
              <li>✔ Microcopy UX (bottoni, etichette, messaggi)</li>
              <li>✔ Storytelling per pagine personali</li>
              <li>✔ Strutturazione contenuti SEO</li>
            </ul>
          </div>

          {/* --- WORKFLOW & TOOLING --- */}
          <div>
            <h3 className="text-xl font-bold mb-3 text-[#39FF14]">Strumenti & Workflow</h3>
            <ul className="space-y-2">
              <li>✔ Git & GitHub (workflow pulito)</li>
              <li>✔ Vercel (deploy professionale)</li>
              <li>✔ Ottimizzazione immagini WebP/AVIF</li>
              <li>✔ Gestione hosting e domini</li>
              <li>✔ Debugging & manutenzione continua</li>
            </ul>
          </div>
        </div>
      </section>

    {/* =============================== */}
{/*         PRESENZA ONLINE         */}
{/* =============================== */}
<section className="section-fade mb-20">
  <h2 className="section-title text-3xl font-bold mb-6">Presenza Online</h2>

  <p className="text-gray-300 text-lg leading-relaxed mb-6">
    Sto costruendo un ecosistema digitale completo fatto di sviluppo, 
    comunicazione e presenza online. Oltre ai miei progetti personali,
    collaboro anche con piccole realtà locali curando parte dei loro contenuti
    digitali e supportando la gestione dei social.
  </p>

  <ul className="space-y-3 text-gray-300 text-lg leading-relaxed">
    <li>🔹 <span className="text-white font-semibold">Blog tecnico</span> (in costruzione): articoli, guide e casi studio.</li>
<li>🔹 <span className="text-white font-semibold">GitHub</span> dove pubblico progetti reali, codice e soluzioni tecniche.</li>
    <li>🔹 <span className="text-white font-semibold">LinkedIn</span> dove condivido progressi, idee, progetti e networking.</li>
    <li>🔹 <span className="text-white font-semibold">Collaborazioni social</span> con realtà locali per contenuti e consulenze digitali.</li>
  </ul>
</section>


      {/* =============================== */}
      {/*            CONTATTI             */}
      {/* =============================== */}
      <footer id="contatti" className="section-fade py-20 px-6 bg-black text-white" role="contentinfo">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title text-4xl font-bold mb-6">Contatti</h2>

          <p className="text-lg text-gray-300 mb-4 section-fade">
            Se vuoi collaborare o hai un progetto da sviluppare, scrivimi liberamente.
          </p>

          <p className="text-xl font-semibold mb-8 section-fade">
            Email:{" "}
            <a href="mailto:simone.sugliano@gmx.com" className="underline underline-offset-2 hover:text-[#39FF14]">
simone.sugliano@gmx.com            </a>
          </p>

          <nav className="flex items-center justify-center gap-6 section-fade" aria-label="Social Links">
            <a href="https://github.com/simonesugliano"  target="_blank" className="underline text-gray-300 hover:text-[#39FF14]
">GitHub</a>
            <a href="https://linkedin.com/in/simone-sugliano-95388022b"  target="_blank" className="underline text-gray-300 hover:text-[#39FF14]">LinkedIn</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
