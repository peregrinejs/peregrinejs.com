import { atom } from 'jotai'

import type { media } from '@src/stitches.config'

const bpAtom = atom<keyof typeof media | null>(null)

export default bpAtom
