import Image from 'next/image'

const ResponsiveImage = ({ alt, ...props }: any): JSX.Element => {
  return <Image alt={alt} layout="responsive" {...props} />
}

export default ResponsiveImage
