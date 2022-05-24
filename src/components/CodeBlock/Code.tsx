import React, { useEffect, useRef } from 'react'

import { styled } from '@src/stitches.config'

import getHighlighter from './getHighlighter'

export type CodeProps = React.HTMLAttributes<HTMLElement>

const Code = (props: CodeProps): JSX.Element => {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (ref.current) {
      const hljs = getHighlighter()
      hljs.highlightElement(ref.current)
    }
  })

  return <Root ref={ref} {...props} />
}

const Root = styled('code', {
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
  [`& .hljs-strong`]: { fontWeight: 'bold', color: '$hlclass' },
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
    & .hljs-meta-keyword`]: { fontWeight: 'bold' },
})

export default Code
