import rehypeShiki from '@imhoff/rehype-shiki'
import vm from 'node:vm'
import remarkGfm from 'remark-gfm'
import remarkTextr from 'remark-textr'
import shiki from 'shiki'
import typographicBase from 'typographic-base'
import range from 'lodash/fp/range.js'
import trim from 'lodash/fp/trim.js'
import { toString } from 'hast-util-to-string'
import { codeToHast } from 'shiki-renderer-hast'

const highlighter = await shiki.getHighlighter({ theme: 'css-variables' })

/** @type {(data: { meta?: string }) => number[]} */
const getHighlightedLines = data => {
  /** @type {number[]} */
  const lines = []

  /** @type {{ highlight?: string }} */
  const { highlight } = data?.meta
    ? vm.runInNewContext(`exports = ${data.meta}`)
    : {}

  if (highlight) {
    const lineRanges = highlight.split(',')

    for (const lineRange of lineRanges) {
      const m = lineRange.match(/^(?<start>\d+)\.\.(?<end>\d+)$/)

      if (m) {
        const { start, end } = m.groups
        lines.push(...range(Number(start), Number(end) + 1))
      } else {
        lines.push(Number(lineRange))
      }
    }
  }

  return lines
}

/** @type {import('@mdx-js/mdx').CompileOptions} */
const options = {
  remarkPlugins: [
    [
      remarkTextr,
      {
        plugins: [typographicBase],
        options: { locale: 'en-us' },
      },
    ],
    remarkGfm,
  ],
  rehypePlugins: [
    [
      rehypeShiki,
      {
        renderer: (node, lang) => {
          /** @type {{ type: 'text' value: string }} */
          const textNode = node.children[0]

          lang ??= 'txt'
          textNode.value = trim(textNode.value)

          const lines = textNode.value.split('\n')

          /** @type {{ [key: string]: string }[]} */
          const lineProperties = Array(lines.length)
            .fill(null)
            .map(() => ({ className: [] }))

          if (node.data) {
            for (const line of getHighlightedLines(node.data)) {
              lineProperties[line - 1].className.push('highlight')
            }
          }

          const pre = codeToHast(highlighter, toString(node), lang)
          const [codeNode] = pre.children

          // set the highlighter language in a data attribute
          pre.properties['data-language'] = lang

          codeNode.children = codeNode.children
            .filter(n => n.type === 'element' && n.tagName === 'span')
            .map((n, i) => {
              return {
                ...n,
                properties: {
                  ...n.properties,
                  ...lineProperties[i],
                  className: [
                    n.properties.className,
                    ...lineProperties[i].className,
                  ],
                  ['data-line-number']: lang === 'txt' ? undefined : i + 1,
                },
              }
            })

          return pre
        },
      },
    ],
  ],
  providerImportSource: '@mdx-js/react',
}

export default options
