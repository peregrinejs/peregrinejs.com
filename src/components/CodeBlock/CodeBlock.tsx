import React from 'react'

import { styled } from '@src/stitches.config'

import Code from './Code'
import _Pre from './Pre'
import type { Language } from './getHighlighter'

export interface CodeBlockProps {
  language: Language
  code: string
}

const CodeBlock = ({ language, code }: CodeBlockProps): JSX.Element => {
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
