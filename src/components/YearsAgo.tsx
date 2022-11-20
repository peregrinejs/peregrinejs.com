export interface YearsAgoProps {
  from: number
}

const YearsAgo = ({ from }: YearsAgoProps): JSX.Element => {
  return <>{new Date().getFullYear() - from}</>
}

export default YearsAgo
