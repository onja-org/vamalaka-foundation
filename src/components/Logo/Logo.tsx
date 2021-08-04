import React from 'react'
import styled from 'styled-components'
import { Paths } from '../helpers/routeHelper'
import { Link } from 'react-router-dom'
import { mediaQueries } from '../../globalStyles/mediaQuery'
export interface LogoProps {
  logo: string
  alt: string
}

export const Logo: React.FC<LogoProps> = ({ alt, logo }) => {
  return (
    <Container>
      <Link to={Paths.HOME}>
        <Image src={logo} alt={alt} />
      </Link>
    </Container>
  )
}

const Container = styled.h1`
  text-align: start;
`
const Image = styled.img`
  max-width: 100%;
  margin-inline-start: 0;
  ${mediaQueries('sm', null)`
    width: 242px;
  `}
  ${mediaQueries('md', null)`
     width: 346px;
  `}
`
