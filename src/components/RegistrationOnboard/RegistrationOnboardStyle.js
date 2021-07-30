import styled, { css } from 'styled-components'

export const FlexLayout = css`
  display: flex;
  flex-direction: column;
`

export const RegistrationMainContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0;

  @media (max-width: 920px) {
    display: block;
    & > div:nth-child(1) {
      display: none;
    }
  }
`

export const RegistrationOnboardingContainer = styled.div`
  font-family: 'Futura Std', Arial, Helvetica, sans-serif;
  font-style: normal;
  background-color: #fff;
  max-width: 583px;
  padding-left: 13px;
  padding-top: 25px;
  padding-right: 16px;
  padding-bottom: 34px;

  @media (min-width: 920px) {
    padding-top: 18px;
    padding-right: 26px;
  }

  @media (min-width: 1440px) {
    width: 583px;
  }
`

export const Header = styled.div`
  display: none;

  @media (min-width: 920px) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
`

export const HeaderContent = styled.div`
  ${FlexLayout}
  align-items: flex-end;
  gap: 4px;
`

export const HeaderPage = styled.span`
  color: #bdbdbd;
  font-size: 14px;
  line-height: 17px;
`

export const HeaderInfo = styled.strong`
  color: #979797;
  font-weight: 650;
  font-size: 16px;
  line-height: 19px;
`

export const RegistrationOnboardingContent = styled.div`
  ${FlexLayout}
  width: 100%;
`

export const RegistrationForm = styled.form`
  ${FlexLayout}
  gap: 17px;
  width: 100%;

  @media (min-width: 920px) {
    padding-top: 27px;
    align-self: center;
    max-width: 80%;
  }
`
export const RegistrationFormContent = styled.div`
  ${FlexLayout}
  gap: 14px;
`

export const RegistrationButtonContainer = styled.div`
  ${FlexLayout}
  align-items: center;
  gap: 15px;
  button {
    font-size: 16px;
  }

  @media (min-width: 920px) {
    flex-direction: row;
    align-self: unset;
    width: unset;
  }
`
export const RegistrationFormHeading = styled.h2`
  text-align: left;
  margin: 0;
  display: none;
  font-size: 30px;
  line-height: 36px;
  color: #041d42;

  @media (min-width: 920px) {
    display: block;
  }
`
