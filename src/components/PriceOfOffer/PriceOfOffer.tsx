import React from 'react'
import styled from 'styled-components'
import { mediaQueries } from '../../globalStyles/mediaQuery'
import { fonts } from '../../globalStyles/fonts'

export interface PriceOfOfferProps {
  value: number
  unit: string
  currency: string
}

export const PriceOfOffer: React.FC<PriceOfOfferProps> = ({
  value,
  unit,
  currency,
}) => {
  return (
    <Price>
      {currency === 'Dollar' ? '$' : currency === 'Euro' ? '€' : 'Ar'}
      {value}/{unit}
    </Price>
  )
}

const Price = styled.p`
  ${fonts}
  font-family: 'Garamond', serif;
  font-size: 14px;
  line-height: 16px;
  color: #041d42;
  ${mediaQueries('sm', null)`
    font-size: 16px;
    line-height: 18px;
  `}
`
