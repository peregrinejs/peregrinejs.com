import type DeepPartial from '@src/lib/DeepPartial'

import type Strings from './Strings'
import en from './en'
import es from './es'
import type { LanguageLocale } from './locales.mjs'

export type I18n = { en: Strings } & {
  [K in Exclude<LanguageLocale, 'en'>]: DeepPartial<Strings>
}

const i18n: I18n = {
  en,
  es,
}

export default i18n
