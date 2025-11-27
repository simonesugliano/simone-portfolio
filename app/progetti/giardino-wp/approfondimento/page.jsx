import ScrollAnimations from "@/app/components/ScrollAnimations";

export const metadata = {
  title: "Approfondimento Tecnico – WP Giardino Ideale | Simone Sugliano",
  description:
    "Analisi tecnica del progetto WP Giardino Ideale: struttura dei contenuti, ottimizzazione SEO, personalizzazione del tema e miglioramento delle performance.",
  alternates: { canonical: "/progetti/giardino-wp/approfondimento" },
};

export default function ApprofondimentoPage() {
  return (
    <main className="max-w-[1200px] mx-auto text-white bg-black px-6 py-20">
      <ScrollAnimations />

      {/* HERO */}
      <header className="section-fade text-center mb-16">
        <h1 className="text-4xl font-extrabold mb-4">
          Approfondi<wbr />mento Tecnico – <span className="text-[#39FF14]">WP Giardino Ideale</span>
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
          ✦ Descrivi il problema reale che il cliente aveva.<br />
          ✦ Cosa non funzionava nei sistemi precedenti.<br />
          ✦ Perché serviva una soluzione personalizzata.
        </p>
      </section>

      {/* SOLUZIONE */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-3xl font-bold mb-4">La soluzione tecnica</h2>
        <p className="text-gray-300 leading-relaxed text-lg mb-6">
          Qui spieghi come hai affrontato il problema:
        </p>

        <ul className="text-gray-300 leading-relaxed text-lg space-y-3">
          <li>✔ Architettura scelta (React, Next, WP, JS puro...)</li>
          <li>✔ Perché è stata scelta</li>
          <li>✔ Come hai strutturato le funzioni/core logic</li>
          <li>✔ Moduli personalizzati creati</li>
        </ul>
      </section>

      {/* CODICE */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-3xl font-bold mb-4">Snippet di codice</h2>

        <div className="bg-[#111] border border-[#39FF14]/40 p-6 rounded-xl">
          <pre className="text-gray-300 text-sm overflow-auto">
{`// Inserisci un esempio di codice reale
function esempio() {
  console.log("Snippet tecnico che dimostra la soluzione");
}`}
          </pre>
        </div>
      </section>

      {/* PERFORMANCE */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-3xl font-bold mb-4">Performance & Ottimizzazioni</h2>

        <ul className="text-gray-300 text-lg leading-relaxed space-y-3">
          <li>✔ Lazy loading immagini</li>
          <li>✔ Minimizzazione componenti / CSS</li>
          <li>✔ Logiche asincrone ottimizzate</li>
          <li>✔ Riduzione tempi di caricamento</li>
          <li>✔ SEO tecnica applicata</li>
        </ul>
      </section>

      {/* RISULTATI */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-3xl font-bold mb-4">Risultato finale</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          ✦ Cosa ha ottenuto il cliente<br />
          ✦ Come la soluzione ha migliorato il loro workflow<br />
          ✦ Perché questa è una soluzione professionale
        </p>
      </section>

      {/* TORNA INDIETRO */}
      <section className="section-fade text-center mb-24">
        <a
          href="/progetti/giardino-wp"
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
