import { atom } from 'jotai'

import type Platform from '@src/Platform'

const platformAtom = atom<Platform>('ios')

export default platformAtom
