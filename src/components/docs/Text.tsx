import usePlatform from '@src/lib/docs/usePlatform'

export interface TextProps {
  android: string
  ios: string
}

const Text = ({ android, ios }: TextProps): JSX.Element => {
  const platform = usePlatform()

  return <>{platform === 'android' ? android : ios}</>
}

export default Text
