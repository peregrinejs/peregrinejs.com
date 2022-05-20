import type { CSS } from '@stitches/react'
import React, { forwardRef, useEffect, useRef } from 'react'

import { styled } from '@src/stitches.config'

import type { Language } from './getHighlighter'
import getHighlighter from './getHighlighter'

export interface CodeBlockProps {
  language: Language
  code: string
  css?: CSS
}

const CodeBlock = forwardRef<HTMLPreElement, CodeBlockProps>(
  ({ language, code, ...props }, forwardedRef) => {
    const codeRef = useRef<HTMLElement>(null)

    useEffect(() => {
      if (codeRef.current) {
        const hljs = getHighlighter()
        hljs.highlightElement(codeRef.current)
      }
    })

    return (
      <Pre ref={forwardedRef} {...props}>
        <Code ref={codeRef} className={`language-${language}`}>
          {code.trim()}
        </Code>
      </Pre>
    )
  },
)

const Pre = styled('pre', {
  overflow: 'scroll',
  fontSize: '$sm',
  lineHeight: '1rem',
})

const Code = styled('code', {
  display: 'inline',

  [`& .hljs-comment`]: { color: '$hlcomment' },
  [`& .hljs-tag`]: { color: '$hlkeyword' },
  [`& .hljs-operator,
    & .hljs-punctuation,
    & .hljs-subst`]: { color: '$hloperator' },
  [`& .hljs-operator`]: { opacity: 0.7 },
  [`& .hljs-bullet,
    & .hljs-deletion,
    & .hljs-name,
    & .hljs-selector-tag,
    & .hljs-template-variable,
    & .hljs-variable`]: { color: '$hlvariable' },
  [`& .hljs-attr,
    & .hljs-link,
    & .hljs-literal,
    & .hljs-number,
    & .hljs-symbol,
    & .hljs-variable.constant_`]: { color: '$hlconstant' },
  [`& .hljs-class .hljs-title,
    & .hljs-title,
    & .hljs-title.class_`]: { color: '$hlclass' },
  [`& .hljs-strong`]: { fontWeight: '$bold', color: '$hlclass' },
  [`& .hljs-addition,
    & .hljs-code,
    & .hljs-string,
    & .hljs-title.class_.inherited__`]: { color: '$hlstring' },
  [`& .hljs-built_in,
    & .hljs-doctag,
    & .hljs-keyword.hljs-atrule,
    & .hljs-quote,
    & .hljs-regexp`]: { color: '$hlconstant' },
  [`& .hljs-attribute,
    & .hljs-function .hljs-title,
    & .hljs-section,
    & .hljs-title.function_`]: { color: '$hlfunction' },
  [`&.diff .hljs-meta,
    & .hljs-keyword,
    & .hljs-template-tag,
    & .hljs-type`]: { color: '$hlkeyword' },
  [`& .hljs-emphasis`]: { color: '$hlkeyword', fontStyle: 'italic' },
  [`& .hljs-meta,
    & .hljs-meta .hljs-keyword,
    & .hljs-meta .hljs-string`]: { color: '$hlmeta' },
  [`& .hljs-meta .hljs-keyword,
    & .hljs-meta-keyword`]: { fontWeight: '$bold' },
})

CodeBlock.displayName = 'CodeBlock'

export default CodeBlock
