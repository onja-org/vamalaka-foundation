import { FC } from 'react'
import styled from 'styled-components'
import { mediaQueries } from '../../globalStyles/mediaQuery'

const Container = styled.div`
  display: flex;
  gap: 5.2px;
  flex-wrap: wrap;
  ${mediaQueries('lg', 'md')`
    gap: 6px;
  `}
`

export const RatingStyle: FC = ({ children }) => {
  return <Container>{children}</Container>
}
