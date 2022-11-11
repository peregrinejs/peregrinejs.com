import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import React, { useState } from 'react'

import Box from '@src/components/Box'
import Select from '@src/components/Select'
import Text from '@src/components/Text'
import { styled } from '@src/stitches.config'

import LicenseBox from './LicenseBox'
import type { Tier } from './tiers'
import tiers, { isTier } from './tiers'

const LicenseSelect = (): JSX.Element => {
  const [license, setLicense] = useState<Tier>('single')

  const handleChange = (event: React.FormEvent<HTMLSelectElement>) => {
    const tier = event.currentTarget.value

    if (isTier(tier)) {
      setLicense(tier)
    } else {
      alert(`Unknown tier: ${tier}`)
    }
  }

  return (
    <Root>
      <LicenseBox title="Open-Source">
        <p>Use in open-source apps.</p>
        <p>
          Distribute, modify, and/or integrate Peregrine in open-source apps
          under the same GPLv3 license.
        </p>
        <Free>Free</Free>
      </LicenseBox>
      <LicenseBox title="Commercial">
        <p>Use in commercial apps.</p>
        <p>
          Distribute, modify, and/or integrate Peregrine in one commercial
          application per license.
        </p>
        <h5>Choose your tier</h5>
        <p>
          Please choose carefully. Relicensing is possible, but no refunds after
          30 days of purchase.
        </p>
        <Purchase>
          <Select css={{ flex: 1 }} onChange={handleChange}>
            <option value="single">1 developer ($10)</option>
            <option value="team">3 developers ($100)</option>
            <option value="enterprise">Unlimited developers ($1000)</option>
          </Select>
          <PayPalScriptProvider
            options={{
              'currency': 'USD',
              'client-id':
                'AcSRykA_rr_H3_gmgvML9fvnTIlBtg1fQsNCp_BhiUeYH8RP9AVsQ0HWSZ0l4x-EsEaE9IRDNN2u0Nld',
            }}
          >
            <PayPalButtons
              style={{ layout: 'horizontal', tagline: false }}
              forceReRender={[license]}
              fundingSource="paypal"
              createOrder={(_, actions) =>
                actions.order.create({
                  purchase_units: [tiers[license]],
                })
              }
            />
          </PayPalScriptProvider>
        </Purchase>
      </LicenseBox>
    </Root>
  )
}

const Root = styled(Box, {
  display: 'flex',
  gap: '1em',
  margin: '1em 0 2em',
})

const Free = styled(Text, {
  display: 'block',
  textAlign: 'center',
  textTransform: 'uppercase',
  fontWeight: '$bold',
  letterSpacing: '$money',
  color: 'rgb($money)',
  margin: 'auto 0 2em',
})

const Purchase = styled(Box, {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '1em',
  marginTop: 'auto',
})

export default LicenseSelect
