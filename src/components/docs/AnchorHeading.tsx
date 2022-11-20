import { useAtom } from 'jotai'

import docsTitleBoxAtom from '@src/atoms/docsTitleBoxAtom'
import type { AnchorHeadingProps as _AnchorHeadingProps } from '@src/components/AnchorHeading'
import _AnchorHeading from '@src/components/AnchorHeading'

export type AnchorHeadingProps = _AnchorHeadingProps

const AnchorHeading = ({ ...props }: AnchorHeadingProps): JSX.Element => {
  const [{ height }] = useAtom(docsTitleBoxAtom)

  return <_AnchorHeading {...props} anchorOffset={height ?? 0} />
}

export const H1 = (
  props: Omit<AnchorHeadingProps, 'Component'>,
): JSX.Element => <AnchorHeading {...props} Component="h1" />

export const H2 = (
  props: Omit<AnchorHeadingProps, 'Component'>,
): JSX.Element => <AnchorHeading {...props} Component="h2" />

export const H3 = (
  props: Omit<AnchorHeadingProps, 'Component'>,
): JSX.Element => <AnchorHeading {...props} Component="h3" />

export const H4 = (
  props: Omit<AnchorHeadingProps, 'Component'>,
): JSX.Element => <AnchorHeading {...props} Component="h4" />

export const H5 = (
  props: Omit<AnchorHeadingProps, 'Component'>,
): JSX.Element => <AnchorHeading {...props} Component="h5" />

export const H6 = (
  props: Omit<AnchorHeadingProps, 'Component'>,
): JSX.Element => <AnchorHeading {...props} Component="h6" />

export default AnchorHeading
