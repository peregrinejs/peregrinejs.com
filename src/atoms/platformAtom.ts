import Platform from '@src/Platform'
import { atom } from 'jotai'

const platformAtom = atom<Platform>('iOS')

export default platformAtom
