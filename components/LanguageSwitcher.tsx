"use client";
import { usePathname } from "next/navigation";
import { languages, type Locale } from "@/lib/i18n";

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname() || `/${locale}`;
  const rest = pathname.split("/").slice(2).join("/");
  return (
    <details className="lang">
      <summary aria-label="Language">{languages.find((l) => l.code === locale)?.short}</summary>
      <ul>
        {languages.map((l) => (
          <li key={l.code}>
            <a href={`/${l.code}${rest ? `/${rest}` : ""}`} hrefLang={l.code} aria-current={l.code === locale}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
}
