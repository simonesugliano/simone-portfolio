import ScrollAnimations from "../../../components/ScrollAnimations";

export const metadata = {
  title: "Approfondimento Tecnico — Tema Child WordPress",
  description:
    "Analisi tecnica del progetto WordPress basato su tema child: override template, layout personalizzati, funzioni PHP semplici e struttura modulare. Progetto dimostrativo in evoluzione.",
  alternates: { canonical: "/progetti/modifica-wp/approfondimento" },
};

export default function ApprofondimentoWP() {
  return (
    <main className="max-w-[1200px] mx-auto bg-black text-white px-6 py-20">
      <ScrollAnimations />

      {/* HERO */}
      <header className="section-fade text-center mb-16">
        <h1 className="section-title text-4xl font-extrabold mb-4">
          Approfondimento Tecnico — Tema Child WordPress
        </h1>

        <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
          Panoramica tenica del progetto WordPress basato su un tema child
          creato da zero. Il lavoro è focalizzato su override dei template,
          layout personalizzati e funzioni PHP semplici, per mostrare un
          flusso di sviluppo reale senza plugin superflui.  
          Il progetto è in evvoluzione e verrà ampliato con nuove funzionalità.
        </p>
      </header>

      {/* OBIETTIVO TECNICO */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">
          Obiettivo tecnico del progetto
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          Questa demo nasxce con l’obiettivo di mostrare come lavoro su WordPress
          quando serve intervenire direttamente sul codice.  
          Ho creato un tema child basato su Twenty Twenty-Five e ho sovrascritto
          i principali template per avere un controllo completo su layout,
          contenuto e struttura.
          <br /><br />
          Il risultato è un ambiente semplice, ma utile per vedere:
          <br />
          <strong>
            come organizo   il codice, come gestisco gli override e come imposto
            blocchi e sezioni personalizzate.
          </strong>
        </p>
      </section>

      {/* STRUTTURA DEL TEMA CHILD */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">
          Struttura del tema child
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          La struttura del tema child è volutamente essenziale, per rendere chiaro
          quali file controllano cosa.  
          La cartella contiene principalmente:
        </p>

        <ul className="text-gray-300 text-lg space-y-2 mt-4 leading-relaxed">
          <li>• <code>style.css</code> (meta tema + stili personalizzati)</li>
          <li>• <code>functions.php</code> (enqueue dei CSS)</li>
          <li>• <code>front-page.php</code> (override della home)</li>
          <li>• <code>single.php</code> (override dei singoli articoli)</li>
        </ul>

        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          L’obiettivo è avere un set minimo di file che permetta di controllare
          l’intero comportamento del sito, senza toccare il tema originale.
        </p>
      </section>

      {/* OVERRIDE HOME */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">
          Overrride della home (front-page.php)
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          La home è stata completamente sostituita con un file personalizzato.
          Qui imposto il contenitore, i blocchi informativi e la lista degli
          articoli in formato card.
        </p>

        <div className="bg-[#111] border border-[#39FF14]/40 p-6 rounded-xl mt-6">
<pre className="text-gray-300 text-sm overflow-auto">
{String.raw`<main class="container-simone">
  <h1>HOME OVERRIDE — CHILD THEME</h1>

  <div class="box-info">
    La home è generata da un file personalizzato.
  </div>

  <p>Questa sezione mostra il layout creato tramite il tema child.</p>

  <?php get_template_part('template-parts/card-articoli'); ?>
</main>`}
</pre>
        </div>

        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          La strttura è pensata per essere ampliata con ulteriori sezioni o
          componenti personalizzati.
        </p>
      </section>

      {/* OVERRIDE ARTICOLI */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">
          Override degli articoli (single.php)
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          Anche il template dei singoli articoli è stato riscritto per avere
          un layout pulito, leggibile e centrato.  
          Sono presenti un box introduttivo, il contenuto dell’articolo e la
          sezione “Altri articoli” in formato card.
        </p>

        <div className="bg-[#111] border border-[#39FF14]/40 p-6 rounded-xl mt-6">
<pre className="text-gray-300 text-sm overflow-auto">
{String.raw`<main class="container-simone">

  <div class="box-info">
    <strong><?php the_title(); ?></strong><br>
    Pubblicato il: <?php the_date(); ?>
  </div>

  <article>
    <?php the_content(); ?>
  </article>

  <?php get_template_part('template-parts/card-articoli'); ?>

</main>`}
</pre>
        </div>
      </section>

      {/* CSS PERSONALIZZATO */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">
          CSS personalizzato del tema child
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          Gli stili sono semplici e gestiscono il contenitore, i box e le cards.
          Lo scopo è mantenere il layout ordinato e distinguibile dai template
          originali.,
        </p>

        <div className="bg-[#111] border border-[#39FF14]/40 p-6 rounded-xl mt-6">
<pre className="text-gray-300 text-sm overflow-auto">
{String.raw`.container-simone {
  max-width: 900px;
  margin: 40px auto;
  background: #fff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
}

.box-info {
  background: #fff3cd;
  padding: 18px;
  border-left: 5px solid #ffca2c;
  border-radius: 6px;
}`}
</pre>
        </div>
      </section>

      {/* CARDS ARTICOLI */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">
          Sezione “Altri articoli” — generazione card
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          La sezione finale mostra tre articoli recventi in formato card.  
          Lo scopo è dare continuità alla navigazione e mostrare come gestisco
          query personalizzate in WordPress.
        </p>

        <div className="bg-[#111] border border-[#39FF14]/40 p-6 rounded-xl mt-6">
<pre className="text-gray-300 text-sm overflow-auto">
{String.raw`$query = new WP_Query([
  'post_type' => 'post',
  'posts_per_page' => 3,
  'post__not_in' => [get_the_ID()],
]);

while ($query->have_posts()) {
  $query->the_post(); ?>

  <div class="card-articolo">
    <h3><?php the_title(); ?></h3>
    <p><?php echo wp_trim_words(get_the_excerpt(), 18); ?></p>
    <a href="<?php the_permalink(); ?>">→ Leggi tutto</a>
  </div>

<?php }
wp_reset_postdata();`}
</pre>
        </div>
      </section>

      {/* EVOLUZIONI FUTURE */}
      <section className="section-fade mb-20">
        <h2 className="section-title text-2xl font-bold mb-4">
          Evoluzioni tecniche previste
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Il progetto è pensato per essere ampliato in modo molto graduale,
          aggiungendo piccole funzionalità utili dal punto di vista dello
          sviluppo WordPress.
        </p>

        <ul className="text-gray-300 text-lg space-y-3 leading-relaxed">
          <li>• Creazione di uno shortcode personalizzato</li>
          <li>• Pagina archivio completamente riscritta</li>
          <li>• Aggiunta di un menu personalizzato del tema child</li>
          <li>• Piccole automazioni via hook WordPress</li>
          <li>• Popssibilità di integrare Custom Post Types</li>
        </ul>
      </section>

      {/* TORNA AL PROGETTO */}
      <section className="section-fade text-center mt-10 mb-24">
        <a
          href="/progetti/modifica-wordpress"
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
