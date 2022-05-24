import React from 'react'

import Code from './Code'
import _Pre from './Pre'
import type { Language } from './getHighlighter'
import { styled } from '@src/stitches.config'

export interface CodeBlockProps {
  language: Language
  code: string
}

const CodeBlock = ({ language, code }: CodeBlockProps) => {
  return (
    <Pre>
      <Code className={`language-${language}`}>{code.trim()}</Code>
    </Pre>
  )
}

const Pre = styled(_Pre, {
  margin: 0,
})

export default CodeBlock
