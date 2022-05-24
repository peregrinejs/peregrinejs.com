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

  [`& .hljs-comment`]: { color: 'rgb($hlcomment)' },
  [`& .hljs-tag`]: { color: 'rgb($hlkeyword)' },
  [`& .hljs-operator,
    & .hljs-punctuation,
    & .hljs-subst`]: { color: 'rgb($hloperator)' },
  [`& .hljs-operator`]: { opacity: 0.7 },
  [`& .hljs-bullet,
    & .hljs-deletion,
    & .hljs-name,
    & .hljs-selector-tag,
    & .hljs-template-variable,
    & .hljs-variable`]: { color: 'rgb($hlvariable)' },
  [`& .hljs-attr,
    & .hljs-link,
    & .hljs-literal,
    & .hljs-number,
    & .hljs-symbol,
    & .hljs-variable.constant_`]: { color: 'rgb($hlconstant)' },
  [`& .hljs-class .hljs-title,
    & .hljs-title,
    & .hljs-title.class_`]: { color: 'rgb($hlclass)' },
  [`& .hljs-strong`]: { fontWeight: 'bold', color: 'rgb($hlclass)' },
  [`& .hljs-addition,
    & .hljs-code,
    & .hljs-string,
    & .hljs-title.class_.inherited__`]: { color: 'rgb($hlstring)' },
  [`& .hljs-built_in,
    & .hljs-doctag,
    & .hljs-keyword.hljs-atrule,
    & .hljs-quote,
    & .hljs-regexp`]: { color: 'rgb($hlconstant)' },
  [`& .hljs-attribute,
    & .hljs-function .hljs-title,
    & .hljs-section,
    & .hljs-title.function_`]: { color: 'rgb($hlfunction)' },
  [`&.diff .hljs-meta,
    & .hljs-keyword,
    & .hljs-template-tag,
    & .hljs-type`]: { color: 'rgb($hlkeyword)' },
  [`& .hljs-emphasis`]: { color: 'rgb($hlkeyword)', fontStyle: 'italic' },
  [`& .hljs-meta,
    & .hljs-meta .hljs-keyword,
    & .hljs-meta .hljs-string`]: { color: 'rgb($hlmeta)' },
  [`& .hljs-meta .hljs-keyword,
    & .hljs-meta-keyword`]: { fontWeight: 'bold' },
})

export default Code
