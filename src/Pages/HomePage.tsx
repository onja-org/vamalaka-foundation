import React from 'react'
import {
  TopContainerStyles,
  Container,
  HeaderContainer,
  FooterContainer,
} from '../components/RoleSelectionOnboard/RoleSelectionOnBoardiStyle'
import { Header } from '../components/Header'
import { loggedIn } from '../components/HeaderNavLink/HeaderNavLink'
import { PageFooter, Props } from '../components/PageFooter/PageFooter'
import { RoleSelectOnboard } from '../components/RoleSelectionOnboard/RoleSelectionOnBoard'

export const HomePage: React.FC<Props> = ({ footerLinks }) => {
  return (
    <Container>
      <TopContainerStyles>
        <HeaderContainer>
          <Header item={loggedIn} />
        </HeaderContainer>
        <RoleSelectOnboard />
      </TopContainerStyles>
      <FooterContainer>
        <PageFooter footerLinks={footerLinks} />
      </FooterContainer>
    </Container>
  )
}
