import { atom } from 'jotai'

import type { media } from '@src/stitches.config'

export const bpMd = 640
export const bpLg = 1280

const bpAtom = atom<keyof typeof media | null>(null)

export default bpAtom
