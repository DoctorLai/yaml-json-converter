import en from './en.json';
import zhCN from './zh-CN.json';
import zhTW from './zh-TW.json';
import es from './es.json';
import hi from './hi.json';
import ar from './ar.json';
import bn from './bn.json';
import pt from './pt.json';
import ru from './ru.json';
import ja from './ja.json';
import de from './de.json';
import fr from './fr.json';
import ko from './ko.json';
import it from './it.json';
import tr from './tr.json';
import vi from './vi.json';
import pl from './pl.json';
import uk from './uk.json';
import nl from './nl.json';
import th from './th.json';
import id from './id.json';
import fa from './fa.json';
import he from './he.json';
import sv from './sv.json';
import el from './el.json';

export const DEFAULT_LANGUAGE = 'en';

// Map of language code -> translation dictionary.
export const translations = {
  en,
  'zh-CN': zhCN,
  'zh-TW': zhTW,
  es,
  hi,
  ar,
  bn,
  pt,
  ru,
  ja,
  de,
  fr,
  ko,
  it,
  tr,
  vi,
  pl,
  uk,
  nl,
  th,
  id,
  fa,
  he,
  sv,
  el,
};

// Metadata used to render the language picker. `dir` drives right-to-left layout.
export const languages = [
  { code: 'en', name: 'English', dir: 'ltr' },
  { code: 'zh-CN', name: '简体中文', dir: 'ltr' },
  { code: 'zh-TW', name: '繁體中文', dir: 'ltr' },
  { code: 'es', name: 'Español', dir: 'ltr' },
  { code: 'hi', name: 'हिन्दी', dir: 'ltr' },
  { code: 'ar', name: 'العربية', dir: 'rtl' },
  { code: 'bn', name: 'বাংলা', dir: 'ltr' },
  { code: 'pt', name: 'Português', dir: 'ltr' },
  { code: 'ru', name: 'Русский', dir: 'ltr' },
  { code: 'ja', name: '日本語', dir: 'ltr' },
  { code: 'de', name: 'Deutsch', dir: 'ltr' },
  { code: 'fr', name: 'Français', dir: 'ltr' },
  { code: 'ko', name: '한국어', dir: 'ltr' },
  { code: 'it', name: 'Italiano', dir: 'ltr' },
  { code: 'tr', name: 'Türkçe', dir: 'ltr' },
  { code: 'vi', name: 'Tiếng Việt', dir: 'ltr' },
  { code: 'pl', name: 'Polski', dir: 'ltr' },
  { code: 'uk', name: 'Українська', dir: 'ltr' },
  { code: 'nl', name: 'Nederlands', dir: 'ltr' },
  { code: 'th', name: 'ไทย', dir: 'ltr' },
  { code: 'id', name: 'Bahasa Indonesia', dir: 'ltr' },
  { code: 'fa', name: 'فارسی', dir: 'rtl' },
  { code: 'he', name: 'עברית', dir: 'rtl' },
  { code: 'sv', name: 'Svenska', dir: 'ltr' },
  { code: 'el', name: 'Ελληνικά', dir: 'ltr' },
];

/**
 * Resolve an arbitrary locale string (e.g. "en-US", "zh-Hans-CN") to one of the
 * supported language codes, falling back to English when there is no match.
 * @param {string | undefined | null} preferred
 * @returns {string} A supported language code.
 */
export function resolveLanguage(preferred) {
  if (!preferred) return DEFAULT_LANGUAGE;
  if (translations[preferred]) return preferred;

  const lower = preferred.toLowerCase();
  const exact = languages.find((l) => l.code.toLowerCase() === lower);
  if (exact) return exact.code;

  const base = lower.split('-')[0];
  const baseMatch = languages.find(
    (l) => l.code.toLowerCase().split('-')[0] === base
  );
  return baseMatch ? baseMatch.code : DEFAULT_LANGUAGE;
}

/**
 * Get the translation dictionary for a language code.
 * @param {string} code
 * @returns {Record<string, string>}
 */
export function getTranslations(code) {
  return translations[code] || translations[DEFAULT_LANGUAGE];
}

/**
 * Get the text direction ('ltr' or 'rtl') for a language code.
 * @param {string} code
 * @returns {'ltr' | 'rtl'}
 */
export function getDirection(code) {
  const match = languages.find((l) => l.code === code);
  return match ? match.dir : 'ltr';
}
