import React from 'react'
import styled from 'styled-components'
import { Paths } from '../helpers/routeHelper'
import { Link } from 'react-router-dom'
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

  @media (min-width: 362px) {
    width: 242px;
  }

  @media (min-width: 834px) {
    width: 346px;
  }
`
