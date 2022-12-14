import get from 'lodash/fp/get'

import type NestedToDotted from '@src/lib/NestedToDotted'

import type Strings from './Strings'
import i18n from './i18n'
import type { LanguageLocale } from './locales.mjs'

const translate = (
  string: NestedToDotted<Strings>,
  locale: LanguageLocale = 'en',
  ...args: any[]
): string => {
  const lang = i18n[locale]
  const translation: unknown = get(string, lang)

  if (typeof translation === 'function') {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-argument
    return translation(...args)
  } else if (typeof translation === 'string') {
    return translation
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  return locale === 'en' ? string : translate(string, 'en', ...args)
}

export default translate
