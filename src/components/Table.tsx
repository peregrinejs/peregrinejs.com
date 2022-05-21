import { styled } from '@src/stitches.config'

export type TableProps = React.HTMLAttributes<HTMLTableElement>

const Table = ({ ...props }: TableProps): JSX.Element => {
  return <Root {...props} />
}

const Root = styled('table', {
  'borderCollapse': 'collapse',
  'borderSpacing': 1,
  'width': '100%',
  'margin': '1em 0',

  '& :is(td, th)': {
    backgroundColor: '$gray5',
    padding: '0.25em 0.5em',
  },

  '& th': {
    backgroundColor: '$gray4',
    color: '$gray1',
    fontWeight: '$bold',
  },

  '& th:empty': {
    backgroundColor: 'inherit',
  },

  '& tr:nth-child(even) :is(td, th)': {
    backgroundColor: '$gray4',
  },
})

export const Th = styled('th', {
  borderWidth: 0,
  borderColor: '$bg',
  borderStyle: 'solid',

  variants: {
    borderTop: {
      true: {
        borderTopWidth: 2,
      },
    },
    borderRight: {
      true: {
        borderRightWidth: 2,
      },
    },
    borderBottom: {
      true: {
        borderBottomWidth: 2,
      },
    },
    borderLeft: {
      true: {
        borderLeftWidth: 2,
      },
    },
  },
})

export default Table
