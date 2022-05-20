import type { LanguageFn } from 'highlight.js'
import hljs from 'highlight.js/lib/core'
import bash from 'highlight.js/lib/languages/bash'
import json from 'highlight.js/lib/languages/json'
import kotlin from 'highlight.js/lib/languages/kotlin'
import shell from 'highlight.js/lib/languages/shell'
import swift from 'highlight.js/lib/languages/swift'
import typescript from 'highlight.js/lib/languages/typescript'
import once from 'lodash/fp/once'

export type Language =
  | 'bash'
  | 'json'
  | 'kotlin'
  | 'shell'
  | 'swift'
  | 'typescript'

const reg = (name: Language, lang: LanguageFn) =>
  hljs.registerLanguage(name, lang)

const getHighlighter = once((): typeof hljs => {
  reg('bash', bash)
  reg('json', json)
  reg('kotlin', kotlin)
  reg('shell', shell)
  reg('swift', swift)
  reg('typescript', typescript)

  return hljs
})

export default getHighlighter
