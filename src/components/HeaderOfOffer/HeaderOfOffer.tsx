import React from 'react'
import { Header } from '../../redux/Style'

export interface HeaderProps {
  name?: string
}

export const HeaderOfOffer: React.FC<HeaderProps> = ({ name }) => (
  <Header>{name}</Header>
)
