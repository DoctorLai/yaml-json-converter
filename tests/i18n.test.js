import { describe, it, expect } from 'vitest';
import {
  translations,
  languages,
  DEFAULT_LANGUAGE,
  resolveLanguage,
  getTranslations,
  getDirection,
} from '../src/lang';
import en from '../src/lang/en.json';

describe('i18n', () => {
  it('provides 25 languages', () => {
    expect(languages).toHaveLength(25);
  });

  it('has a translation dictionary for every listed language', () => {
    for (const { code } of languages) {
      expect(translations[code]).toBeDefined();
    }
  });

  it('keeps every translation in sync with the English keys', () => {
    const enKeys = Object.keys(en).sort();
    for (const { code } of languages) {
      expect(Object.keys(translations[code]).sort()).toEqual(enKeys);
    }
  });

  it('includes Simplified and Traditional Chinese', () => {
    expect(translations['zh-CN']).toBeDefined();
    expect(translations['zh-TW']).toBeDefined();
    expect(translations['zh-CN'].title).not.toBe(translations['zh-TW'].title);
  });

  it('resolves regional locales to a base language', () => {
    expect(resolveLanguage('en-US')).toBe('en');
    expect(resolveLanguage('fr-FR')).toBe('fr');
    expect(resolveLanguage('zh-CN')).toBe('zh-CN');
  });

  it('matches a code case-insensitively', () => {
    expect(resolveLanguage('ZH-cn')).toBe('zh-CN');
  });

  it('falls back to the default language for unknown or empty input', () => {
    expect(resolveLanguage('xx')).toBe(DEFAULT_LANGUAGE);
    expect(resolveLanguage('')).toBe(DEFAULT_LANGUAGE);
    expect(resolveLanguage(null)).toBe(DEFAULT_LANGUAGE);
    expect(resolveLanguage(undefined)).toBe(DEFAULT_LANGUAGE);
  });

  it('returns English translations for an unknown code', () => {
    expect(getTranslations('unknown')).toBe(translations.en);
  });

  it('reports text direction, defaulting to ltr', () => {
    expect(getDirection('ar')).toBe('rtl');
    expect(getDirection('fa')).toBe('rtl');
    expect(getDirection('he')).toBe('rtl');
    expect(getDirection('en')).toBe('ltr');
    expect(getDirection('unknown')).toBe('ltr');
  });
});
