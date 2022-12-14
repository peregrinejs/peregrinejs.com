import { useRouter } from 'next/router'

import type NestedToDotted from '@src/lib/NestedToDotted'

import type Strings from './Strings'
import getNavigatorLocale from './getNavigatorLocale'
import { defaultLocale } from './locales.mjs'
import type { Locale } from './locales.mjs'
import translate from './translate'

export type TranslateFn = (
  string: NestedToDotted<Strings>,
  ...args: any[]
) => string

const useTranslation = (): TranslateFn => {
  const { locale } = useRouter()

  const preferredLocale = getNavigatorLocale() ?? 'en'
  const currentLocale =
    locale === defaultLocale
      ? preferredLocale
      : (locale as Exclude<Locale, typeof defaultLocale>)

  const t = (string: Parameters<typeof translate>[0], ...args: any[]) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return translate(string, currentLocale, ...args)
  }

  return t
}

export default useTranslation
