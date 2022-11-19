import { useAtom } from 'jotai'

import platformAtom from '@src/atoms/platformAtom'
import Box from '@src/components/Box'
import { MDX, useMDXDirectory } from '@src/lib/mdx'
import Section from '@src/screens/Home/components/Section'

const APISection = (): JSX.Element => {
  const [platform] = useAtom(platformAtom)
  const mdx = useMDXDirectory()

  return (
    <Section
      css={{
        '@lg': {
          maxWidth: '90vw',
          display: 'flex',
          gap: '2rem',
        },
      }}
    >
      <Box
        css={{
          'display': 'flex',
          'flexDirection': 'column',
          '@lg': { width: '50%' },
        }}
      >
        <Box
          css={{
            'display': 'flex',
            'flexDirection': 'column',
            '@lg': { flexDirection: 'row-reverse' },
          }}
        >
          <h2>Featuring a slick API that uses all the latest stuff</h2>
        </Box>
        <MDX {...mdx[`sections/api/${platform}.mdx`]} />
      </Box>
    </Section>
  )
}

export default APISection
