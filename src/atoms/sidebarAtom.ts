import { atom } from 'jotai'

export interface SidebarAtom {
  open: boolean
}

const sidebarAtom = atom<SidebarAtom>({ open: true })

export default sidebarAtom
