import styled from 'styled-components'
const maxWidthMedia = '920px'

export const Container = styled.div`
  position: relative;

  footer > div {
    padding-top: 220px;
  }
  @media (max-width: ${maxWidthMedia}) {
    footer > div > * {
      display: block;
    }
    footer > div {
      padding: 0;
      min-height: 184px;
    }
  }
`

export const MainContainer = styled.div``
