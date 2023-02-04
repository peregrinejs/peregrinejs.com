import Link from '@src/components/Link'

const en = {
  Home: {
    tagline: 'Build truly artisanal hybrid apps',
    summary: (): JSX.Element => (
      <>
        Peregrine was built for{' '}
        <strong>curious, detail-oriented developers</strong> to explore the{' '}
        <strong>full potential of iOS and Android</strong> while providing the
        essentials for <strong>feature-rich web views</strong>.
      </>
    ),
    APISection: {
      Serialization: {
        title: 'Type-safe serialization',
      },
      Reactivity: {
        title: 'Asynchronous reactivity',
      },
    },
    NewsletterSection: {
      title: 'Subscribe to our newsletter',
      description:
        'Keep up to date with release announcements, community updates, new recipes, and more.',
      emailPlaceholder: 'Email',
      subscribe: 'Subscribe',
      success: 'You are now subscribed!',
      errors: {
        required: {
          email: 'Email address is required',
        },
        alreadySubscribed: (email: string): string =>
          `${email} is already subscribed.`,
        unknown: (errorCode: string): string =>
          `Something went wrong! 😭 Error: ${errorCode}`,
      },
    },
    RoadmapSection: {
      title: 'Roadmap',
      RecipeBook: {
        title: 'Recipe Book',
        description: (): JSX.Element => (
          <>
            Create a shared repository for native code snippets, called{' '}
            <Link href="/philosophy#recipes-not-plugins">Recipes</Link>.
          </>
        ),
      },
      StableRelease: {
        title: '1.0 Release',
        description:
          'Reach version 1.0.0 on Peregrine for Web, iOS, and Android.',
      },
      PerformanceEnhancements: {
        title: 'Performance Enhancements',
        description:
          'Only use HTTP/MessageChannels for the bridge when necessary.',
      },
      AndroidBinarySupport: {
        title: 'Binary support for Android',
        description: 'Bring parity with iOS by supporting binary data.',
      },
      AppPortfolio: {
        title: 'App Portfolio',
        description:
          'Celebrate and showcase success stories of Peregrine users.',
      },
    },
  },
  Philosophy: {
    name: 'Philosophy',
  },
  Comparison: {
    name: 'Comparison',
  },
  License: {
    name: 'License',
  },
  Documentation: {
    name: 'Docs',
    Introduction: {
      name: 'Introduction',
    },
    Architecture: {
      name: 'Architecture',
    },
    QuickTour: {
      name: 'Quick Tour',
    },
  },
  Footer: {
    Overview: {
      title: 'Overview',
    },
    Community: {
      title: 'Community',
    },
  },
}

export default en
