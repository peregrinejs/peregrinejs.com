export const PLATFORMS = ['ios', 'android'] as const

export const isPlatform = (platform: string): platform is Platform =>
  PLATFORMS.includes(platform as Platform)

type Platform = typeof PLATFORMS[number]

export default Platform
