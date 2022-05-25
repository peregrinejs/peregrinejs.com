import { atom } from 'jotai'

import type Platform from '@src/Platform'

const platformAtom = atom<Platform>('iOS')

export default platformAtom
