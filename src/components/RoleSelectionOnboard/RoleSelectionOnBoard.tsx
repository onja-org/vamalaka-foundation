import React, { useState } from 'react'
import {
  TopContainerStyles,
  HeaderContainer,
  FooterContainer,
  Container,
  MainContainer,
  RoleOptionContainer,
  AccountContainer,
  ImageContainer,
  JoinUsHeader,
} from './RoleSelectionOnBoardiStyle'
import { DescriptionOffer } from '../DescriptionOffer/descriptionOffer'
import { RoleSelectOption } from '../RoleSelectOption/RoleSelectOption'
import userIcon from '../../stories/assets/user.svg'
import userIconHovered from '../../stories/assets/userNotHovered.svg'
import briefcaseIcon from '../../stories/assets/briefcase.svg'
import briefcaseIconHovered from '../../stories/assets/briefcaseNotHovered.svg'
import { Login } from '../Login/Login'
import { LeftSide } from '../LeftSide/LeftSide'
import { Header } from '../Header'
import { loggeOut } from '../HeaderNavLink/HeaderNavLink'
import { PageFooter } from '../PageFooter/PageFooter'
import footerLinks from '../../utils/FooterLinks'

export const RoleSelectOnboard = () => {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const [roleSelected, setRoleSelected] = useState('')

  return (
    <Container>
      <TopContainerStyles>
        <HeaderContainer>
          <Header item={loggeOut} />
        </HeaderContainer>
        <MainContainer>
          <ImageContainer>
            <LeftSide backgroundImage='Baobab' />
          </ImageContainer>
          <RoleOptionContainer>
            <div>
              <JoinUsHeader>Join us</JoinUsHeader>
              <DescriptionOffer
                text={
                  "To begin this story, tell us what kind of account you'd be opening "
                }
              />
              <div>
                <RoleSelectOption
                  label='Buyer'
                  text='Personal account to manage all you activities.'
                  src={userIcon}
                  hoveredSrc={userIconHovered}
                  alt='User icon'
                  setRoleSelected={setRoleSelected}
                />
              </div>
              <div>
                <RoleSelectOption
                  label='Seller'
                  text='Own or beluserIconHoveredong to a company, this is for you.'
                  src={briefcaseIcon}
                  hoveredSrc={briefcaseIconHovered}
                  alt='Briefcase icon'
                  setRoleSelected={setRoleSelected}
                />
              </div>
              <AccountContainer>
                <Login isSignedUp={true} href='./' />
              </AccountContainer>
            </div>
          </RoleOptionContainer>
        </MainContainer>
      </TopContainerStyles>
      <FooterContainer>
        <PageFooter footerLinks={footerLinks} />
      </FooterContainer>
    </Container>
  )
}
