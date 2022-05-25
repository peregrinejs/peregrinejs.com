import Box from '@src/components/Box'
import Button from '@src/components/Button'
import Select from '@src/components/Select'
import Text from '@src/components/Text'
import { styled } from '@src/stitches.config'

import LicenseBox from './LicenseBox'

const LicenseSelect = (): JSX.Element => {
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
          <Select css={{ flex: 1 }}>
            <option value="one">1 developer ($10)</option>
            <option value="three">3 developers ($100)</option>
            <option value="unlimited">Unlimited developers ($1000)</option>
          </Select>
          <Button>Purchase</Button>
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
  marginTop: 'auto',
})

const Purchase = styled(Box, {
  display: 'flex',
  justifyContent: 'center',
  gap: '1em',
  marginTop: 'auto',
})

export default LicenseSelect
