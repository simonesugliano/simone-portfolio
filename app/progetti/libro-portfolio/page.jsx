import ScrollAnimations from "../../components/ScrollAnimations";
import GalleryModal from "../../components/GalleryModal";

export const metadata = {
  title: "Progetto — Libro Portfolio 3D | Simone Sugliano",
  description:
    "Case study frontend sviluppato in HTML, CSS e JavaScript vanilla: libro 3D sfogliabile con animazioni avanzate, rendering controllato e gestione edge case mobile (viewport, resize, orientamento).",
  alternates: { canonical: "/progetti/libro-portfolio" },
};

export default function ProgettoLibroPortfolioPage() {
  return (
    <main className="max-w-[1200px] mx-auto bg-black text-white px-6 py-20">
      <ScrollAnimations />

      {/* HERO */}
      <header className="section-fade text-center mb-16">
        <h1 className="section-title text-4xl font-extrabold mb-4">
          Progetto “Libro Portfolio — Esperienza Web Interattiva 3D”
        </h1>

        <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
          Case study frontend costruito volutamente senza framework moderni:
          un libro 3D sfogliabile con animazioni cinematiche, controllo diretto
          del DOM e attenzione ai dettagli di rendering su desktop e mobile.
        </p>
      </header>

      {/* OBIETTIVI */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">Obiettivo</h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          Il progetto nasce come <strong>esperienza interattiva da portfolio</strong>,
          pensata per dimostrare competenze reali di sviluppo frontend a basso livello:
          gestione diretta di <strong>animazioni CSS</strong>, <strong>trasformazioni 3D</strong>,
          e logica JavaScript senza astrazioni.
          <br /><br />
          La scelta di evitare framework è intenzionale: l’obiettivo è mostrare
          padronanza dei fondamentali e capacità di controllare il rendering, la
          fluidità e la sincronizzazione tra stati UI e animazioni.
          <br /><br />
          In particolare, il progetto si concentra su:
          <br />
          • <strong>Interazione realistica</strong> con pagine sfogliabili in stile “libro fisico”;<br />
          • <strong>Animazioni stratificate</strong> (glow, ombre, fumo, materializzazione);<br />
          • <strong>Gestione edge case mobile</strong> (viewport dinamica, resize, orientamento);<br />
          • <strong>Struttura statica</strong> pronta per ambienti cloud e deploy immediato;<br />
          • <strong>Ottimizzazione asset</strong> per performance e resa visiva (WebP/PNG/JPG).
        </p>
      </section>

      {/* FUNZIONALITÀ */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">Funzionalità</h2>

        <ul className="text-gray-300 text-lg space-y-3 leading-relaxed">
          <li>✔ Libro 3D interattivo con <strong>Turn.js</strong> e gestione eventi custom</li>

          <li>✔ Animazioni CSS avanzate: <strong>glow</strong>, <strong>ombre</strong>, <strong>fumo</strong>, <strong>materializzazione</strong></li>

          <li>✔ Rendering fluido con <strong>sincronizzazione JavaScript + CSS</strong> (stati UI e timing)</li>

          <li>✔ Layout responsive ottimizzato per desktop e mobile</li>

          <li>✔ Gestione orientamento mobile: <strong>portrait / landscape</strong> con adattamento dinamico</li>

          <li>✔ Gestione <strong>viewport e resize</strong> per evitare glitch e ricalcolare il layout in modo stabile</li>

          <li>✔ Sistema di accesso con <strong>password lato client</strong> (protezione leggera, orientata alla demo)</li>

          <li>✔ Asset ottimizzati e organizzati (PNG, JPG, WebP)</li>

          <li>✔ Deploy automatico tramite GitHub + Vercel</li>

          <li>
            ✔ Progetto volutamente <strong>senza build</strong>: esegue su qualsiasi server statico
            (utile per ambienti cloud e preview rapide)
          </li>
        </ul>
      </section>

      {/* GALLERY */}
      <GalleryModal
        images={[
          "/projects/book1.png",
          "/projects/book2.png",
          "/projects/book3.png",
          "/projects/book4.png",
          "/projects/book5.png",
        ]}
      />

      {/* SCREENSHOT */}
      <section className="mt-5 section-fade mb-20">
        <h2 className="text-2xl font-bold mb-4">Screenshot</h2>

        <div className="overflow-hidden rounded-xl border border-[#39FF14]/70 shadow-[0_0_12px_#39FF1440] max-w-[300px]">
          <img
            src="/projects/libroHomePage.png"
            alt="Screenshot della Home Page del progetto Libro Portfolio 3D"
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
          Una sezione dedicata descrive nel dettaglio le scelte implementative:
          architettura del progetto, gestione animazioni e stati, logica responsive,
          gestione orientamento e le strategie adottate per mantenere il rendering
          stabile e fluido su dispositivi diversi.
        </p>

        <a
          href="/progetti/libro-portfolio/approfondimento"
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
          href="https://libro-portfolio.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-[#39FF14] text-black font-semibold rounded-xl shadow-[0_0_12px_#39FF14aa] hover:shadow-[0_0_20px_#39FF14] hover:bg-[#39ff14d0] transition-all duration-300"
        >
          Visita la Live Demo
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
