import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import type { Locale, Messages } from "@/lib/i18n";

export default function Header({ locale, t, overlay }: { locale: Locale; t: Messages; overlay?: boolean }) {
  const n = t.nav;
  return (
    <header className={`site-header${overlay ? " overlay" : ""}`}>
      <div className="container bar">
        <a href={`/${locale}`} aria-label="NEBO Apartments"><Logo /></a>
        <nav className="nav" aria-label="Main">
          <a href={`/${locale}/apartments`}>{n.apartments}</a>
          <a href={`/${locale}#destinations`}>{n.destinations}</a>
          <a href="#">{n.business}</a>
          <a href="#">{n.about}</a>
          <a href={`/${locale}#faq`}>{n.help}</a>
          <a href="#">{n.owners}</a>
        </nav>
        <div className="actions">
          <LanguageSwitcher locale={locale} />
          <a className="btn btn-dark" href={`/${locale}/apartments`}>{n.book}</a>
        </div>
      </div>
    </header>
  );
}
