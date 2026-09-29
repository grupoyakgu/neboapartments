import es from "@/messages/es.json";
import en from "@/messages/en.json";
import fr from "@/messages/fr.json";
import it from "@/messages/it.json";
import de from "@/messages/de.json";
import ko from "@/messages/ko.json";

// To add a language: create messages/<code>.json, import it here and add it to `languages`.
// Missing keys automatically fall back to Spanish.
export const languages = [
  { code: "es", label: "Español", short: "ES" },
  { code: "en", label: "English", short: "EN" },
  { code: "fr", label: "Français", short: "FR" },
  { code: "it", label: "Italiano", short: "IT" },
  { code: "de", label: "Deutsch", short: "DE" },
  { code: "ko", label: "한국어", short: "KO" },
] as const;

export type Locale = (typeof languages)[number]["code"];
export const defaultLocale: Locale = "es";
export const locales = languages.map((l) => l.code) as Locale[];
export type Messages = typeof es;

const catalog: Record<string, unknown> = { es, en, fr, it, de, ko };

export const isLocale = (v: string): v is Locale => (locales as string[]).includes(v);

function merge(base: any, over: any): any {
  if (Array.isArray(base)) return Array.isArray(over) && over.length ? over : base;
  if (base && typeof base === "object") {
    const out: any = {};
    for (const k of Object.keys(base)) out[k] = merge(base[k], over?.[k]);
    return out;
  }
  return over ?? base;
}

export function getMessages(locale: string): Messages {
  return merge(es, catalog[locale]) as Messages;
}

export function pickLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return defaultLocale;
  for (const part of acceptLanguage.split(",")) {
    const code = part.trim().slice(0, 2).toLowerCase();
    if (isLocale(code)) return code;
  }
  return defaultLocale;
}
