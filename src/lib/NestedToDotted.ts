type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}${'' extends P ? '' : '.'}${P}`
    : never
  : never

type NestedToDotted<T> = T extends Record<string, unknown>
  ? { [K in keyof T]-?: Join<K, NestedToDotted<T[K]>> }[keyof T]
  : ''

export default NestedToDotted
