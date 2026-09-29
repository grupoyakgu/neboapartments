import Logo from "./Logo";
import type { Locale, Messages } from "@/lib/i18n";

export default function Footer({ locale, t }: { locale: Locale; t: Messages }) {
  const f = t.footer;
  return (
    <footer className="site-footer">
      <div className="container grid">
        <div>
          <Logo light />
          <p>{f.tagline}</p>
        </div>
        <div>
          <h4>{f.explore}</h4>
          <a href={`/${locale}/apartments`}>{t.nav.apartments}</a>
          <a href={`/${locale}#destinations`}>{t.nav.destinations}</a>
          <a href="#">{t.nav.business}</a>
          <a href="#">{f.blog}</a>
        </div>
        <div>
          <h4>{f.company}</h4>
          <a href="#">{t.nav.about}</a>
          <a href="#">{f.careers}</a>
          <a href="#">{t.nav.owners}</a>
          <a href="#">{f.press}</a>
        </div>
        <div>
          <h4>{f.support}</h4>
          <a href={`/${locale}#faq`}>{t.nav.help}</a>
          <a href="#">{f.contact}</a>
          <a href="#">WhatsApp</a>
        </div>
        <div>
          <h4>{f.legal}</h4>
          <a href="#">{f.terms}</a>
          <a href="#">{f.privacy}</a>
          <a href="#">{f.cookies}</a>
        </div>
      </div>
      <div className="container legal">© {new Date().getFullYear()} NEBO Apartments. {f.rights}</div>
    </footer>
  );
}
