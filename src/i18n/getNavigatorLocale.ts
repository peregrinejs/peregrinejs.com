import { isLanguageLocale } from './locales.mjs'
import type { LanguageLocale } from './locales.mjs'

const getNavigatorLocale = (): LanguageLocale | null => {
  const navigatorLocale =
    typeof navigator === 'undefined' ? null : navigator.language.substring(0, 2)

  return navigatorLocale && isLanguageLocale(navigatorLocale)
    ? navigatorLocale
    : null
}

export default getNavigatorLocale
