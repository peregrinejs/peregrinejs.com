import usePlatform from '@src/lib/docs/usePlatform'

const Platform = (): JSX.Element => {
  const currentPlatform = usePlatform()

  return <>{currentPlatform === 'android' ? 'Android' : 'iOS'}</>
}

export default Platform
