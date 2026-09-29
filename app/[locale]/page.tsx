import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import ApartmentCard from "@/components/ApartmentCard";
import Faq from "@/components/Faq";
import Newsletter from "@/components/Newsletter";
import { apartments, brand, spaceImages } from "@/lib/apartments";
import { getMessages, isLocale } from "@/lib/i18n";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getMessages(locale);

  return (
    <>
      <Header locale={locale} t={t} overlay />
      <main>
        <section className="hero">
          <video className="hero-video" autoPlay muted loop playsInline preload="metadata" poster={brand.heroPoster}>
            <source src={brand.heroVideo} type="video/mp4" />
          </video>
          <div className="hero-shade" />
          <div className="container hero-inner">
            <h1>{t.hero.title}</h1>
            <p>{t.hero.subtitle}</p>
            <SearchBar locale={locale} t={t} city={brand.city} collapsible />
          </div>
        </section>

        <section className="section container">
          <h2>{t.usp.title}</h2>
          <div className="grid4">
            {t.usp.items.map((it, i) => (
              <div className="usp" key={i}>
                <span className="num">0{i + 1}</span>
                <h3>{it.title}</h3>
                <p>{it.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section container" id="apartments">
          <div className="section-head">
            <div><h2>{t.apts.title}</h2><p className="muted">{t.apts.subtitle}</p></div>
            <a className="btn btn-line" href={`/${locale}/apartments`}>{t.apts.all}</a>
          </div>
          <div className="grid3">
            {apartments.map((a) => <ApartmentCard key={a.slug} apt={a} locale={locale} t={t} />)}
          </div>
        </section>

        <section className="section container" id="destinations">
          <div className="section-head"><div><h2>{t.dest.title}</h2><p className="muted">{t.dest.subtitle}</p></div></div>
          <div className="grid3">
            <a className="dest" href={`/${locale}/apartments`} style={{ backgroundImage: `url(${spaceImages[0]})` }}>
              <span>{brand.city}</span><em>{t.dest.discover} →</em>
            </a>
            {[1, 2].map((i) => (
              <a className="dest soon" href="#" key={i} style={{ backgroundImage: `url(${spaceImages[i]})` }}>
                <span>{t.dest.soon}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="band">
          <div className="container">
            <h2>{t.how.title}</h2>
            <div className="grid3">
              {t.how.steps.map((s, i) => (
                <div className="step" key={i}><span className="num">{i + 1}</span><h3>{s.title}</h3><p>{s.text}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section className="section container center">
          <h2>{t.reviews.title}</h2>
          <p className="muted">{t.reviews.subtitle}</p>
          <a className="btn btn-line" href="#">{t.reviews.cta}</a>
        </section>

        <section className="section container split">
          <div className="promo" style={{ backgroundImage: `url(${spaceImages[1]})` }}>
            <div><h3>{t.business.title}</h3><p>{t.business.text}</p><a className="btn btn-light" href="#">{t.business.cta}</a></div>
          </div>
          <div className="promo" style={{ backgroundImage: `url(${spaceImages[2]})` }}>
            <div><h3>{t.owners.title}</h3><p>{t.owners.text}</p><a className="btn btn-light" href="#">{t.owners.cta}</a></div>
          </div>
        </section>

        <section className="section container narrow" id="faq">
          <h2>{t.faq.title}</h2>
          <Faq items={t.faq.items} />
        </section>

        <section className="band dark">
          <div className="container center">
            <h2>{t.newsletter.title}</h2>
            <p>{t.newsletter.text}</p>
            <Newsletter t={t} />
          </div>
        </section>
      </main>
      <Footer locale={locale} t={t} />
    </>
  );
}
