// @ts-check

/**
 * @typedef {'default' | 'en' | 'es'} Locale
 */

/**
 * @type {(locale: string) => locale is Locale}
 */
export const isLocale = locale => {
  /**
   * @type {Locale}
   */
  // @ts-ignore
  const localeType = locale

  return locales.includes(localeType)
}

/**
 * @typedef {Exclude<Locale, typeof defaultLocale>} LanguageLocale
 */

/**
 * @type {(locale: string) => locale is LanguageLocale}
 */
export const isLanguageLocale = locale =>
  isLocale(locale) && locale !== defaultLocale

export const defaultLocale = 'default'

/**
 * @type {Locale[]}
 */
const locales = [defaultLocale, 'en', 'es']

export default locales
