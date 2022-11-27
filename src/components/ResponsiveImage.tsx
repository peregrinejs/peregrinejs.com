import type { ImageProps } from 'next/image'
import Image from 'next/image'

export type ResponsiveImageProps = ImageProps

const ResponsiveImage = ({
  alt,
  ...props
}: ResponsiveImageProps): JSX.Element => {
  return <Image alt={alt} layout="responsive" {...props} />
}

export default ResponsiveImage
