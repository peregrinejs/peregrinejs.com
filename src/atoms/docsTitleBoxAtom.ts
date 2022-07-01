import { atom } from 'jotai'

export interface DocsTitleBoxAtom {
  height: number | null
}

const docsTitleBoxAtom = atom<DocsTitleBoxAtom>({ height: null })

export default docsTitleBoxAtom
