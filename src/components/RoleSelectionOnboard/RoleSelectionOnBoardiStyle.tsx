import styled from 'styled-components'
import { mediaQueries } from '../../globalStyles/mediaQuery'

export const TopContainerStyles = styled.div`
  background: linear-gradient(
    180deg,
    #fff5f1 0%,
    #feeae3 45.27%,
    #ffdbcc 94.31%
  );
  width: 100%;
  min-height: calc(318px + 164px + 59px);
  padding-block-end: 95px;
  ${mediaQueries(null, 'lg')`
    min-height: 444px;
    padding-block-end: 73px;
  `}

  ${mediaQueries(null, 'sm')`
   min-height: 544px;

  `}
`
export const MainContainer = styled.div`
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  width: 90%;
  padding: 47px 14px 14px 16px;
  display: flex;
  justify-content: center;
  ${mediaQueries(null, 'lg')`
    & > div:nth-child(1) {
      display: none;
    }
  `}
`
export const RoleOptionContainer = styled.div`
  position: relative;
  background-color: #fff;
  max-width: 583px;
  text-align: left;
  & > div {
    max-width: 426px;
    margin: auto;
    padding: 14px;
    div:nth-of-type(2),
    div:nth-of-type(3) {
      margin: 14px 0;
    }
  }
  ${mediaQueries('lg', null)`
    flex-basis: 50%;
    padding: calc(113px - 14px * 2) 0;
  `}
`
export const Container = styled.div`
  position: relative;

  footer > div {
    padding-top: 220px;
  }
  ${mediaQueries(null, 'lg')`
    footer > div > * {
      display: none;
    }
    footer > div {
      padding: 0;
      min-height: 184px;
    }
  `}
`
export const AccountContainer = styled.div`
  color: #979797;
  ${mediaQueries('lg', null)`
    p {
      position: absolute;
      margin: 0;
      top: 22px;
      right: 27px;
    }
  `}
`
export const HeaderContainer = styled.div`
  padding: 10px 16px 11px 10px;
`
export const ImageContainer = styled.div`
  background-color: #041d42;
  margin: 0;
  padding: 0;
  max-width: 583px;
  max-height: 601px;
  overflow: hidden;
  ${mediaQueries('lg', null)`
    flex-basis: 50%;
  `}
  p {
    margin: 0;
  }
`
export const JoinUsHeader = styled.h3`
  font-family: Futura Std;
  font-style: normal;
  font-weight: 650;
  font-size: 30px;
  line-height: 36px;
  color: #041d42;
  text-transform: capitalize;
  margin: calc(27px - 14px) 0 4px 0;
  ${mediaQueries('lg', null)`
    margin: calc(27px - 35px) 0 -18px 0; 
  `}
`
export const FooterContainer = styled.div`
  footer > div {
    max-width: 90%;
    margin: auto;
  }
  ${mediaQueries('lg', null)`
    footer > div {
      max-width: calc(563px * 2);
    }
  `}
`
