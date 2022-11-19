import { useAtom } from 'jotai'
import Link from 'next/link'

import platformAtom from '@src/atoms/platformAtom'
import Box from '@src/components/Box'
import Text from '@src/components/Text'

import Section from '../components/Section'

const APISection = (): JSX.Element => {
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
          {/* TODO */}
          <h2>Featuring a slick API that uses all the latest stuff</h2>
        </Box>
        <TextContent />
      </Box>
      <Box css={{ '@lg': { width: '50%' } }}>TODO</Box>
    </Section>
  )
}

const TextContent = () => {
  const [platform] = useAtom(platformAtom)

  return platform === 'ios' ? (
    <Text as="p">
      Peregrine for iOS is written in 100% Swift. Use{' '}
      <Link href="https://developer.apple.com/documentation/swift/codable">
        Codable
      </Link>{' '}
      interfaces for type-safe serialization and de&shy;serialization. Use
      Apple&apos;s reactive{' '}
      <Link href="https://developer.apple.com/documentation/combine">
        Combine framework
      </Link>{' '}
      to send pub/sub events to <Link href="https://rxjs.dev">RxJS</Link>.
    </Text>
  ) : (
    <Text as="p">
      Peregrine for Android is written in 100% Kotlin. Use the official{' '}
      <Link href="https://kotlinlang.org/docs/serialization.html">
        Kotlin Serialization library
      </Link>{' '}
      for type-safe serialization and de&shy;serialization. Use reactive{' '}
      <Link href="https://kotlinlang.org/docs/flow.html">
        asynchronous flows
      </Link>{' '}
      to send pub/sub events to <Link href="https://rxjs.dev">RxJS</Link>.
    </Text>
  )
}

export default APISection
