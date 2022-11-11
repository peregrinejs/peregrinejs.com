const tiers = {
  single: {
    description: '1 developer license',
    amount: {
      currency_code: 'USD',
      value: '10',
    },
  },
  team: {
    description: '3 developers license',
    amount: {
      currency_code: 'USD',
      value: '100',
    },
  },
  enterprise: {
    description: 'Unlimited developers license',
    amount: {
      currency_code: 'USD',
      value: '1000',
    },
  },
} as const

export type Tier = keyof typeof tiers

export const isTier = (tier: string): tier is Tier => tier in tiers

export default tiers
