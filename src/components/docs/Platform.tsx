import usePlatform from '@src/lib/docs/usePlatform'

const Platform = (): string | null => {
  const currentPlatform = usePlatform()

  return currentPlatform === 'android' ? 'Android' : 'iOS'
}

export default Platform
