import isNil from 'lodash/fp/isNil'
import omitBy from 'lodash/fp/omitBy'

type OmitNil = <T>(obj: T) => {
  [K in keyof T]: T[K] extends null | undefined ? never : T[K]
}

const omitNil: OmitNil = omitBy(isNil)

export default omitNil
