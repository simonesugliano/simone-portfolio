import ScrollAnimations from "./components/ScrollAnimations";
import Link from "next/link";


export const metadata = {
  title: "Simone Sugliano — Web Developer & Frontend Specialist",
  description:
    "Portfolio ufficiale di Simone Sugliano, Web Developer specializzato in Next.js, React e siti moderni ad alte performance. Progetti reali, codice pulito e soluzioni concrete.",
  keywords: [
    "Simone Sugliano",
    "Web Developer",
    "Frontend Developer",
    "Next.js",
    "React",
    "Portfolio Web Developer",
    "Sviluppatore Web Torino",
    "SEO Tecnica",
    "Performance Web"
  ],
  alternates: { canonical: "https://simone-portfolio-fawn.vercel.app" },

  openGraph: {
    title: "Simone Sugliano — Web Developer & Problem Solver",
    description:
      "Sviluppo siti moderni, veloci e ottimizzati SEO. Qui trovi i miei progetti reali e il mio metodo di lavoro.",
    url: "https://simone-portfolio-fawn.vercel.app",
    siteName: "Simone Sugliano Portfolio",
    type: "website",
    images: [
      {
        url: "https://simone-portfolio-fawn.vercel.app/heroPortfolio.webp",
        width: 1200,
        height: 630,
        alt: "Simone Sugliano Portfolio"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "Simone Sugliano — Web Developer",
    description:
      "Portfolio ufficiale di Simone Sugliano: progetti reali, siti moderni e ottimizzati.",
    images: ["https://simone-portfolio-fawn.vercel.app/heroPortfolio.webp"]
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1
    }
  }
};

export default function Home() {
  return (
    <main className="max-w-[2560px] mx-auto bg-black" role="main">
      <ScrollAnimations />

      {/* JSON-LD PERSON */}
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Simone Sugliano",
      jobTitle: "Web Developer & Frontend Specialist",
      url: "https://simone-portfolio-fawn.vercel.app",
image: "https://simone-portfolio-fawn.vercel.app/avatar.jpg",
      sameAs: [
        "https://github.com/simonesugliano",
        "https://linkedin.com/in/simone-sugliano-95388022b"
      ],
      description:
        "Web Developer specializzato in Next.js, React e SEO tecnica. Creo siti moderni, veloci e ad alte performance.",
      knowsAbout: [
        "Web Development",
        "Next.js",
        "React",
        "JavaScript",
        "Frontend Engineering",
        "SEO Tecnica",
        "Performance Web",
        "UI/UX"
      ],
      address: {
        "@type": "PostalAddress",
        addressCountry: "IT"
      }
    })
  }}
/>


      {/* JSON-LD WEBSITE */}
     <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Simone Sugliano Portfolio",
      url: "https://simone-portfolio-fawn.vercel.app",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://simone-portfolio-fawn.vercel.app/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    })
  }}
/>



{/* NAVBAR FISSA */}
<nav
  className="
    fixed top-0 left-0 right-0 z-50
    flex flex-wrap justify-center gap-x-8 gap-y-2
    py-4
    bg-black/40 backdrop-blur-md
    text-[clamp(0.75rem,2.5vw,1rem)]
    font-medium text-gray-200
  "
>
  <a href="#about" className="hover:text-[#39FF14] transition">Chi Sono</a>
  <a href="#portfolio" className="hover:text-[#39FF14] transition">Progetti</a>
  <a href="#collaborazioni" className="hover:text-[#39FF14] transition">Per la tua attività</a>
    <a href="#attestati" className="hover:text-[#39FF14] transition">Formazione</a>
  <a href="#contatti" className="hover:text-[#39FF14] transition">Contatti</a>
</nav>

{/* HERO */}
<header
  className="
    section-slide-down w-full
    text-center text-white bg-black
mt-[20px] md:mt-[0px]
pt-[40px] md:pt-[0px]
  "
>
  <picture>
  {/* IMMAGINE PER SMARTPHONE */}
  <source
    srcSet="/heroSmartphone.webp"
    media="(max-width: 400px)"
  />

  {/* IMMAGINE PER DISPLAY MEDI (FINO A 600PX) */}
  <source
    srcSet="/heroTablet.webp"
    media="(max-width: 600px)"
  />

  {/* IMMAGINE DESKTOP (DEFAULT) */}
  <img
    src="/heroPortfolio.webp"
    alt="Simone Sugliano Portfolio Hero"
    className="
      w-full
      mx-auto
      object-contain

    "
  />
</picture>



  {/* TESTO SOTTO L'IMMAGINE */}
  <div className="max-w-3xl mx-auto section-fade ">
    <h1 className="text-[clamp(2.2rem,6vw,4rem)] font-extrabold tracking-tight">
      Simone Sugliano
    </h1>

    <h2 className="mt-3 text-[clamp(1.2rem,4vw,2rem)] font-bold">
      Web Developer &amp; Problem Solver
    </h2>

    <p className="mt-6 text-[clamp(1rem,3vw,1.25rem)] text-gray-200 leading-relaxed">
      Sviluppo siti moderni, veloci e ottimizzati.
      Creo soluzioni reali per problemi reali.
    </p>
  </div>
</header>


      {/* SEPARATORE */}
      <div className="flex justify-center my-16 bg-black">
        <div
          className="
            section-separator
            w-36 h-[3px]
            bg-gradient-to-r
            from-transparent via-[#39FF14]/60 to-transparent
            rounded-full
            opacity-0
            scale-x-50
            transition-all duration-[1200ms]
          "
        />
      </div>

      {/* =============================== */}
      {/*            CHI SONO             */}
      {/* =============================== */}
      <section id="about" className="section-fade mt-5 py-20 px-6 bg-black text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title text-4xl font-bold mb-6 section-slide-down">Chi Sono</h2>

          <p className="text-lg text-gray-300 leading-relaxed section-fade">
Sono un Web Developer specializzato nello sviluppo di siti moderni, performanti e ottimizzati SEO.
Utilizzo Next.js, React e workflow professionali per creare interfacce curate nei dettagli, pagine veloci e progetti scalabili.
Il mio obiettivo è sempre lo stesso: trasformare un’esigenza in una soluzione concreta, chiara e solida.          </p>
          <div className="mt-8">
  <Link
    href="/about"
    target="_blank"
  rel="noopener noreferrer"
    className="
      inline-block
      px-6 py-3
      text-black font-semibold
      bg-[#39FF14]
      rounded-xl
      shadow-[0_0_12px_#39FF14aa]
      hover:shadow-[0_0_20px_#39FF14]
      hover:bg-[#39ff14d0]
      transition-all duration-300
      section-fade
    "
  >
    Scopri di più su di me 
  </Link>
</div>

        </div>
      </section>

      {/* SEPARATORE */}
      <div className="flex justify-center my-16">
        <div
          className="
            section-separator
            w-36 h-[3px]
            bg-gradient-to-r
            from-transparent via-[#39FF14]/60 to-transparent
            rounded-full
            opacity-0
            scale-x-50
            transition-all duration-[1200ms]
          "
        />
      </div>

      {/* =============================== */}
      {/*            PORTFOLIO            */}
      {/* =============================== */}
      <section id="portfolio" className="section-fade py-24 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-4xl font-bold text-center mb-16 section-slide-down">Portfolio</h2>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 section-fade">

            {/* CARD 1 */}
<Link href="/progetti/clinica-privata" target="_blank" rel="noopener noreferrer" className="block">
  <article
    className="
      card-smooth
      bg-[#0c0c0c] border border-[#39FF14]/80 rounded-2xl p-8
      shadow-[0_0_12px_#39FF14aa]
      transition-all duration-300
      hover:border-[#39FF14]
      hover:shadow-[0_0_30px_#39FF14]
      hover:scale-[1.03]
      cursor-pointer
      min-h-[220px] sm:min-h-[350px]

    "
  >
    <h3 className="text-2xl font-bold mb-4">Progetto Lavorativo “Clinica Privata”</h3>
    <p className="text-gray-300 mb-4">Sistema completo con funzionalità avanzate personalizzate.</p>
    <span className="text-[#39FF14] font-semibold">Dettagli…</span>
  </article>
</Link>


            {/* CARD 2 */}
            <Link href="/progetti/la-bertorella" target="_blank" rel="noopener noreferrer" className="block">
  <article
    className="
      card-smooth
      bg-[#0c0c0c] border border-[#39FF14]/80 rounded-2xl p-8
      shadow-[0_0_12px_#39FF14aa]
      transition-all duration-300
      hover:border-[#39FF14]
      hover:shadow-[0_0_30px_#39FF14]
      hover:scale-[1.03]
      cursor-pointer
      min-h-[220px] sm:min-h-[350px]

    "
  >
    <h3 className="text-2xl font-bold mb-4">Progetto Freelance “La Bertorella”</h3>
    <p className="text-gray-300 mb-4">Sito professionale + integrazione con booking reale.</p>
    <span className="text-[#39FF14] font-semibold">Dettagli…</span>
  </article>
</Link>


            {/* CARD 3 */}
            <Link href="/progetti/artigiano" target="_blank" rel="noopener noreferrer" className="block">
  <article
    className="
      card-smooth
      bg-[#0c0c0c] border border-[#39FF14]/80 rounded-2xl p-8
      shadow-[0_0_12px_#39FF14aa]
      transition-all duration-300
      hover:border-[#39FF14]
      hover:shadow-[0_0_30px_#39FF14]
      hover:scale-[1.03]
      cursor-pointer
min-h-[220px] sm:min-h-[350px]
    "
  >
    <h3 className="text-2xl font-bold mb-4">Progetto Freelance “Artitam”</h3>
    <p className="text-gray-300 mb-4">Design moderno con funzionalità dinamiche integrate.</p>
    <span className="text-[#39FF14] font-semibold">Dettagli…</span>
  </article>
</Link>

{/* CARD — Libro Portfolio */}
<Link href="/progetti/libro-portfolio" target="_blank" rel="noopener noreferrer" className="block">
  <article
    className="
      card-smooth
      bg-[#0c0c0c] border border-[#39FF14]/80 rounded-2xl p-8
      shadow-[0_0_12px_#39FF14aa]
      transition-all duration-300
      hover:border-[#39FF14]
      hover:shadow-[0_0_30px_#39FF14]
      hover:scale-[1.03]
      cursor-pointer
      min-h-[220px] sm:min-h-[350px]
    "
  >
    <h3 className="text-2xl font-bold mb-4">
      Libro Portfolio — Esperienza Web Interattiva 3D
    </h3>

    <p className="text-gray-300 mb-4">
      Case study frontend sviluppato in HTML, CSS e JavaScript vanilla.
      Libro 3D sfogliabile con animazioni cinematiche, rendering controllato
      e gestione diretta del DOM senza framework.
    </p>

    <span className="text-[#39FF14] font-semibold">Dettagli…</span>
  </article>
</Link>


            {/* CARD 5 */}
           {/* CARD — modifica WordPress */}
<Link href="/progetti/modifica-wordpress" target="_blank" rel="noopener noreferrer" className="block">
  <article
    className="
      card-smooth
      bg-[#0c0c0c] border border-[#39FF14]/80 rounded-2xl p-8
      shadow-[0_0_12px_#39FF14aa]
      transition-all duration-300
      hover:border-[#39FF14]
      hover:shadow-[0_0_30px_#39FF14]
      hover:scale-[1.03]
      cursor-pointer
min-h-[220px] sm:min-h-[350px]
    "
  >
    <h3 className="text-2xl font-bold mb-4">
      Modifica tema WordPress
    </h3>

    <p className="text-gray-300 mb-4">
  Sviluppo di un tema child con override dei template,
   funzioni PHP, shortcode e componenti custom.
    </p>

    <span className="text-[#39FF14] font-semibold">Dettagli…</span>
  </article>
</Link>

{/* CARD — Cibus in Fabula */}
<Link href="/progetti/cibus" target="_blank" rel="noopener noreferrer" className="block">
  <article
    className="
      card-smooth
      bg-[#0c0c0c] border border-[#39FF14]/80 rounded-2xl p-8
      shadow-[0_0_12px_#39FF14aa]
      transition-all duration-300
      hover:border-[#39FF14]
      hover:shadow-[0_0_30px_#39FF14]
      hover:scale-[1.03]
      cursor-pointer
      min-h-[220px] sm:min-h-[350px]
    "
  >
    <h3 className="text-2xl font-bold mb-4">
      Collaborazione in Avvio  “Cibus in Fabula”
    </h3>

    <p className="text-gray-300 mb-4">
      Nuova collaborazione dedicata a social, contenuti visual e crescita del brand.
      Impostazione strategica, gestione sponsorizzate e possibile sviluppo del sito web.
    </p>

    <span className="text-[#39FF14] font-semibold">Dettagli…</span>
  </article>
</Link>

           {/* CARD — Collaborazioni Social */}
<Link href="/progetti/collaborazioni-social" target="_blank" rel="noopener noreferrer" className="block">
  <article
    className="
      card-smooth
      bg-[#0c0c0c] border border-[#39FF14]/80 rounded-2xl p-8
      shadow-[0_0_12px_#39FF14aa]
      transition-all duration-300
      hover:border-[#39FF14]
      hover:shadow-[0_0_30px_#39FF14]
      hover:scale-[1.03]
      cursor-pointer
min-h-[220px] sm:min-h-[350px]
    "
  >
    <h3 className="text-2xl font-bold mb-4">
      Collaborazioni Social & Content Creation
    </h3>

    <p className="text-gray-300 mb-4">
      Progetti reali di gestione contenuti per attività locali: editing foto e video,
      ottimizzazione visual, pianificazione post e crescita presenza online.
    </p>

    <span className="text-[#39FF14] font-semibold">Dettagli…</span>
  </article>
</Link>

          </div>
        </div>
      </section>

      {/* SEPARATORE */}
      <div className="flex justify-center my-16">
        <div
          className="
            section-separator
            w-36 h-[3px]
            bg-gradient-to-r
            from-transparent via-[#39FF14]/60 to-transparent
            rounded-full
            opacity-0
            scale-x-50
            transition-all duration-[1200ms]
          "
        />
      </div>


{/* =============================== */}
{/*        PER LA TUA ATTIVITÀ       */}
{/* =============================== */}
<section
  id="collaborazioni"
  className="section-fade py-24 px-6 bg-black text-white"
>
  <div className="max-w-5xl mx-auto">

    {/* TITOLO + INTRO */}
    <div className="text-center mb-12">
      <h2 className="section-title text-4xl font-bold mb-4 section-slide-down">
        Per la tua attività
      </h2>

      <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto section-fade">
        Aiuto attività locali, artigiani e piccoli business a presentarsi meglio online.<br /><br />
        Non ci sono pacchetti preconfezionati:
        capiamo cosa ti serve davvero e preparo contenuti, foto, sito o social
        in modo semplice, chiaro e professionale.
      </p>
    </div>

    {/* CARD GRIGLIA */}
    <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto section-fade">

      {/* ARTITAM */}
      <article
        className="
          cursor-pointer
          section-slide-down
          bg-[#0c0c0c] border border-gray-700 rounded-2xl p-6
          transition-all duration-300
          hover:border-[#39FF14]
          hover:shadow-[0_0_22px_#39FF1480]
          hover:scale-[1.03]
        "
      >
        <h3 className="text-xl font-bold mb-2">Artitam</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Supporto reale a un artigiano edile: foto dei lavori, contenuti,
          gestione social e costruzione del sito per migliorare l’immagine
          e aumentare la fiducia dei clienti.
        </p>
      </article>

      {/* BERTORELLA */}
      <article
        className="
          cursor-pointer
          section-slide-down
          bg-[#0c0c0c] border border-gray-700 rounded-2xl p-6
          transition-all duration-300
          hover:border-[#39FF14]
          hover:shadow-[0_0_22px_#39FF1480]
          hover:scale-[1.03]
        "
      >
        <h3 className="text-xl font-bold mb-2">Agriturismo La Bertorella</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Foto ambientate, comunicazione coordinata, ottimizzazione del sito
          e supporto alla presenza social. Un lavoro semplice, pulito e fatto su misura.
        </p>
      </article>

      {/* CIBUS */}
      <article
        className="
          cursor-pointer
          section-slide-down
          bg-[#0c0c0c] border border-gray-700 rounded-2xl p-6
          transition-all duration-300
          hover:border-[#39FF14]
          hover:shadow-[0_0_22px_#39FF1480]
          hover:scale-[1.03]
        "
      >
        <h3 className="text-xl font-bold mb-2">Cibus in Fabula</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Collaborazione in avvio: linea visiva, primi contenuti, social
          e impostazione base della comunicazione. In futuro anche il sito.
        </p>
      </article>

    </div>

    {/* CTA */}
    <div className="text-center mt-12 section-fade">
      <p className="text-gray-300 mb-6">
        Se sei un’attività e vuoi migliorare l’immagine online,
        posso aiutarti a partire da foto, social o sito web.
      </p>

      <a
        href="#contatti"
        className="
          inline-block
          px-6 py-3
          bg-[#39FF14]
          text-black font-semibold
          rounded-xl
          shadow-[0_0_12px_#39FF14aa]
          hover:shadow-[0_0_20px_#39FF14]
          hover:bg-[#39ff14d0]
          transition-all duration-300
          section-fade
        "
      >
        Parliamone senza impegno
      </a>
    </div>

  </div>
</section>

{/* SEPARATORE */}
      <div className="flex justify-center my-16">
        <div
          className="
            section-separator
            w-36 h-[3px]
            bg-gradient-to-r
            from-transparent via-[#39FF14]/60 to-transparent
            rounded-full
            opacity-0
            scale-x-50
            transition-all duration-[1200ms]
          "
        />
      </div>

      {/* =============================== */}
{/*       ALTRI PROGETTI           */}
{/* =============================== */}

<section id="altri-progetti" className="section-fade py-24 px-6 bg-black text-white">
  <div className="max-w-4xl mx-auto text-center mb-12 ">
    <h2 className="section-title text-4xl font-bold mb-4 section-slide-down">
      Altri Progetti
    </h2>

    <p className="text-gray-300 text-lg leading-relaxed section-fade max-w-2xl mx-auto section-fade">
      Prima di arrivare ai progetti più avanzati che hai visto sopra,
      ho costruito diversi lavori più semplici ma comunque solidi.
      Ognuno di questi ha una sua storia, una sua sfida tecnica
      e almeno una soluzione interessante al suo interno.
      Non sono “vecchi lavori messi lì”: sono le fondamenta
      del livello che ho oggi.
    </p>
  </div>

  {/* GRID DEI PROGETTI SECONDARI */}
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto section-fade">

    {/* CARD 1 */}
    <Link href="/progetti/giardino-wp" target="_blank" rel="noopener noreferrer" className="block ">
  <article
    className="
      section-slide-down
      bg-[#0c0c0c] border border-gray-700 rounded-xl p-6
      transition-all duration-300
      hover:border-[#39FF14]
      hover:shadow-[0_0_18px_#39FF1480]
      hover:scale-[1.03]
      cursor-pointer
            min-h-[200px] sm:min-h-[200px]

    "
  >
    <h3 className="text-xl font-bold mb-2">Sito WP “Giardino Ideale”</h3>
    <p className="text-gray-400 text-sm">WordPress + struttura SEO tecnica.</p>
    <span className="text-[#39FF14] font-semibold text-sm mt-3 inline-block">
      Dettagli…
    </span>
  </article>
</Link>


    {/* CARD 2 */}
    <Link href="/progetti/ecommerce-metal" target="_blank" rel="noopener noreferrer" className="block">
  <article
    className="
      section-slide-down
      bg-[#0c0c0c] border border-gray-700 rounded-xl p-6
      transition-all duration-300
      hover:border-[#39FF14]
      hover:shadow-[0_0_18px_#39FF1480]
      hover:scale-[1.03]
      cursor-pointer
            min-h-[200px] sm:min-h-[200px]

    "
  >
    <h3 className="text-xl font-bold mb-2">E-commerce “Metal Works”</h3>
    <p className="text-gray-400 text-sm">Catalogo prodotti + UI moderna + carrello base.</p>
    <span className="text-[#39FF14] font-semibold text-sm mt-3 inline-block">
      Dettagli…
    </span>
  </article>
</Link>


    {/* CARD 3 */}
   <Link href="/progetti/landing-page" target="_blank" rel="noopener noreferrer" className="block">
  <article
    className="
      section-slide-down
      bg-[#0c0c0c] border border-gray-700 rounded-xl p-6
      transition-all duration-300
      hover:border-[#39FF14]
      hover:shadow-[0_0_18px_#39FF1480]
      hover:scale-[1.03]
      cursor-pointer
            min-h-[200px] sm:min-h-[200px]

    "
  >
    <h3 className="text-xl font-bold mb-2">Landing Page “Promo Service”</h3>
    <p className="text-gray-400 text-sm">CTA ottimizzate + layout moderno + microanimazioni.</p>
    <span className="text-[#39FF14] font-semibold text-sm mt-3 inline-block">
      Dettagli…
    </span>
  </article>
</Link>


    {/* CARD 4 */}
    <Link href="/progetti/sito-cv" target="_blank" rel="noopener noreferrer" className="block">
  <article
    className="
      section-slide-down
      bg-[#0c0c0c] border border-gray-700 rounded-xl p-6
      transition-all duration-300
      hover:border-[#39FF14]
      hover:shadow-[0_0_18px_#39FF1480]
      hover:scale-[1.03]
      cursor-pointer
            min-h-[200px] sm:min-h-[200px]

    "
  >
    <h3 className="text-xl font-bold mb-2">Sito CV Interattivo</h3>
    <p className="text-gray-400 text-sm">Curriculum online dinamico con video e microanimazioni.</p>
    <span className="text-[#39FF14] font-semibold text-sm mt-3 inline-block">
      Dettagli…
    </span>
  </article>
</Link>


  </div>
</section>



      {/* SEPARATORE */}
      <div className="flex justify-center my-16">
        <div
          className="
            section-separator
            w-36 h-[3px]
            bg-gradient-to-r
            from-transparent via-[#39FF14]/60 to-transparent
            rounded-full
            opacity-0
            scale-x-50
            transition-all duration-[1200ms]
          "
        />
      </div>



{/* =============================== */}
{/*        SEZIONE ATTESTATI        */}
{/* =============================== */}

<section id="attestati" className="section-fade py-24 px-6 bg-black text-white">

  {/* INTRODUZIONE SEZIONE */}
  <div className="max-w-4xl mx-auto text-center mb-20">
    <h2 className="section-title text-4xl font-bold mb-4 section-slide-down">
      Attestati & Formazione
    </h2>

    <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto section-fade">
      Percorsi strutturati, studio continuo e applicazione pratica nello sviluppo di progetti reali.
    </p>
  </div>

  {/* =============================== */}
  {/*      CORSI STRUTTURATI          */}
  {/* =============================== */}

  <div className="max-w-6xl mx-auto mb-24">

    <div className="text-center mb-12">
      <h3 className="text-3xl font-bold mb-2 section-slide-down ">
        Formazione Strutturata
      </h3>

      <p className="text-gray-400 text-base max-w-2xl mx-auto section-fade">
        Percorsi completi focalizzati su sviluppo frontend, programmazione e progettazione dell’interfaccia.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 section-fade">

      {/* CARD 1 */}
      <a href="/attestati/attestFrontEnd.webp" target="_blank" rel="noopener noreferrer">
        <article className="
            section-slide-down
            bg-[#0c0c0c] border border-gray-700 rounded-xl p-6
            transition-all duration-300
            hover:border-[#39FF14]
            hover:shadow-[0_0_18px_#39FF1480]
            hover:scale-[1.03]
            cursor-pointer
            min-h-[200px]
        ">
          <h3 className="text-xl font-bold mb-2">HTML-CSS-JS Avanzato</h3>
          <p className="text-gray-400 text-sm">
Percorso completo HTML, CSS e JavaScript: struttura semantica, layout responsive,
stile avanzato, logica applicativa e sviluppo di interfacce web dinamiche complete.
          </p>
          <span className="text-[#39FF14] font-semibold text-sm mt-3 inline-block">
            Apri attestato…
          </span>
        </article>
      </a>

      {/* CARD 2 */}
      <a href="/attestati/jsUdemy.webp" target="_blank" rel="noopener noreferrer">
        <article className="
            section-slide-down
            bg-[#0c0c0c] border border-gray-700 rounded-xl p-6
            transition-all duration-300
            hover:border-[#39FF14]
            hover:shadow-[0_0_18px_#39FF1480]
            hover:scale-[1.03]
            cursor-pointer
            min-h-[200px]
        ">
          <h3 className="text-xl font-bold mb-2">JavaScript Completo</h3>
          <p className="text-gray-400 text-sm">
Sviluppo completo in JavaScript: logica applicativa, DOM, eventi, async/await,
fetch API, gestione dati e interazioni dinamiche per applicazioni reali.
          </p>
          <span className="text-[#39FF14] font-semibold text-sm mt-3 inline-block">
            Apri attestato…
          </span>
        </article>
      </a>

      {/* CARD 3 */}
      <a href="/attestati/ux-ui.webp" target="_blank" rel="noopener noreferrer">
        <article className="
            section-slide-down
            bg-[#0c0c0c] border border-gray-700 rounded-xl p-6
            transition-all duration-300
            hover:border-[#39FF14]
            hover:shadow-[0_0_18px_#39FF1480]
            hover:scale-[1.03]
            cursor-pointer
            min-h-[200px]
        ">
          <h3 className="text-xl font-bold mb-2">UX / UI</h3>
          <p className="text-gray-400 text-sm">
             Progettazione di interfacce usabili, layout leggibili, flussi utente,
  prototipazione e ottimizzazione dell’esperienza.
          </p>
          <span className="text-[#39FF14] font-semibold text-sm mt-3 inline-block">
            Apri attestato…
          </span>
        </article>
      </a>

    </div>
  </div>

  {/* =============================== */}
  {/*        FORMAZIONE CONTINUA      */}
  {/* =============================== */}

  <div className="max-w-6xl mx-auto">

    <div className="text-center mb-12">
      <h3 className="text-3xl font-bold mb-2 section-slide-down">
        Formazione Continua
      </h3>

      <p className="text-gray-400 text-base max-w-2xl mx-auto section-fade">
        Aggiornamento costante su tecnologie, strumenti e metodologie legate al mondo web.
      </p>
    </div>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 section-fade">

    {/* CARD 4 */}
    <a href="/attestati/cssBoolean.webp" target="_blank" rel="noopener noreferrer">
      <article className="
          section-slide-down
          bg-[#0c0c0c] border border-gray-700 rounded-xl p-6
          transition-all duration-300
          hover:border-[#39FF14]
          hover:shadow-[0_0_18px_#39FF1480]
          hover:scale-[1.03]
          cursor-pointer
          min-h-[200px]
      ">
        <h3 className="text-xl font-bold mb-2">Css flex / Grid</h3>
        <p className="text-gray-400 text-sm">
Layout avanzati con Flexbox e CSS Grid: strutture responsive, allineamenti complessi,
griglie fluide e organizzazione professionale delle interfacce.
        </p>
        <span className="text-[#39FF14] font-semibold text-sm mt-3 inline-block">
          Apri attestato…
        </span>
      </article>
    </a>

    {/* CARD 5 */}
    <a href="/attestati/jsLacerba.webp" target="_blank" rel="noopener noreferrer">
      <article className="
          section-slide-down
          bg-[#0c0c0c] border border-gray-700 rounded-xl p-6
          transition-all duration-300
          hover:border-[#39FF14]
          hover:shadow-[0_0_18px_#39FF1480]
          hover:scale-[1.03]
          cursor-pointer
          min-h-[200px]
      ">
        <h3 className="text-xl font-bold mb-2">Principi Javascript</h3>
        <p className="text-gray-400 text-sm">
Fondamenti di JavaScript: variabili, condizioni, cicli, funzioni, array e primi
concetti di programmazione per il web.
        </p>
        <span className="text-[#39FF14] font-semibold text-sm mt-3 inline-block">
          Apri attestato…
        </span>
      </article>
    </a>

    {/* CARD 6 */}
    <a href="/attestati/ui-ux.webp" target="_blank" rel="noopener noreferrer">
      <article className="
          section-slide-down
          bg-[#0c0c0c] border border-gray-700 rounded-xl p-6
          transition-all duration-300
          hover:border-[#39FF14]
          hover:shadow-[0_0_18px_#39FF1480]
          hover:scale-[1.03]
          cursor-pointer
          min-h-[200px]
      ">
        <h3 className="text-xl font-bold mb-2">Social Media</h3>
<p className="text-gray-400 text-sm">
  In aggiornamento. I certificati verranno caricati appena disponibili.
</p>

        <span className="text-[#39FF14] font-semibold text-sm mt-3 inline-block">
          Apri attestato…
        </span>
      </article>
    </a>

  </div>
</div>
</section>

{/* SEPARATORE */}
      <div className="flex justify-center my-16">
        <div
          className="
            section-separator
            w-36 h-[3px]
            bg-gradient-to-r
            from-transparent via-[#39FF14]/60 to-transparent
            rounded-full
            opacity-0
            scale-x-50
            transition-all duration-[1200ms]
          "
        />
      </div>
      {/* =============================== */}
      {/*            CONTATTI             */}
      {/* =============================== */}
     <footer
  id="contatti"
  className="section-fade py-24 px-6 bg-black text-white"
  role="contentinfo"
>
  <div className="max-w-3xl mx-auto text-center space-y-8">
    
    {/* TITOLO */}
    <h2 className="section-title text-4xl font-bold section-slide-down">Contatti</h2>

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

  <a
    href="https://www.facebook.com/simone.sugliano.10"
    target="_blank"
    rel="noopener noreferrer"
    className="underline text-gray-300 hover:text-[#39FF14] text-lg"
  >
    Facebook
  </a>
</nav>

  </div>
</footer>


    </main>
  );
}
