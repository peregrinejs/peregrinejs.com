import omitNil from './omitNil'

describe('omitNil', () => {
  it('should do nothing to empty object', () => {
    const result = omitNil({})
    const expected = {}

    expect(result).toEqual(expected)
  })

  it('should omit nothing from { a: 1 } object', () => {
    const result = omitNil({ a: 1 })
    const expected = { a: 1 }

    expect(result).toEqual(expected)
  })

  it('should omit b key from { a: 1, b: null } object', () => {
    const result = omitNil({ a: 1, b: null })
    const expected = { a: 1 }

    expect(result).toEqual(expected)
  })

  it('should omit b key from { a: 1, b: undefined } object', () => {
    const result = omitNil({ a: 1, b: undefined })
    const expected = { a: 1 }

    expect(result).toEqual(expected)
  })
})
