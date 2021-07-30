import React, { FC } from 'react'
import styled from 'styled-components'
import language from '../../assests/languages.svg'
import transactions from '../../assests/transactions.svg'
import account from '../../assests/account.svg'
import signin from '../../assests/signin.svg'
import { fonts } from '../../globalStyles/fonts'
import { Link } from 'react-router-dom'
import { Paths } from '../helpers/routeHelper'

export const loggedIn = [
  { path: '#language', imgSrc: language, alt: 'Languages', text: 'English' },
  {
    path: '#transactions',
    imgSrc: transactions,
    alt: 'Transactionss',
    text: 'Transactions',
  },
  {
    path: '#account',
    imgSrc: account,
    alt: 'Accounts',
    text: 'Account',
  },
]

export const loggeOut = [
  { path: '#language', imgSrc: language, alt: 'Languages', text: 'English' },
  {
    path: 'login',
    imgSrc: signin,
    alt: 'Log in',
    text: 'Log in',
  },
  {
    path: 'registered',
    imgSrc: account,
    alt: 'Sign Up',
    text: 'Sign Up',
  },
]
export interface ItemType {
  path: string
  imgSrc?: string
  alt: string
  text: string
}

export interface LinkTypes {
  item: Array<ItemType>
}

export const HeaderNavLink: FC<ItemType> = ({ path, text, imgSrc, alt }) => (
  <Item>
    <Link type='button' to={`${Paths.HOME}${path}`} data-testid={text}>
      <img src={imgSrc} alt={alt} />
      <span>{text}</span>
    </Link>
  </Item>
)

const Item = styled.li`
  a {
    ${fonts}
    font-family: 'Futura Std', Arial, Helvetica, sans-serif;
    font-size: 25px;
    line-height: 30px;
    color: #041d42;
    text-decoration: none;
    display: flex;

    span {
      margin-inline-start: 10px;

      @media (max-width: 600px) {
        display: none;
      }
    }
  }
  &:first-of-type {
    @media (max-width: 900px) {
      display: none;
    }
  }
`
