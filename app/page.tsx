/* oxlint-disable next/no-img-element */
import Countdown from '@/components/countdown';
import { experience, history, releaseItems, site } from '@/data/maranata';

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand-mark" href="#inicio" aria-label="Voltar ao início"><span>MARANATA</span><b>26</b></a>
        <a className="header-link" href="#memorias">MEMÓRIAS <svg className="inline-arrow inline-arrow-down-right" aria-hidden="true" viewBox="0 0 12 12"><path d="M2 2v8h8M2 2l8 8" /></svg></a>
      </header>
      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <div className="hero-grain" aria-hidden="true" /><div className="hero-rule hero-rule-top" aria-hidden="true" />
        <p className="edition fade-in">MARANATA <span>2026</span></p>
        <div className="hero-content">
          <div className="hero-logo-wrap fade-in-delayed"><img src="/images/brand/logo.png" width="150" height="150" alt="Logo oficial do Acampamento Maranata" /></div>
          <h1 id="hero-title"><span className="hero-line hero-line-one">SEDE</span><span className="hero-line hero-line-two">CONSTANTES.</span></h1>
          <p className="hero-subtitle fade-in-delayed">Permanecendo nele em meio aos conflitos da carne.</p>
        </div>
        <div className="hero-footer fade-in-delayed"><p>31 OUT — 01 — 02 NOV<br /><span>MARÍLIA · SP</span></p><a className="scroll-cue" href="#contagem"><i aria-hidden="true">↓</i> explorar</a></div>
      </section>
      <section className="countdown-section" id="contagem" aria-labelledby="countdown-title">
        <div className="section-topline"><span>01</span><span>O TEMPO SE APROXIMA</span></div><h2 id="countdown-title">CONTINUE.</h2><p className="section-lead">Cada dia nos aproxima.</p><Countdown /><p className="event-date">31.10 — 02.11.2026</p>
      </section>
      <section className="theme-section" id="evento" aria-labelledby="theme-title">
        <p className="eyebrow">O TEMA DE 2026</p><div className="theme-word-wrap"><h2 id="theme-title">SEDE<br /><em>CONSTANTES.</em></h2></div>
        <div className="theme-copy"><span className="vertical-note">PERMANECER</span><p>Permanecer nele, mesmo quando os conflitos da carne insistem em nos afastar.</p><p className="muted-copy">Continuar. Constantes.</p></div>
      </section>
      <section className="history-section" id="memorias" aria-labelledby="history-title">
        <div className="section-topline"><span>02</span><span>MEMÓRIAS QUE NOS TROUXERAM ATÉ AQUI</span></div><h2 id="history-title">O QUE<br />FICA.</h2>
        {history.map((chapter) => <article className={`memory memory-${chapter.year}`} key={chapter.year}><div className="memory-intro"><p className="memory-year">{chapter.year}</p><p>{chapter.copy}</p></div><div className="memory-images">{chapter.images.map((image, index) => <figure className={`memory-image image-${index + 1}`} key={image.src}><img src={image.src} alt={image.alt} width="640" height="1136" loading="lazy" /></figure>)}</div></article>)}
        <div className="arrival"><span>2024</span><i>↓</i><span>2025</span><i>↓</i><strong>2026</strong></div><div className="next-chapter"><p>E AGORA...</p><h3>A HISTÓRIA<br />CONTINUA.</h3><span>SEDE CONSTANTES.</span></div>
      </section>
      <section className="experience-section" aria-labelledby="experience-title">
        <div className="section-topline"><span>03</span><span>O QUE NOS MOVE</span></div><h2 id="experience-title">MAIS QUE<br />UM ACAMPAMENTO.</h2>
        <div className="experience-list">{experience.map((item, index) => <article className={`experience-item experience-${index + 1}`} key={item.title}><div className="experience-label"><span>0{index + 1}</span><h3>{item.title}</h3></div><figure><img src={item.image.src} alt={item.image.alt} width="640" height="1136" loading="lazy" /></figure></article>)}</div>
      </section>
      <section className="releases-section" id="2026" aria-labelledby="releases-title">
        <p className="eyebrow">O PRÓXIMO CAPÍTULO</p><h2 id="releases-title">AINDA HÁ<br />MUITO A<br /><em>REVELAR.</em></h2><div className="release-list">{releaseItems.map((item) => <article className="release-item" key={item.number}><span>{item.number}</span><div><h3>{item.label}</h3><p>{item.status}</p></div></article>)}</div>
      </section>
      <section className="instagram-section" id="instagram" aria-labelledby="instagram-title">
        <p className="eyebrow">NÃO PERCA O PRÓXIMO SINAL</p><h2 id="instagram-title">ACOMPANHE<br />O MARANATA<br /><em>2026.</em></h2><p>@maranata.marilia</p><a className="instagram-cta" href={site.instagramUrl} target="_blank" rel="noreferrer"><span>ACOMPANHAR NO INSTAGRAM</span><svg aria-hidden="true" viewBox="0 0 16 16"><path d="M3 13 13 3M6 3h7v7" /></svg></a>
      </section>
      <footer className="site-footer"><div className="footer-brand"><span>MARANATA</span><strong>26</strong></div><div><p>31.10 — 02.11</p><p>MARÍLIA · SP</p></div><p className="footer-message">NOS VEMOS LÁ.</p><a href={site.instagramUrl} target="_blank" rel="noreferrer"><span>INSTAGRAM</span><svg className="inline-arrow inline-arrow-up-right" aria-hidden="true" viewBox="0 0 12 12"><path d="M2 10 10 2M5 2h5v5" /></svg></a></footer>
    </main>
  );
}
